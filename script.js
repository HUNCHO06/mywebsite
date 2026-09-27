function showProject() {
    document.getElementById("projectModal").style.display = "flex";
}

function closeProject() {
    document.getElementById("projectModal").style.display = "none";
}

function showWebsite() {
    document.getElementById("websiteModal").style.display = "flex";
}

function closeWebsite() {
    document.getElementById("websiteModal").style.display = "none";
}

const revealElements = document.querySelectorAll(
    "section, .project, .skill, .about-box, .contact-box"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

function revealOnScroll() {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

const text = "Computer Science Student";
const typingText = document.getElementById("typing-text");

let index = 0;

function typeText() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

typeText();