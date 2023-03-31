const user = document.getElementById("user")
const dots = document.getElementById("dots")
const title = document.getElementById("title")
const desc = document.getElementById("desc")
const cta = document.getElementById("cta")
const navLink = document.querySelector(".nav-link")
console.log("app running...");
const tl = gsap.timeline()

tl.from(".navbar", { width: 0, duration: 1 })
tl.from(user, {
    y: "100vh",
    opacity: 0,
    duration: 2
})
tl.from("#nav-link", {
    // scale: 2,
    opacity: 0,
    duration: 1,
    y: "100%",
    stagger: 0.2
})

tl.from(dots, {
    rotation: 306,
    opacity: 0,
    duration: 1,
    scale: 2
})
tl.from(title, {
    x: "-200vh",
    duration: 1
})
tl.from(desc, {
    x: "200vh",
    duration: 1
})
tl.from("#cta", {

    // scale: 2,
    opacity: 0,
    duration: 1
})
gsap.from(".circle", { scale: 0, yoyo: true, repeat: -1, duration: 0.8 })
window.addEventListener("mousemove", function (event) {
    const x = event.pageX
    const y = event.pageY
    gsap.to(".circle", 0.7, { x, y })
    gsap.to(".tiny", 0.3, { x, y })
})