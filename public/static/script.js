document.addEventListener('DOMContentLoaded', () => {
    // Config
    const TARGET_URL = "https://vivatel.vercel.app"; // Replace with actual URL
    const ANIMATION_DURATION = 4000; // 4 seconds total
    const REDIRECT_DELAY = 3000; // 3 seconds after finished

    // Elements
    const progressFill = document.getElementById('progress-fill');
    const statusTitle = document.getElementById('status-title');
    const statusDesc = document.getElementById('status-desc');
    const latencyStat = document.getElementById('latency-stat');
    const percentStat = document.getElementById('status-percent');

    const actionArea = document.getElementById('action-area');
    const redirectBtn = document.getElementById('redirect-btn');
    const countdownEl = document.getElementById('countdown');

    let startTime = null;
    let scanInterval = null;

    // Set Button Href
    redirectBtn.href = TARGET_URL;

    // Steps definition
    const steps = [
        { progress: 20, text: "Identificando localização...", latency: "-- ms" },
        { progress: 45, text: "Analisando rotas de rede...", latency: "124 ms" },
        { progress: 70, text: "Otimizando pacotes via Angola Cable...", latency: "42 ms" },
        { progress: 100, text: "Conexão Estabelecida na VIVATEL Cloud.", latency: "12 ms" }
    ];

    function updateProgress(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / ANIMATION_DURATION, 1);

        // Visual updates based on progress curve
        const currentPercent = Math.floor(progress * 100);
        progressFill.style.width = `${currentPercent}%`;
        percentStat.textContent = `${currentPercent}%`;

        // Determine current step
        let currentStep = steps[0];
        if (currentPercent > 20) currentStep = steps[1];
        if (currentPercent > 60) currentStep = steps[2];
        if (currentPercent >= 98) currentStep = steps[3];

        statusDesc.textContent = currentStep.text;
        if (currentStep.latency !== "-- ms") {
            // Randomize slightly for effect
            const baseLat = parseInt(currentStep.latency);
            const jitter = Math.floor(Math.random() * 5) - 2;
            latencyStat.textContent = `Ping: ${Math.max(1, baseLat + jitter)} ms`;
        }

        if (progress < 1) {
            requestAnimationFrame(updateProgress);
        } else {
            finishAnimation();
        }
    }

    function finishAnimation() {
        statusTitle.textContent = "Ambiente Pronto";
        statusTitle.style.background = "linear-gradient(to right, #22d3ee, #3b82f6)";
        statusTitle.style.webkitBackgroundClip = "text";
        statusTitle.style.webkitTextFillColor = "transparent";

        // Show Packet Data Animation
        document.querySelector('.data-packet').style.opacity = '1';

        // Show Action Area
        setTimeout(() => {
            actionArea.classList.remove('hidden');
            startRedirectCountdown();
        }, 500);
    }

    function startRedirectCountdown() {
        let seconds = 3;
        countdownEl.textContent = seconds;

        const interval = setInterval(() => {
            seconds--;
            countdownEl.textContent = seconds;
            if (seconds <= 0) {
                clearInterval(interval);
                window.location.href = TARGET_URL;
            }
        }, 1000);
    }

    // Start
    requestAnimationFrame(updateProgress);
});
