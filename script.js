document.getElementById("year").innerHTML = new Date().getFullYear();

var language = 'en';

function loadLanguage() {
    document.getElementById("cv-button").href = 
        language === 'en' ? "CurriculumGP_EN.pdf" : "CurriculoGP_PT.pdf";
    document.getElementById("greeting").innerHTML = 
        language === 'en' ? "HELLO, I'M" : "OLA, EU SOU O";
}

function changeLanguage() {
    language = language === 'en' ? 'pt' : 'en';
    loadLanguage()
}

