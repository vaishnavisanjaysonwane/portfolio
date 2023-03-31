const projects = [
    {
        name: "Todo",
        image: "https://images.unsplash.com/photo-1680199690179-7fe21b65d9ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
        url: "https://www.google.com",
        desc: "Lorem"
    },
    {
        name: "Game",
        image: "https://images.unsplash.com/photo-1680199690179-7fe21b65d9ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
        url: "https://www.google.com",
        desc: "Lorem"
    },
    {
        name: "MOney ",
        image: "https://images.unsplash.com/photo-1680199690179-7fe21b65d9ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
        url: "https://www.google.com",
        desc: "Lorem"
    },
    {
        name: "Red Bus",
        image: "https://images.unsplash.com/photo-1680199690179-7fe21b65d9ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
        url: "https://www.google.com",
        desc: "Lorem"
    }
]

let str = ""
for (const item of projects) {
    str += `
    <div class="card">
        <img src="${item.image}" alt="">
        <div class="card-body">
        <h1>${item.name}</h1>
        <p>${item.desc}</p>
        <a href="${item.url}">Vitit</a>
        </div>
    </div>
    `
}

document.getElementById("projects").innerHTML = str

gsap.registerPlugin(ScrollTrigger)

gsap.from(".card", {
    scrollTrigger: {
        trigger: ".card",
        scrub: 1,
        // start: " top 900px"
        end: "+=200"
    },
    scale: 0,
    rotation: 360,
    stagger: 0.5
})