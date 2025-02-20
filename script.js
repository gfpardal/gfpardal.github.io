document.getElementById("year").innerHTML = new Date().getFullYear();

var language = 'en';

function loadLanguages() {
    document.getElementById("cv-button").href = 
        language === 'en' ? "CurriculumGP_EN.pdf" : "CurriculoGP_PT.pdf";
}

function changeLanguage() {
    language = language === 'en' ? 'pt' : 'en';
    loadLanguages();
}
