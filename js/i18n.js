/* Traducción ES/EN sin duplicar páginas.
   El español vive en el HTML (es la fuente de verdad) y se memoriza al cargar;
   aquí abajo solo está el inglés. Cada texto traducible lleva un data-i18n:

     data-i18n            -> contenido del elemento (admite <strong>, <br>)
     data-i18n-alt        -> atributo alt
     data-i18n-aria       -> atributo aria-label
     data-i18n-content    -> atributo content (meta description)
     data-i18n-step-*     -> data-step-title / data-step-text (Rail Folding)
     data-i18n-light-name -> data-light-name (3DS Max)

   Este archivo se carga ANTES que main.js para que los widgets que leen esos
   data-* al inicializarse ya encuentren el idioma correcto. */

const I18N_EN = {

  /* --- Navegación, pie y lightbox (comunes a todas las páginas) --------- */
  'nav.home': 'Home',
  'nav.cv': 'CV',
  'nav.projects': 'Projects',
  'nav.about': 'About me',
  'nav.contact': 'Contact',
  'nav.back': '‹ Back',
  'nav.openMenu': 'Open menu',
  'nav.mainMenu': 'Main menu',
  'nav.projectsMenu': 'Projects menu',
  'nav.langSelector': 'Language selector',
  'nav.footer': 'Footer',
  'lightbox.close': 'Close image',
  'lightbox.prev': 'Previous image',
  'lightbox.next': 'Next image',
  'lightbox.zoom': 'Enlarge image',

  /* Comunes a las tres páginas de bloque del TFG */
  'detail.back': '‹ Back to the project',
  'detail.ctaGallery': 'View the complete gallery',
  'detail.ctaNext': 'Next block →',
  'tfg.zoomProject': 'Enlarge project image',

  /* --- Inicio ---------------------------------------------------------- */
  'home.docTitle': 'Nicolás Vázquez García — Industrial Design Engineer',
  'home.docDesc': 'Portfolio of Nicolás Vázquez García, industrial design and product development engineer.',
  'home.subtitle': 'Industrial Design and<br> Product Development Engineer',

  /* --- CV -------------------------------------------------------------- */
  'cv.docTitle': 'CV — Nicolás Vázquez García',
  'cv.docDesc': 'CV of Nicolás Vázquez García, industrial design and product development engineer.',
  'cv.profileTitle': 'Professional profile',
  'cv.profileText': '<strong>Industrial Design and Product Development Engineer</strong> with experience in <strong>automotive</strong> and technical engineering, looking to take the next step towards the <strong>retail</strong> sector or <strong>product design</strong> in its purest form. I combine <strong>technical rigour, project management and precise documentation</strong> with a strong sensitivity for <strong>form, function and the user/client experience</strong>. <strong>Proactive, adaptable and team-oriented</strong>. Based in Asturias, with <strong>full availability for national and international mobility</strong>.',

  'cv.focusTitle': 'Focus areas',
  'cv.focusHint': 'where I add value',
  'cv.focus1Title': 'Pure Product Development',
  'cv.focus1TextA': 'Concept, sketching, high-precision 3D modelling and technical development.',
  'cv.focus1TextB': 'Cross-functional project management: feasibility analysis, material selection, cost optimisation and 3D visualisation (rendering).',
  'cv.focus2Title': 'Retail, Commercial Space and Furniture',
  'cv.focus2TextA': 'Technical furniture, point-of-sale displays, bespoke structures and ephemeral architecture.',
  'cv.focus2TextB': 'Translating brand identity into tangible physical elements, optimising resources, aesthetics and manufacturing costs.',
  'cv.focus3Title': 'High-Demand Engineering',
  'cv.focus3TextA': 'Automotive, Defence, Aerospace, Naval and Rail.',
  'cv.focus3TextB': 'Integration into dynamic environments of high technical precision, applying analytical rigour and a capacity for continuous learning with a holistic view of product development.',

  'cv.experienceTitle': 'Experience',
  'cv.experienceHint': 'click on each logo',

  'cv.renaultRole': 'NEXT-GEN Intern – Renault Talent',
  'cv.renaultMeta': 'Sep 2025 – Feb 2026 · Valladolid, Spain',
  'cv.renaultDesc': 'Support for technical series-life management on the Captur and Symbioz models.',
  'cv.renaultPoint1': 'Direct collaboration with the MZK Adaptations Project Manager.',
  'cv.renaultPoint2': 'Drafting, control and follow-up of technical adaptation documentation.',
  'cv.renaultPoint3': 'Coordination of project phases in a high-performance automotive environment.',

  'cv.foncuevaRole': 'Technical Office',
  'cv.foncuevaMeta': 'Jul 2025 – Aug 2025 · Sariego, Asturias',
  'cv.foncuevaDesc': 'Industrial technical design and execution supervision.',
  'cv.foncuevaPoint1': '3D design of parts and components for industrial machinery.',
  'cv.foncuevaPoint2': 'Preparation of manufacturing and assembly drawings.',
  'cv.foncuevaPoint3': 'Supervision of project progress and on-site technical verification.',

  'cv.cosermoRole': 'Quality Department',
  'cv.cosermoMeta': 'Jul 2024 – Aug 2024 · Gijón, Asturias',
  'cv.cosermoDesc': 'Quality system assurance and inspection on the shop floor.',
  'cv.cosermoPoint1': 'Quality inspections and verification of regulatory compliance.',
  'cv.cosermoPoint2': 'Ongoing liaison between the quality office and the workshop team.',
  'cv.cosermoPoint3': 'Management of technical issues in the manufacturing process.',

  'cv.zerotekRole': 'Multidisciplinary Designer',
  'cv.zerotekMeta': 'Jun 2023 – Sep 2023 · Gijón, Asturias',
  'cv.zerotekDesc': 'Visual content creation, web development and brand communication.',
  'cv.zerotekPoint1': 'Design and development of websites on WordPress.',
  'cv.zerotekPoint2': 'Photography production, video editing and digital graphic material.',
  'cv.zerotekPoint3': 'Implementation of visual identity according to client needs.',

  'cv.educationTitle': 'Education',
  'cv.degree': "Bachelor's Degree in Industrial Design and<br>Product Development Engineering",
  'cv.university': 'University of Valladolid',
  'cv.tfgLink': 'Final Degree Project: «Beauty and speed: automotive design as aesthetic expression»',
  'cv.award1': 'Speciality Packaging Bronze Award, WorldStar Student (2025)',
  'cv.award2': 'Liderpack Award, Young Design (2024)',
  'cv.award3': 'Finalist, 15th Spanish National Packaging Awards (2024)',

  'cv.softwareTitle': 'Software',

  'cv.trainingTitle': 'Additional Training',
  'cv.training1': 'English B2',
  'cv.training2': 'Michelin Soft Skills Course (2026)',
  'cv.training3': 'Driving licence and own car',

  'cv.downloadEs': 'CV in Spanish',
  'cv.downloadEn': 'CV in English',

  /* --- Sobre mí -------------------------------------------------------- */
  'about.docTitle': 'About me — Nicolás Vázquez García',
  'about.docDesc': 'About Nicolás Vázquez García, industrial design and product development engineer.',
  'about.tag': 'About me',
  'about.heroWord1': 'Born',
  'about.heroWord2': 'to',
  'about.heroWord3': 'dare',

  'about.story1': 'Engineering, its technical precision and product design fit the way I am, the way I see the world, my passions and my lifestyle.',
  'about.story2': 'My fascination with technology and form goes back a long way; I could say it began by obsessively studying every car on the street, in adverts and anywhere else. And although the automotive world has always been a central pillar in my life, the transformation the sector is going through makes me reflect on how technology must evolve without losing the essence and the emotion of the product.',
  'about.story3': 'I have always been a curious person. The first option I considered was Architecture, when I was just seven, drawn by the ability to design spaces. But my real passion was always cars, and I believe that is where my sense of aesthetics began to take shape: in car magazines, in automotive design books and at the industry trade fairs I walked around as a teenager. From looking so closely I learnt to recognise when a form is balanced, and to ask myself why. That is why, after weighing up different engineering paths, I chose the <strong>Degree in Industrial Design and Product Development Engineering</strong>, driven by a constant attraction to where the aesthetic and the mechanical meet.',
  'about.story4': 'For me, design has never been a mere surface finish, but the technical answer to a real need: a process where form is the direct consequence of function, feasibility and performance.',
  'about.story5': 'Over time, I have come to understand that the analytical eye with which I looked at cars can be applied to any field. My training allows me to merge technical rigour with a sensitivity for detail, understanding the entire product life cycle: from the idea in a sketch to its final materialisation.',

  'about.passionsTag': 'Visual culture and passions',
  'about.passionsLead': 'Why I am like this, think like this and see things like this:',
  'about.passionsIntro': "Behind everyone's mind there is a constant search for inspiration in the things we genuinely love. These are my sources of inspiration:",
  'about.passion1Title': 'Motor culture',
  'about.passion1Text': 'Cars will always be one of my passions; I believe they are the object that has given human beings the most freedom. The passion and precision of the competitive spirit moves me, influences me and fascinates me.',
  'about.passion2Title': 'Watchmaking',
  'about.passion2Text': 'I am passionate about watchmaking: I find it fascinating to see just how far engineering and high precision can be condensed into objects of such a small size. I cannot live without a watch on my wrist.',
  'about.passion3Title': 'Sport',
  'about.passion3Text': 'It is where nature and wellbeing meet precision and engineering. I enjoy practising it, but what I love is analysing technical advances and seeing how cutting-edge technology and materials are applied.',
  'about.passion4Title': 'Economics and politics',
  'about.passion4Text': 'I consider it essential, for both my personal and professional growth, to keep up with what is happening in the world, digging into the whys in order to understand and evolve, with a critical mind and the ability to adapt to change, without losing our values.',
  'about.passion5Title': 'Nature',
  'about.passion5Text': 'It is where I disconnect, where I feel most human and have my best ideas — the place that makes me reflect, keep pushing to reach the top and surpass myself.',

  'about.galleryTag': 'Gallery',
  'about.galleryNote': "It's impossible not to love photography if you're passionate about design.",

  'about.ctaText': 'Want to see how<br>I apply this philosophy<br>to real projects?',
  'about.ctaProjects': 'Explore my projects',
  'about.ctaCv': 'View my CV',

  'about.altPassion1': 'Racing Porsche 911 on a circuit, surrounded by spectators',
  'about.altPassion2': 'Steel Rolex Submariner watch on a black background',
  'about.altPassion3': 'Carbon fibre road bike in a photo studio',
  'about.altPassion4': 'Stock market charts on several screens',
  'about.altPassion5': 'Snow-covered mountain range at sunset',
  'about.altShot1': 'Nicolás looking at a classic Alfa Romeo racing car in a workshop',
  'about.altShot2': 'Mountain summit rising above a sea of clouds, in black and white',
  'about.altShot3': 'Hiker walking across a meadow towards a rocky peak',
  'about.altShot4': 'Snow-covered mountain ridge in black and white',
  'about.altShot5': 'Wooden vault of a station lit up at night',
  'about.altShot6': 'Symmetrical low-angle view of a concrete structure',
  'about.altShot7': 'Group of cyclists in a road race',
  'about.altShot8': 'Portrait of Nicolás wearing a hood during a snowfall',
  'about.altShot9': 'Nicolás at the summit of a mountain',
  'about.altShot10': 'Aerial view of a reservoir set between mountains',
  'about.altShot11': '1980s McLaren-Honda Formula 1 car',
  'about.altShot12': 'Nicolás next to a green classic Mini',
  'about.altShot13': 'Cable car climbing between rocky mountain walls',
  'about.altShot14': 'Mountainside lit by the light of sunset',
  'about.altShot15': 'Classic off-roader on a mountain track',

  /* --- Contacto -------------------------------------------------------- */
  'contact.docTitle': 'Contact — Nicolás Vázquez García',
  'contact.docDesc': 'Get in touch with Nicolás Vázquez García, industrial design and product development engineer.',
  'contact.title': "Let's talk!",
  'contact.subtitle': 'Industrial Design and Product Development Engineer.<br>Eager to learn and take on new challenges.',
  'contact.mail': 'Email',
  'contact.tel': 'Phone',
  'contact.location': 'Based in Asturias, Spain · Available for full mobility',

  /* --- TFG (portada) --------------------------------------------------- */
  'tfg.docTitle': 'Final Degree Project — Nicolás Vázquez García',
  'tfg.docDesc': 'Final Degree Project by Nicolás Vázquez García: Beauty and speed, automotive design as aesthetic expression.',
  'tfg.eyebrow': 'Final Degree Project · Industrial Design and Product Development Engineering · University of Valladolid',
  'tfg.title': 'Beauty and speed<span>automotive design as aesthetic expression</span>',
  'tfg.thesis': 'Automotive beauty is not an ornament, but the direct result of solving physical and mechanical challenges: aesthetics is the consequence of brilliant engineering.',
  'tfg.note': 'Publication in progress — this is only a preview of the complete project.',
  'tfg.altCover': 'Cover of the book Beauty and speed, with a red Ferrari 250 GTO',
  'tfg.altDefence': 'Nicolás Vázquez García defending his Final Degree Project',
  'tfg.caption': 'Final Degree Project defence, 2026',

  'tfg.statementLead': 'From means of transport to cultural icon.',
  'tfg.statementBody': 'A journey through the people’s cars, the legends of the 1960s and the impact of automotive design on watchmaking, accessories and architecture.',
  'tfg.statementConclusion': 'Beauty is not an add-on: it is the consequence of brilliant engineering.',

  'tfg.blocksTitle': 'The three blocks',
  'tfg.block1Index': 'Block 01',
  'tfg.block1Title': "The people's cars",
  'tfg.block1Line': 'How the Beetle, 2CV, Fiat 500 and Mini proved that scarcity is compatible with excellence.',
  'tfg.block2Index': 'Block 02',
  'tfg.block2Title': 'Icons of speed. The 1960s',
  'tfg.block2Line': 'How the 1960s sculpted three icons of speed: Jaguar E-Type, Ferrari 250 GTO and Lamborghini Miura.',
  'tfg.block3Index': 'Block 03',
  'tfg.block3Title': 'Influence as an industrial object',
  'tfg.block3Line': "From Steve McQueen's watches to the BMW headquarters: when the aesthetics of the engine spread to everything else.",
  'tfg.blockCue': 'View block →',
  'tfg.altBlock1': 'Classic cars on the Champs-Élysées avenue in Paris, with the Arc de Triomphe in the background',
  'tfg.altBlock2': 'Lamborghini Miura with the bonnet flaps open',
  'tfg.altBlock3': 'Steve McQueen next to a Porsche 917 in Gulf colours',

  'tfg.galleryTitle': 'Complete gallery of the book',

  /* --- TFG · Bloque 01 ------------------------------------------------- */
  'cars.docTitle': "The people's cars — Final Degree Project — Nicolás Vázquez García",
  'cars.docDesc': 'Beetle, Citroën 2CV, Fiat 500 and Mini: how post-war scarcity produced four of the finest designs in automotive history.',
  'cars.eyebrow': 'Block 01 of 03',
  'cars.title': "The people's cars",
  'cars.lead': 'How the Beetle, 2CV, Fiat 500 and Mini proved that scarcity is compatible with excellence.',
  'cars.body1': 'Between the late 1930s and the mid-1950s, half of Europe emerged from a war or an economic crisis with the same question on the table: how to get the majority of the population moving with the fewest possible resources. Germany, France, Italy and Great Britain each answered in their own way, but with the same underlying constraint: cars that were cheap to build, cheap to maintain and simple to repair.',
  'cars.body2': 'Far from impoverishing the result, scarcity forced engineers to strip away everything superfluous and keep only the essential. That discipline — designing inwards rather than outwards — is what turned these four cars into icons: they were not conceived to impress, but to work, and precisely for that reason they ended up impressing.',
  'cars.closing': 'Next, the four cars: Beetle, 2CV, Fiat 500 and Mini.',
  'cars.blockTitle': 'The four cars',
  'cars.card1Text': 'Designed by Ferdinand Porsche in 1934, it was born as a tool of social engineering and ended up as the emblem of the German economic miracle. Its rounded form, lighter and stronger, broke with the carriage-like design typical of the era.',
  'cars.card2Text': "Born to motorise the French countryside: to carry two farmers, use only 3 litres per 100 km and pass the 'egg test' without breaking a single one. The king of anti-design, without luxuries but with an immortal silhouette.",
  'cars.card3Text': "Designed by Dante Giacosa in 1957 to motorise Italy's economic boom: just 2.96 metres long and under 500 kilos. Its smooth, grille-less front looked like a friendly face, earning it the Compasso d'Oro and a place in the MoMA.",
  'cars.card4Text': "Sir Alexander Issigonis's urgent response to fuel rationing after the 1956 Suez crisis. It revolutionised packaging: 80% of the car for passengers and luggage, only 20% for the mechanics.",
  'cars.altCard1': 'Volkswagen Beetle in profile',
  'cars.altCard2': 'Orange Citroën 2CV on a path beside the woods',
  'cars.altCard3': 'Fiat Nuova 500 in profile',
  'cars.altCard4': 'Classic Mini kicking up snow',

  /* --- TFG · Bloque 02 ------------------------------------------------- */
  'speed.docTitle': 'Icons of speed — Final Degree Project — Nicolás Vázquez García',
  'speed.docDesc': 'Jaguar E-Type, Ferrari 250 GTO and Lamborghini Miura: three radically different ways of sculpting speed in the 1960s.',
  'speed.eyebrow': 'Block 02 of 03',
  'speed.title': 'Icons of speed. The 1960s',
  'speed.lead': 'Jaguar E-Type, Ferrari 250 GTO and Lamborghini Miura: three radically different ways of sculpting speed.',
  'speed.body1': "The 1960s were a decade of technological optimism following post-war reconstruction. The economic miracle in Germany and Italy grew a new middle class with purchasing power, while the United States lived through a consumer boom and turned the car into a status symbol. The space race and the Apollo 11 moon landing drove a 'Space Age' aesthetic, and in parallel a pop and youth culture emerged — Swinging London, hot rods, muscle cars — that demanded cars with a personality of their own, not just reliability.",
  'speed.body2': "Automotive design in that era split into two complementary currents. On one side, scientific aerodynamics: the move from American ornamental fins to solutions such as the Kamm tail, where form was dictated by the wind rather than the eye. On the other, organicism or biomorphism, which brought forms from nature — animal bodies, human curves — to the bodywork to give the car a 'soul'. That tension between mathematics and sensuality is the bridge to this trilogy: the Jaguar E-Type as zoomorphic design, a crouching feline, and the Ferrari 250 GTO and Lamborghini Miura as anthropomorphic design, with forms that evoke the human body.",
  'speed.closing': 'Next, the speed trilogy: Jaguar E-Type, Ferrari 250 GTO and Lamborghini Miura.',
  'speed.blockTitle': 'The three icons',
  'speed.card1Text': 'Unveiled in Geneva in 1961. Its creator, Malcolm Sayer, was an aeronautical engineer who rejected the title of designer: he based every line on mathematical coordinates, seeking minimum air resistance.',
  'speed.card2Text': "The peak of front-engine design, before the era of the mid-engine. Coachbuilder Sergio Scaglietti sculpted its aluminium bodywork literally 'by eye', turning a racing car into a sculpture.",
  'speed.card3Text': 'A radical break in 1966: a transverse, mid-rear V12 engine, eliminating the long bonnet of the era. At just 105 centimetres tall, its opening doors mimic the horns of a fighting bull.',
  'speed.altShot1': 'Young people jumping for joy in a street during Swinging London in the 1960s',
  'speed.altShot2': "The three Bertone Alfa Romeo B.A.T. cars, extreme aerodynamic prototypes from the 1950s",
  'speed.altShot3': 'Lancia Stratos HF Zero, a 1970 Bertone concept car with a hinged windscreen as its door',
  'speed.altCard1': 'Dark green Jaguar E-Type in a garage',
  'speed.altCard2': 'Red Ferrari 250 GTO in profile with the number 7',
  'speed.altCard3': 'Yellow Lamborghini Miura with the bonnet flaps open',

  /* --- TFG · Bloque 03 ------------------------------------------------- */
  'object.docTitle': 'Influence as an industrial object — Final Degree Project — Nicolás Vázquez García',
  'object.docDesc': "From Steve McQueen's watches to the BMW headquarters in Munich: how the aesthetics of the 1960s sports car spread to watchmaking, accessories and architecture.",
  'object.eyebrow': 'Block 03 of 03',
  'object.title': 'Influence as an industrial object',
  'object.lead': "From Steve McQueen's watches to the BMW headquarters: when the aesthetics of the engine spread to everything else.",
  'object.body1': "The profound aesthetic transformation of the 1960s sports car did not stay on the tarmac: it soaked into everyday material culture. Nicknamed the 'King of Cool', Steve McQueen embodied 'functional cool', rejecting luxury and accepting objects for their performance and reliability.",
  'object.body2': 'The definitive dialogue between motorsport and architecture takes shape in the global BMW headquarters in Munich, designed by Karl Schwanzer: a tower of four large suspended cylinders that is a visual metaphor for a four-cylinder inline engine.',
  'object.closing': 'And many more objects and icons — watches, glasses, architecture — in the complete book.',
  'object.altShot1': 'Steve McQueen in the Gulf racing suit',
  'object.altShot2': 'Steve McQueen sitting next to a Porsche 917 in Gulf colours',
  'object.altShot3': 'Tower of the BMW headquarters in Munich',

  'object.watchesTitle': 'Watchmaking and accessories',
  'object.watch1Title': 'Rolex Daytona',
  'object.watch1Text': 'One of the most recognisable watches in history, elevated to myth thanks to Paul Newman, who wore it daily with an engraving from his wife on the case back. In 2017 it reached 17.7 million dollars at auction.',
  'object.watch2Title': 'Omega Speedmaster',
  'object.watch2Text': 'Born in 1957 with strictly automotive origins, its Hesalite crystal — which cracks but never shatters — made it fit for space and earned it NASA’s "Moonwatch" title.',
  'object.watch3Title': 'TAG Heuer Monaco',
  'object.watch3Text': 'In 1969 it broke the mould with its square case and the crown moved to 9 o’clock, a technical oddity needed to house the world’s first automatic chronograph. Steve McQueen immortalised it in the film "Le Mans".',
  'object.watch4Title': 'Porsche Design Chronograph',
  'object.watch4Text': "Created by Ferdinand Porsche, grandson of the Beetle's designer, it was the first all-black wristwatch mass-produced and, later, the first made entirely of titanium.",
  'object.watch5Title': 'Persol 714',
  'object.watch5Text': 'An evolution of the iconic 649 made for the trams of Turin, these folding glasses were conceived as protective equipment for drivers. Steve McQueen raised them to fashion icon status in "The Thomas Crown Affair".',
  'object.watch6Title': 'Schedoni luggage for Ferrari',
  'object.watch6Text': 'With the arrival of the mid-engine in Ferrari sports cars, traditional boots disappeared. Schedoni solved the challenge with bespoke leather cases, fitted like a Tetris into the irregular gaps of the chassis.',
  'object.altWatch1': 'Steel Rolex Daytona on a green background',
  'object.altWatch2': 'Omega Speedmaster Professional on a red background',
  'object.altWatch3': 'TAG Heuer Monaco with a blue dial on a red background',
  'object.altWatch4': 'All-black Porsche Design Chronograph',
  'object.altWatch5': 'Persol 714 folding glasses on a blue background',
  'object.altWatch6': 'Schedoni leather case for Ferrari on a yellow background',

  'object.archTitle': 'Architecture',
  'object.arch1Title': 'Googie style',
  'object.arch1Text': "The optimism of the Space Age slipped into American architecture with sloping roofs, large windows and neon signs designed to catch the eye from behind the wheel. John Lautner's Elrod House and the first McDonald's are its purest expression.",
  'object.arch2Title': 'TWA Terminal (Eero Saarinen)',
  'object.arch2Text': 'Opened in 1962 at JFK airport, its vaulted concrete structures mimic the flight of a bird. Its flowing interiors, free of right angles, speak the same language of continuous flow as the bodywork of the era.',
  'object.arch3Title': 'Autogrill Pavesi (Angelo Bianchetti)',
  'object.arch3Text': 'More than a roadside stop, this 1958 building was a symbol of the Italian economic boom and the passion for speed. In 2020 it was renovated with green technologies, proving that good design never goes out of fashion.',
  'object.arch4Title': 'BMW Building',
  'object.arch4Text': 'Karl Schwanzer rejected rectangular forms to raise a 100-metre tower: four suspended cylinders that are a visual metaphor for a four-cylinder inline engine, the mechanical heart of the brand.',
  'object.altArch1': "1950s McDonald's drive-in with golden neon arches, an example of Googie style",
  'object.altArch2': 'Eero Saarinen’s TWA Flight Center at JFK airport',
  'object.altArch3': 'Autogrill Pavesi bridge over the Italian motorway',
  'object.altArch4': 'Four-cylinder tower of the BMW headquarters in Munich above the city skyline',
  'object.ctaBack': 'Back to block 01 →',

  /* --- Rail Folding Package -------------------------------------------- */
  'rail.docTitle': 'Rail Folding Package — Nicolás Vázquez García',
  'rail.docDesc': 'Rail Folding Package: reusable industrial packaging that folds flat via a system of machined rails. Award-winning project by Nicolás Vázquez García.',
  'rail.altPoster': 'Poster from the Rail Folding Package dossier: exploded view, folded assembly, certificates and the Encaja logo',
  'rail.eyebrow': 'Packaging · 3rd year of Industrial Design and Product Development Engineering · University of Valladolid',
  'rail.lead': 'Reusable, foldable and customisable industrial packaging, developed from a real brief by <strong>Encaja</strong>, together with my teammates Mónica Lara Moreno, Marcos Muñoz and David Silva.',
  'rail.tag1': 'Demountable',
  'rail.tag2': 'Foldable',
  'rail.tag3': 'Recyclable',
  'rail.tag4': 'Reusable',
  'rail.altAssembled': 'Rail Folding Package assembled on its pallet',
  'rail.ariaAssembled': 'Enlarge the render of the assembled packaging',
  'rail.chip': 'Euro pallet 1200 × 800 mm',

  'rail.challengeLabel': 'The challenge',
  'rail.challengeText': 'Develop reusable, foldable, ergonomic and customisable packaging for industrial use.',
  'rail.objectivesTitle': 'Objectives',
  'rail.objective1': 'Optimise loading and unloading, and reduce the weight of the assembly.',
  'rail.objective2': 'Use sustainable materials.',
  'rail.objective3': 'Guarantee the protection of the goods being transported.',
  'rail.objective4': 'Arrive at an innovative solution that did not already exist on the market.',
  'rail.requirementsTitle': 'Requirements',
  'rail.requirement1': 'Sturdy and suitable for international shipping.',
  'rail.requirement2': 'High reusability and customisation capability.',
  'rail.requirement3': 'Versatile dimensions, optimised for a standard 1200 × 800 mm pallet.',
  'rail.requirement4': 'Ergonomic, with a fold-down side that makes loading easier.',
  'rail.requirement5': 'Wood, processed board and mechanical profiles.',
  'rail.requirement6': "Foldable using the packaging's own profiles.",

  'rail.solutionTitle': 'The solution',
  'rail.solutionText1': 'The base is not a pallet plus a box: it is <strong>a single piece</strong>. On top of the pallet sits a surface with <strong>machined rails</strong> along which the metal profiles of the walls run.',
  'rail.solutionText2': 'That same rail which keeps the packaging rigid when assembled is the one that guides the folding. No tools or loose parts are needed to dismantle it, and there is nothing that can get lost along the way.',
  'rail.altRailDetail': 'Detail of the aluminium profile and the corner of the packaging',
  'rail.ariaRailDetail': 'Enlarge the detail of the aluminium profile',
  'rail.tagRailDetail': 'Rail detail',
  'rail.altExploded': 'Exploded view of the packaging with all its parts separated',
  'rail.ariaExploded': 'Enlarge the exploded view of the packaging',
  'rail.tagExploded': 'Exploded view',

  'rail.partsTitle': 'The four parts',
  'rail.part1Title': 'Base',
  'rail.part1Text': 'Pallet and machined surface merged into a single piece. The rails let the metal profiles of the walls pass through.',
  'rail.part1Alt': 'Base of the packaging: pallet with a railed surface',
  'rail.part1Aria': 'Enlarge the base part',
  'rail.part2Title': 'Side face',
  'rail.part2Text': 'Wooden board with metal profiles screwed onto all four sides.',
  'rail.part2Alt': 'Side face with metal profiles on all four sides',
  'rail.part2Aria': 'Enlarge the side face',
  'rail.part3Title': 'Front / rear face',
  'rail.part3Text': 'Divided into two equal halves joined by hinges so that it folds. Its rails guarantee the closure.',
  'rail.part3Alt': 'Front face divided into two halves joined by hinges',
  'rail.part3Aria': 'Enlarge the front and rear face',
  'rail.part4Title': 'Lid',
  'rail.part4Text': 'Divided into three equal parts joined by hinges, it folds over itself as it collapses.',
  'rail.part4Alt': 'Lid divided into three parts joined by hinges',
  'rail.part4Aria': 'Enlarge the lid',

  'rail.foldingTitle': 'Folding system',
  'rail.foldingIntro': 'From assembled to flat without a single tool. Step through it:',
  'rail.step1Title': 'Assembled',
  'rail.step1Text': 'The closed packaging on its pallet, ready to transport.',
  'rail.step1Alt': 'Assembled and closed packaging',
  'rail.step2Title': 'The lid opens',
  'rail.step2Text': 'The lid is released from the perimeter rail that kept it closed.',
  'rail.step2Alt': 'The lid of the packaging starting to open',
  'rail.step3Title': 'Lid folded',
  'rail.step3Text': 'It folds into three along its hinges and rests in place.',
  'rail.step3Alt': 'The lid folded into three parts',
  'rail.step4Title': 'Faces folded down',
  'rail.step4Text': 'The front and rear faces fold inwards down the middle.',
  'rail.step4Alt': 'The front and rear faces folded inwards',
  'rail.step5Title': 'Sides out',
  'rail.step5Text': 'The sides come out of the rail and rest on the base.',
  'rail.step5Alt': 'The sides resting on the base',
  'rail.step6Title': 'Folded flat',
  'rail.step6Text': 'The whole assembly ends up stacked on the pallet itself.',
  'rail.step6Alt': 'The packaging completely folded on the pallet',
  'rail.stepsAria': 'Folding steps',
  'rail.stepAria1': 'Step 1',
  'rail.stepAria2': 'Step 2',
  'rail.stepAria3': 'Step 3',
  'rail.stepAria4': 'Step 4',
  'rail.stepAria5': 'Step 5',
  'rail.stepAria6': 'Step 6',
  'rail.stackedAlt': 'Two folded packages stacked one on top of the other',
  'rail.stackedText': 'Folded, it takes up a fraction of its volume, so the empty return trip stops being a matter of transporting air.',

  'rail.materialsTitle': 'Materials and manufacturing',
  'rail.material1Title': 'Pine wood',
  'rail.material1Text': 'Historically the material of pallets and packaging for its abundance and its properties. Pine is used rather than poplar because packaging bears greater loads than the inner container.',
  'rail.material2Title': 'Aluminium',
  'rail.material2Text': 'For rails and hinges: it does not rust or corrode, and it withstands the weather, temperature changes and knocks. Hollow profiles, for cost and so that the rail slides better.',
  'rail.material3Title': 'Process',
  'rail.material3Text': 'Cutting the boards, thermal and chemical treatments (wood stains, varnishes, oils), machining the rails with a milling cutter, folding cuts and screwing on hinges and profiles.',
  'rail.certsAlt': 'IPPC / ISPM 15 heat treatment marking',
  'rail.certsText': 'The packaging builds on the certifications Encaja already works with: <strong>FSC®</strong>, <strong>PEFC</strong> and the <strong>ISPM 15</strong> marking that requires heat treatment of wood for international shipping.',

  'rail.awardsTitle': 'Awards',
  'rail.award1': 'Speciality Packaging Bronze Award WorldStar Student (2025)',
  'rail.award2': 'Liderpack Award Young Design (2024)',
  'rail.award3': 'Finalist 15th Spanish National Packaging Awards (2024)',

  'rail.highlightsTitle': 'Key points',
  'rail.highlight1': '<strong>Replaceable parts.</strong> If one breaks, there is no need to replace the whole package.',
  'rail.highlight2': '<strong>Fast assembly and disassembly.</strong> No tools and no loose parts.',
  'rail.highlight3': '<strong>The pallet is built in.</strong> It works with this design alone, with no added elements.',
  'rail.highlight4': '<strong>In-house materials.</strong> Wood and metal joints, the ones Encaja already uses.',
  'rail.highlight5': '<strong>Customisable.</strong> The solid boards take corporate logos and labelling.',

  /* --- 3DS Max Rendering ----------------------------------------------- */
  'render.docTitle': '3DS Max Rendering — Nicolás Vázquez García',
  'render.docDesc': '3DS Max Rendering project by Nicolás Vázquez García, industrial design and product development engineer.',
  'render.badge': '3D Render without AI',
  'render.copy': 'Rendering and interior design projects developed for the Computer Graphics course using <strong>Autodesk 3ds Max</strong>. A 100% traditional piece of work predating the arrival of generative AI tools, focused on mastering lighting, material detailing and 3D spatial composition.',
  'render.meta1': 'Autodesk 3ds Max',
  'render.meta2': 'Computer Graphics',
  'render.meta3': 'Modelling · Lighting · Materials',
  'render.sceneEyebrow': 'Lighting study',
  'render.sceneAria': 'Time of day',
  'render.sceneStageAria': 'Enlarge the scene at the selected time of day',
  'render.scaleNatural': 'Natural light',
  'render.scaleLamp': 'Lamp on',
  'render.zoom': 'Enlarge',
  'render.light1': 'Day',
  'render.light2': 'Mid-afternoon',
  'render.light3': 'Afternoon',
  'render.light4': 'Dusk',
  'render.light5': 'Warm light',
  'render.light6': 'Night',
  'render.light7': 'Half-light',
  'render.altLight1': 'Living room rendered in daylight',
  'render.altLight2': 'Living room rendered in the mid-afternoon',
  'render.altLight3': 'Living room rendered in the afternoon',
  'render.altLight4': 'Living room rendered at dusk',
  'render.altLight5': 'Living room rendered with the lamp on',
  'render.altLight6': 'Living room rendered at night with the lamp on',
  'render.altLight7': 'Living room rendered in half-light with the lamp on',
  'render.shot1Tag': 'Product · light background',
  'render.shot1Alt': 'Floor lamp rendered on a light background',
  'render.shot1Aria': 'Enlarge: the lamp on a light background',
  'render.shot2Tag': 'Product · dark background',
  'render.shot2Alt': 'Floor lamp switched on, rendered on a dark background',
  'render.shot2Aria': 'Enlarge: the lamp on a dark background',
  'render.shot3Tag': 'Materials · marble and paper',
  'render.shot3Alt': 'Detail of the marble table with magazines',
  'render.shot3Aria': 'Enlarge: detail of the table with magazines',
  'render.shot4Tag': 'Detail · structure',
  'render.shot4Alt': 'Detail of the joint in the wooden structure',
  'render.shot4Aria': 'Enlarge: detail of the wooden structure'
};

(function () {
  const STORAGE_KEY = 'nvg-lang';

  /* Copia del español tal y como venía en el HTML, para poder volver a él
     sin tener que repetirlo aquí. Se llena una sola vez, al cargar. */
  const original = new Map();
  let snapshotTaken = false;

  /* Cada canal dice de qué atributo (o del contenido) se encarga. */
  const CHANNELS = [
    { attr: 'data-i18n', apply: (el, v) => { el.innerHTML = v; }, read: (el) => el.innerHTML },
    { attr: 'data-i18n-alt', apply: (el, v) => el.setAttribute('alt', v), read: (el) => el.getAttribute('alt') },
    { attr: 'data-i18n-aria', apply: (el, v) => el.setAttribute('aria-label', v), read: (el) => el.getAttribute('aria-label') },
    { attr: 'data-i18n-content', apply: (el, v) => el.setAttribute('content', v), read: (el) => el.getAttribute('content') },
    { attr: 'data-i18n-step-title', apply: (el, v) => el.setAttribute('data-step-title', v), read: (el) => el.getAttribute('data-step-title') },
    { attr: 'data-i18n-step-text', apply: (el, v) => el.setAttribute('data-step-text', v), read: (el) => el.getAttribute('data-step-text') },
    { attr: 'data-i18n-light-name', apply: (el, v) => el.setAttribute('data-light-name', v), read: (el) => el.getAttribute('data-light-name') }
  ];

  function snapshot() {
    if (snapshotTaken) return;
    CHANNELS.forEach((channel) => {
      document.querySelectorAll('[' + channel.attr + ']').forEach((el) => {
        if (!original.has(el)) original.set(el, {});
        original.get(el)[channel.attr] = channel.read(el);
      });
    });
    snapshotTaken = true;
  }

  function apply(lang) {
    snapshot();

    CHANNELS.forEach((channel) => {
      document.querySelectorAll('[' + channel.attr + ']').forEach((el) => {
        const key = el.getAttribute(channel.attr);
        // Si falta la traducción se deja el español: mejor eso que un hueco.
        const value = lang === 'en' ? I18N_EN[key] : (original.get(el) || {})[channel.attr];
        if (typeof value === 'string') channel.apply(el, value);
      });
    });

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-lang]').forEach((btn) => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // Los widgets que copian estos data-* a pantalla (pasos del plegado,
    // selector de luz) necesitan repintarse tras el cambio.
    document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang: lang } }));
  }

  let stored = null;
  try {
    stored = localStorage.getItem(STORAGE_KEY);
  } catch (err) {
    /* Modo privado o cookies bloqueadas: se sigue sin recordar el idioma. */
  }

  const initial = stored === 'en' ? 'en' : 'es';
  if (initial !== 'es') apply(initial);
  else snapshot();

  document.addEventListener('click', (event) => {
    const btn = event.target.closest('[data-lang]');
    if (!btn) return;
    const lang = btn.getAttribute('data-lang');
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (err) {
      /* Sin persistencia, pero el cambio en pantalla sí funciona. */
    }
    apply(lang);
  });

  // Estado inicial de los botones ES/EN aunque no se haya traducido nada.
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    const isActive = btn.getAttribute('data-lang') === initial;
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
})();
