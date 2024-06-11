//
function toggleMenu(){
    const menu =  document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}


//
var texts = [
    "Hi, I'm a student attending for my bachalors in information management and systems. I'm an avid learner of code and have a strong personal interest in learning lanuages and culture. I've done 5 years of spanish, 2 or german and am currently learning arabic, gujarati, and urdu. I enjoy being outdoors rather it's hiking, rock-climbing, or go-carting.",
    "Hola, soy un estudiante que cursa mi licenciatura en sistemas y gestión de la información. Soy un ávido estudiante de código y tengo un gran interés personal en aprender idiomas y culturas. He estudiado 5 años de español, 2 de alemán y actualmente estoy aprendiendo gujarati, árabe y urdu. Prefiero estar al aire libre en lugar de hacer caminatas, escalar rocas o andar en karts.", 
    "Hallo, ich bin ein Student und mache meinen Bachelor in Informationsmanagement und Systemen. Ich lerne leidenschaftlich gerne Programmieren und habe ein starkes persönliches Interesse daran, Sprachen und Kulturen zu lernen. Ich habe 5 Jahre Spanisch und 2 Jahre Deutsch gelernt und lerne derzeit Gujarati, Arabisch und Urdu. Ich genieße es, draußen zu sein, wie Wandern, Klettern oder Kartfahren.", 
   "مرحبًا، أنا طالب في مرحلة البكالوريوس في إدارة ونظم المعلومات. أنا متعلم متعطش للبرمجة ولدي اهتمام شخصي قوي بتعلم اللغات والثقافات. لقد أمضيت خمس سنين في اللغة الإسبانية وسنتين في اللغة الألمانية وأتعلم حاليًا الغوجاراتية والعربية والأردية. أنا أستمتع بالتواجد في الهواء الطلق إن كان عن طريق المشي لمسافات طويلة أو تسلق الصخور أو ركوب العربا",
    "નમસ્તે, હું માહિતી વ્યવસ્થાપન અને સિસ્ટમમાં મારા સ્નાતકો માટે હાજરી આપતો વિદ્યાર્થી છું. હું કોડનો ઉત્સુક શીખનાર છું અને ભાષા અને સંસ્કૃતિ શીખવામાં મારી અંગત રુચિ છે. મેં 5 વર્ષ સ્પેનિશ, 2 જર્મન કર્યું છે અને હાલમાં હું ગુજરાતી, અરબી અને ઉર્દુ શીખું છું. હાઇકિંગ, રોક-ક્લાઇમ્બિંગ અથવા ગો-કાર્ટિંગ કરતાં મને બહાર રહેવાની મજા આવે છે.", 
    "سلام، میں ایک انفارمیشن سسٹمز اور مینجمنٹ کا طالب علم ہوں، اور اسی میں اپنا بیچلرز حاصل کر رہا ہوں۔ میں کوڈنگ سیکھنے کا شوقین ہوں اور دوسری زبانوں اور تہذیب کے بارے میں سیکھنے میں  مری ضاتی دلچسپی ہے۔ میں نے ۵ سال اسپینیش سیکھی ہے، ۲ سال جرمن سیکھی ہے، اور ابھی میں گجراتی، عربی، اور اردو سیکھ رہا ہوں۔ مجھے پیدل سفر ، پتھر اور چٹان چڑھنے اور گو کارٹ چلانے میں مزہ آتا ہے۔"
]
var index = 0;
var changingText = document.getElementById("changingText");
var intervalId; //variable to hold the interval ID

function changeText() {
    changingText.textContent = texts[index];
    index = (index + 1) % texts.length; // Cycle through the texts
}

function startInterval() {
    intervalId = setInterval(changeText, 10000); // 10000 milliseconds = 10 seconds
}

function stopInterval() {
    clearInterval(intervalId);
}

startInterval();

changingText.addEventListener("mouseenter", stopInterval);

changingText.addEventListener("mouseleave", startInterval);
