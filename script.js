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
        workrole: "Software Developer",
        about: "About me",
        about1: "I approach every challenge with determination and perseverance, always striving",
        about2: "for excellence in my work. Helping others is something I deeply value, guided by a",
        about3: "strong sense of empathy and collaboration. My passion for programming has been",
        about4: "a driving force in my career, and recently, I have developed a keen interest in",
        about5: "OutSystems. This continuous learning mindset reflects commitment to growth and",
        about6: "innovation in the technology field"
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
        workrole: "Desenvolvedor de Software",
        about: "Sobre mim",
        about1: "Encaro cada desafio com determinação e perseverança, sempre em busca da excelência",
        about2: "no meu trabalho. Valorizar e apoiar os outros é algo que considero essencial, guiado",
        about3: "por um forte sentido de empatia e colaboração. A programação tem sido uma paixão",
        about4: "ao longo da minha carreira e, recentemente, desenvolvi um grande interesse pelo OutSystems.",
        about5: "Este compromisso com a aprendizagem contínua reflete a minha dedicação ao crescimento",
        about6: "e à inovação na área da tecnologia."
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
    document.getElementById("cv-button").href = langData.cvLink;

    /** About me section **/
    document.getElementById("about").innerHTML = langData.about;
    document.getElementById("about-p1").innerHTML = langData.about1;
    document.getElementById("about-p2").innerHTML = langData.about2;
    document.getElementById("about-p3").innerHTML = langData.about3;
    document.getElementById("about-p4").innerHTML = langData.about4;
    document.getElementById("about-p5").innerHTML = langData.about5;
    document.getElementById("about-p6").innerHTML = langData.about6;
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
