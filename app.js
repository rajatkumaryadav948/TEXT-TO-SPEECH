function speak() {
    const msg = document.getElementById("text").value;
    const speech = new SpeechSynthesisUtterance();
    speech.text = msg;
    speech.lang = 'en-us'; // In-hi
    window.speechSynthesis.speak(speech);
}
