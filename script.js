const burger =

    document.querySelector(".burger-3d");

document.addEventListener("mousemove", (e) => {

    let x =
        (window.innerWidth / 2 - e.pageX) / 30;

    let y =
        (window.innerHeight / 2 - e.pageY) / 30;

    burger.style.transform =
        `rotateY(${x}deg)
 rotateX(${-y}deg)`;

}); gsap.from(".hero-content h1", {
    y: 100,
    opacity: 0,
    duration: 1.5
});

gsap.from(".hero-content p", {
    y: 100,
    opacity: 0,
    duration: 2
});

gsap.from(".burger-3d", {
    scale: 0,
    rotation: 360,
    duration: 2
});
