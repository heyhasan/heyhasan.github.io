const words = ["Freelancer:", "Web Designer", "Archivist"];
const ima = document.getElementById('im');
const cursor = document.getElementById('cursor');
cursor.style.height = '1em';

let wordIndex = 0, charIndex = 0, deleting = false;

function tick() {
    const current = words[wordIndex];

    if(!deleting) {
        charIndex++;
        ima.textContent = current.slice(0, charIndex);
        if(charIndex === current.length) {
            deleting = true;
            setTimeout(tick, 1600);
            return;
        }
    } else {
        charIndex--;
        ima.textContent = current.slice(0, charIndex);
        if(charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    const speed = deleting ? 45 : 90;
    setTimeout(tick, speed);
}

tick();

const navigation = document.querySelector('.floating-menu');
const navigationToggle = document.querySelector('.menu-primary');

if (navigation && navigationToggle) {
    navigationToggle.addEventListener('click', () => {
        const isOpen = navigation.classList.toggle('is-open');
        navigationToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', (event) => {
        if (!navigation.contains(event.target) && navigation.classList.contains('is-open')) {
            navigation.classList.remove('is-open');
            navigationToggle.setAttribute('aria-expanded', 'false');
        }
    });
}
