document.addEventListener("mousemove", function (event) {
    const cursorTrail = document.createElement("div");
    cursorTrail.className = "cursor-trail";
    cursorTrail.style.left = `${event.pageX}px`;
    cursorTrail.style.top = `${event.pageY}px`;

    document.body.appendChild(cursorTrail);

    setTimeout(() => {
        cursorTrail.style.transform = "scale(0)";
        cursorTrail.addEventListener("transitionend", () => {
            cursorTrail.remove();
        });
    }, 100);
});
document.addEventListener("mousemove", function(event) {
    const cursorTrail = document.createElement("div");
    cursorTrail.className = "cursor-trail";
    cursorTrail.style.left = `${event.pageX}px`;
    cursorTrail.style.top = `${event.pageY}px`;

    document.body.appendChild(cursorTrail);

    setTimeout(() => {
        cursorTrail.style.transform = "scale(0)";
        cursorTrail.addEventListener("transitionend", () => {
            cursorTrail.remove();
        });
    }, 100);
});

// Efecto de "glitch" en el texto de bienvenida
function glitchEffect(element) {
    const originalText = element.innerText;
    let glitchInterval = setInterval(() => {
        element.innerText = originalText.split('').map(char => Math.random() > 0.7 ? '*' : char).join('');
    }, 100);

    setTimeout(() => {
        clearInterval(glitchInterval);
        element.innerText = originalText;
    }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".title");
    setInterval(() => glitchEffect(title), 3000);
});

const button = document.querySelector(".cyber-btn");
button.addEventListener("mouseover", () => {
    button.classList.add("button-glow");
});
button.addEventListener("mouseout", () => {
    button.classList.remove("button-glow");
});

window.addEventListener("load", () => {
    const loader = document.createElement("div");
    loader.className = "loader";
    document.body.appendChild(loader);

    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => loader.remove(), 500);
    }, 1500);
});
