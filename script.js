gsap.registerPlugin(ScrollTrigger);

// Hero entrance
gsap.to(".hero h1", { opacity: 1, y: 0, duration: 1 });
gsap.to(".hero p", { opacity: 1, y: 0, duration: 1, delay: 0.5 });
gsap.to(".hero .btn", { opacity: 1, y: 0, duration: 1, delay: 1 });

// Scroll gradient
gsap.to("body", {
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
      document.body.style.setProperty('--scroll', `${self.progress * 100}%`);
    }
  }
});

// Floating plastic
const plasticTypes = ['bag', 'bottle', 'wrapper', 'cup'];
const plasticWrapper = document.querySelector('.plastic-wrapper');

function spawnPlastic() {
  const div = document.createElement('div');
  div.classList.add('plastic');

  const type = plasticTypes[Math.floor(Math.random() * plasticTypes.length)];
  div.classList.add(type);

  div.style.left = `${Math.random() * 100}%`;
  div.style.animationDuration = `${6 + Math.random() * 6}s`;

  plasticWrapper.appendChild(div);

  // Remove after animation
  setTimeout(() => {
    div.remove();
  }, 12000);
}

setInterval(spawnPlastic, 700);

// Trash build-up on seabed
const trashContainer = document.getElementById('trash-container');

function dropTrash() {
  const trash = document.createElement('div');
  trash.classList.add('trash-piece');
  trash.style.left = Math.random() * 100 + '%';
  trash.style.width = (15 + Math.random() * 30) + 'px';
  trash.style.height = (10 + Math.random() * 20) + 'px';
  trash.style.transform = `rotate(${Math.random() * 60 - 30}deg)`;
  trash.style.background = `rgba(255, 255, 255, ${0.1 + Math.random() * 0.2})`;
  trashContainer.appendChild(trash);
}

// New trash every 5 seconds
setInterval(dropTrash, 5000);