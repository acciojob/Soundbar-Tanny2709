// your JS code here

// List of sound files (without extension)
const sounds = ["sound1", "sound2", "sound3", "sound4"];  
// Add your actual sound file names (e.g., dog, piano, drum)


// Create container div with id="buttons"
const container = document.createElement("div");
container.id = "buttons";
document.body.appendChild(container);

// Create audio elements dynamically
let currentAudio = null;

// Function to stop all sounds
function stopAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
}

// Create buttons for each sound
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
stopBtn.innerText = "Stop";

stopBtn.addEventListener("click", stopAudio);

container.appendChild(stopBtn);
