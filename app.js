const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const grettings = ['Hallo Bos, Saya Harap Hari Mu Menyenangkan' , 'Hai Kak' , 'Oh Hai Kak']

recognition.onstart = function() {
    console.log("voice is actived , you can to microphone");
}

recognition.onresult = function (event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
    console.log(event);
}

btn.addEventListener("click" , () => {
    recognition.start();
});

function readOutLoud(m){
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'Maaf aku ga ngerti kalimat ini soal nya belum diajarin :(';
    
    if(m.includes('halo') || m.includes('hai')){
        const finalText = grettings[Math.floor(Math.random() * grettings.length )];
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}