param(
  [string]$Root = (Get-Location).Path,
  [int]$Port = 5500
)

Add-Type -AssemblyName System.Net.HttpListener -ErrorAction SilentlyContinue

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Output "Serving $Root on http://localhost:$Port/"

$mimeMap = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "application/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".webp" = "image/webp"
  ".gif"  = "image/gif"
  ".svg"  = "image/svg+xml"
  ".ico"  = "image/x-icon"
  ".pdf"  = "application/pdf"
  ".woff" = "font/woff"
  ".woff2"= "font/woff2"
}

while ($listener.IsListening) {
  $context = $listener.GetContext()
  $request = $context.Request
  $response = $context.Response
  try {
    $localPath = [System.Uri]::UnescapeDataString($request.Url.AbsolutePath)
    if ($localPath -eq "/") { $localPath = "/index.html" }
    $filePath = Join-Path $Root ($localPath.TrimStart("/"))
    $filePath = [System.IO.Path]::GetFullPath($filePath)

    if (-not $filePath.StartsWith([System.IO.Path]::GetFullPath($Root))) {
      $response.StatusCode = 403
      $response.Close()
      continue
    }

    if (Test-Path $filePath -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
      $mime = $mimeMap[$ext]
      if (-not $mime) { $mime = "application/octet-stream" }
      $bytes = [System.IO.File]::ReadAllBytes($filePath)
      $response.ContentType = $mime
      $response.ContentLength64 = $bytes.Length
      $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $response.StatusCode = 404
      $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $localPath")
      $response.OutputStream.Write($msg, 0, $msg.Length)
    }
  } catch {
    try {
      $response.StatusCode = 500
      $err = [System.Text.Encoding]::UTF8.GetBytes("500: $($_.Exception.Message)")
      $response.OutputStream.Write($err, 0, $err.Length)
    } catch {}
  } finally {
    $response.Close()
  }
}
