// BRIGHT Lab
// Team members

const teamMembers = [
    {
        name: "Clara MOREAU",
        title: "M.Sc., Ph.D",
        linkedin: "https://www.linkedin.com/in/clara-a-moreau-b44b6858/",
        scholar: "https://scholar.google.com/citations?user=tkN9j_cAAAAJ&hl=fr&oi=ao",
        image: "assets/images/cmoreau.jpeg",
        bio: {
            fr: `Clara Moreau a une formation transdisciplinaire combinant neurosciences, génétique, 
            psychologie et bioinformatique. Combiner l’apport de ces différentes disciplines lui a permis d’aborder sous un angle nouveau des problèmes 
            fondamentaux en psychiatrie. Sa force majeure reste cependant la neuroimagerie. Clara Moreau possède une expérience de plus de 10 ans dans 
            l’utilisation de l’IRM structurelle, fonctionnelle et de diffusion, acquise au sein de laboratoires d’imagerie réputés tels que le MNI 
            (McGill, Montréal), l’Imaging Genetics Center (USC, Los Angeles), et Neurospin (Saclay).`,
            en: `Clara Moreau has a transdisciplinary background that integrates neuroscience, genetics, psychology, and bioinformatics. 
            This unique combination of disciplines has enabled her to tackle fundamental psychiatric problems from innovative perspectives. 
            Nonetheless, her primary expertise lies in neuroimaging. Clara Moreau has more than 10 years of experience in the use of structural, 
            functional, and diffusion MRI, acquired in renowned imaging laboratories such as MNI (McGill, Montreal), the Imaging Genetics Center 
            (USC, Los Angeles), and Neurospin (Saclay).`
        }
    },
    {
        name: "Pierre BERGERET",
        title: "Ph.D. Student",
        linkedin: "https://www.linkedin.com/in/pierrebergeret",
        github: "https://github.com/pbergeret12",
        image: "assets/images/pbergeret.jpeg",
        bio: {
            fr: `Pierre Bergeret est titulaire d’un baccalauréat en biologie et de deux masters, l’un en neurosciences comportementales, l’autre en bioinformatique, 
            obtenus à l’issue de ses études en France.
            À la suite de son stage de fin d’études, il s’est spécialisé dans l’analyse des données de neuroimagerie.
            Fort de ce parcours interdisciplinaire, il réalise actuellement un doctorat en sciences psychiatriques et addictologie au sein du laboratoire BRIGHT, 
            avec pour objectif de mieux comprendre les endophénotypes et les bases génétiques partagés entre différentes conditions psychiatriques.`,
            en: `Pierre Bergeret holds a Bachelor’s degree in Biology and two Master’s degrees, one in Behavioral Neuroscience and the other in Bioinformatics, 
            completed during his studies in France.
            Following his final-year internship, he specialized in the analysis of neuroimaging data.
            With this interdisciplinary background, he is currently pursuing a PhD in Psychiatric Sciences and Addictology at the BRIGHT laboratory, 
            focusing on understanding the shared endophenotypes and genetic foundations of various psychiatric conditions.`
        }
    },
    {
        name: "Clara EL KHANTOUR",
        title: "Ph.D. Student",
        linkedin: "https://www.linkedin.com/in/clara-el-khantour-32706321a/",
        image: "assets/images/celkhantour.jpeg",
        bio: {
            fr: `Clara El Khantour est titulaire d'un baccalauréat en neurosciences cognitives, 
            suivie d'une maîtrise en neurosciences, au cours de laquelle elle a développé un intérêt pour les neurosciences computationnelles 
            et les analyses en neuroimagerie. Elle poursuit actuellement un doctorat en sciences psychiatriques et d’addictologie à l'Université 
            de Montréal, en se concentrant sur l'utilisation de la neuroimagerie pour prédire le pronostic des troubles de l'alimentation.`,
            en: `Clara El Khantour holds a bachelor's degree in cognitive neuroscience, followed by a master's in neuroscience, during which she 
            developed an interest in computational neuroscience and neuroimaging analyses. She is currently pursuing a PhD in psychiatry at the 
            Université de Montréal, focusing on the use of neuroimaging to predict the prognosis in eating disorders.`
        }
    },
    {
        name: "Seann WANG",
        title: "Intern",
        linkedin: "https://www.linkedin.com/in/seann-wang-a72305179/",
        github: "https://github.com/wangseann",
        image: "assets/images/seann_wang.jpeg",
        bio: {
            fr: `Seann Wang est stagiaire de recherche au BRIGHT Lab du CHU Sainte-Justine. Il collabore avec les autres membres du laboratoire ainsi 
            qu’avec le groupe Enigma Resting-State. Il est titulaire d’un baccalauréat en neurosciences comportementales de l’Université de la 
            Colombie-Britannique et a mené des recherches dans plusieurs institutions, notamment à l’OIST (Okinawa, Japon) et à l’ICORD (UBC, Vancouver, 
            Colombie-Britannique). Récemment, il a travaillé avec des membres du consortium Enigma pour tester et évaluer la qualité de l’utilisation de 
            HALFpipe, et pour développer une base de code facile à utiliser permettant d’évaluer les stratégies de débruitage appliquées par HALFpipe.
            Il s’intéresse particulièrement aux approches en big data appliquées aux neurosciences, intégrant des méthodes issues de la théorie de 
            l'information et des données multimodales afin d’améliorer le décodage des états mentaux, ainsi qu’aux applications de l’apprentissage 
            automatique pour la découverte de biomarqueurs en psychiatrie.
            En dehors du laboratoire, Seann adore jouer de la musique, voyager, et profiter des belles journées ensoleillées de Montréal.`,

            en: `Seann Wang is a research intern at the BRIGHT Lab at CHU Sainte Justine. He works with other members of the lab and the Enigma Resting-State 
            group. He holds a B.Sc. in Behavioural Neuroscience from the University of British Columbia and has conducted research across multiple 
            institutions, including OIST(Okinawa, Japan) and ICORD(UBC, Vancouver, British Columbia). Recently, he has been working with members of 
            Enigma to test and quality assess the use of HALFpipe, and develop an easy-to-use codebase to evaluate denoising strategies applied by HALFpipe. 
            He is particularly interested in big data approaches to neuroscience, integrating information-theoretic approaches and multimodal data to improve 
            decoding of mental states, as well as machine learning applications for biomarker discovery in psychiatric disease. Outside of the lab, Seann 
            loves to play music, traveling, and enjoying Montreal's beautiful sunny days.`
        }
    },
    {
        name: "Clara Maria BRIDI",
        title: "Intern",
        linkedin: "https://www.linkedin.com/in/clara-maria-bridi-ab7674271/",
        image: "assets/images/clara_maria.jpeg",
        bio: {
            fr: `Clara Maria Bridi est étudiante en médecine à l’Université de Montréal. Elle réalise actuellement un stage de recherche au sein du 
            laboratoire BRIGHT dû à son intérêt en médecine de l’adolescence et en troubles des conduites alimentaires.`,
            en: `Clara Maria Bridi is a medical student at the Université de Montréal. She is currently doing a research internship at the BRIGHT 
            lab due to her interest in adolescent medicine and eating disorders.`
        }
    },
]
