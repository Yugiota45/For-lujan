const messages = [
"Te amo mucho reina ❤️",
"1 mes con vos😍",
"Sos la mejor del mundo💖",
"Quedate conmigo💕",
"I love you😘",
"Sonrisa encantadora🥰",
"Siempre tuyo💗",
"Volando como la droga me tienes💞",
"Sos un sol m nena💘",
"Nunca te olvides de lo mucho que t amo💌",
"Pensando en vos siempre❤️‍🩹",
"Muaaak💓",
"Pene",
];

function createTextBubble() {
    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

    const left = Math.random() * 80 + 10;
    const top = Math.random() * 80 + 10;

    bubble.style.position = "absolute";
    bubble.style.left = left + "vw";
    bubble.style.top = top + "vh";

    const container = document.getElementById("bubbles-text");
    container.appendChild(bubble);

    setTimeout(() => {
        const rect = bubble.getBoundingClientRect();

        if (rect.right > window.innerWidth) {
            const newLeft = window.innerWidth - rect.width - 10;
            bubble.style.left = `${newleft}px`;
        }

        if (rect.bottom > window.innerHeight) {
        const newTop = window.innerHeight - rect.height - 10;
        bubble.style.top = `${newTop}px`;
        }

        if (rect.left < 0) {
         bubble.style.left = "10px";
        }

        if (rect.top < 0) {
        bubble.style.top = "10px";
         }
    }, 10);

    setTimeout(() => {
        bubble.remove();
    }, 8000);
}

setInterval(createTextBubble, 500);