console.log('WELCOME TO TEXT TO SPEECH CONVERTER')

let textarea = document.querySelector('textarea')
let speechBtn = document.querySelector('button')
let voiceList = document.querySelector('select')

function voices(){
    for(let voice of speechSynthesis.getVoices() ){
        // creating an option tag with passing voice name and voice language

        let option = `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
        voiceList.insertAdjacentHTML('beforeend',option) // inserting option tag beforeend of select tag
    }
}

speechSynthesis.addEventListener('voiceschanged',voices)

function textToSpeech(text){
    let utterance = new SpeechSynthesisUtterance(text)
    for(let voice of speechSynthesis.getVoices() ){
        if(voice.name === voiceList.value){
            utterance.voice = voice
        }
    }
    speechSynthesis.speak(utterance)
}

speechBtn.addEventListener('click',function(e){
    e.preventDefault()
    if(textarea.value !== ''){
        if(!speechSynthesis.speaking){
            textToSpeech(textarea.value) // if an utterance/speech is not currently in process of speaking
        }
    }
})