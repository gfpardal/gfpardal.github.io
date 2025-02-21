document.getElementById("year").innerHTML = new Date().getFullYear();

var language = 'en';

const translations = {
    en: {
        greeting: "HELLO, I'M",
        description: "A Passionate ",
        home: "Home",
        about: "About",
        projects: "Projects",
        experience: "Experience",
        contact: "Contact",
        cvLink: "CurriculumGP_EN.pdf"
    },
    pt: {
        greeting: "OLÁ, EU SOU O",
        description: "Um aficionado",
        home: "Início",
        about: "Sobre",
        projects: "Projetos",
        experience: "Experiência",
        contact: "Contactos",
        cvLink: "CurriculoGP_PT.pdf"
    }
};

function loadLanguage(language) {
    const langData = translations[language];

    document.getElementById("greeting").innerHTML = langData.greeting;
    document.getElementById("description").innerHTML = langData.description;

    /** Sidebar Languages **/
    document.getElementById("home").innerHTML = langData.home;
    document.getElementById("about").innerHTML = langData.about;
    document.getElementById("projects").innerHTML = langData.projects;
    document.getElementById("experience").innerHTML = langData.experience;
    document.getElementById("contact").innerHTML = langData.contact;
    document.getElementById("cv-button").href = langData.cvLink;
}


function changeLanguage() {
    language = language === 'en' ? 'pt' : 'en';
    loadLanguage()
}

