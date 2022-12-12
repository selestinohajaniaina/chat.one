var lire =(sentence)=>{
    const u = new SpeechSynthesisUtterance();
        allVoices = speechSynthesis.getVoices();
        u.voice = allVoices.filter(voice => voice.name === "Microsoft Paul")[0];
        u.text = sentence;
        u.lang = "en-US";
        u.volume = 1; //0-1 interval
        u.rate = 1;
        u.pitch = 1; //0-2 interval
        speechSynthesis.speak(u);
    }