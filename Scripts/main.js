window.onload = createWave();

// Returns # of wave divs to add to the document based on screen size.
function calculateTotalWaves () {
    const screenWidth = window.screen.availWidth;
    const waveSize = 60; // 5 spans, 10px wide with 1px margin.
    return Math.ceil(screenWidth / waveSize);
};

// Creates & adds 5 spans to div node with a wave class. Then, appends to document.
function createWave() {
    const waveContainer = document.getElementById("waveContainer");
    const totalWaves = calculateTotalWaves();
    
    for (let i = 0; i < totalWaves; i++) {
        const div = document.createElement("div");
        div.classList = "wave";

        for (let j = 0; j < 5; j++) {
            const span = document.createElement("span");
            div.appendChild(span);
        }

        waveContainer.appendChild(div);
    }
};