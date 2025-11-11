// your JS code here

// Sound names as shown in your screenshot
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// Create container for buttons
const container = document.createElement("div");
container.id = "buttons";
document.body.appendChild(container);

let currentAudio = null;

// Function to stop sound
function stopAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
}

// Create a button for each sound
sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopAudio();
        const audio = new Audio(`./sounds/${sound}.mp3`);
        currentAudio = audio;
        audio.play();
    });

    container.appendChild(btn);
});

// Create STOP button
const stopBtn = document.createElement("button");
stopBtn.className = "stop";
stopBtn.innerText = "stop";

stopBtn.addEventListener("click", stopAudio);

container.appendChild(stopBtn);
