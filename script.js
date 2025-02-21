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
        cvLink: "CurriculumGP_EN.pdf",
        workrole: "Software Developer"
    },
    pt: {
        greeting: "OLÁ, EU SOU O",
        description: "Um aficionado",
        home: "Início",
        about: "Sobre",
        projects: "Projetos",
        experience: "Experiência",
        contact: "Contactos",
        cvLink: "CurriculoGP_PT.pdf",
        workrole: "Desenvolvedor de Software"
    }
};

function loadLanguage(language) {
    const langData = translations[language];

    document.getElementById("greeting").innerHTML = langData.greeting;
    document.getElementById("description").innerHTML = langData.description;
    document.getElementById("work-role").innerHTML = langData.workrole;

    /** Sidebar Languages **/
    document.getElementById("link-home").innerHTML = langData.home;
    document.getElementById("link-about").innerHTML = langData.about;
    document.getElementById("link-projects").innerHTML = langData.projects;
    document.getElementById("link-experience").innerHTML = langData.experience;
    document.getElementById("link-contact").innerHTML = langData.contact;
    document.getElementById("cv-button").href = langData.cvLink;
}

function changeLanguage() {
    language = language === 'en' ? 'pt' : 'en';
    loadLanguage(language);
}

document.addEventListener("DOMContentLoaded", function() {
    // Function to handle section visibility
    function showSection(sectionId) {
        // Hide all sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show the selected section
        const activeSection = document.querySelector(sectionId);
        if (activeSection) {
            activeSection.classList.add('active');
        }
    }

    // Add event listeners to sidebar links
    const links = document.querySelectorAll('.sidebar nav a:not(.link-language)');;
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = link.getAttribute('href');
            showSection(targetSection);
        });
    });

    // Show the home section by default
    showSection("#home");
});
