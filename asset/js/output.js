const frontEndSkill = [
    { name: "html", persent: 80 },
    { name: "css", persent: 35 },
    { name: "js", persent: 15 },
    { name: "React", persent: 20 },
]
const backEndSkill = [
    { name: "NODe JS", persent: 70 },
    { name: "Mango DB", persent: 45 },
    { name: "SL", persent: 25 },
    { name: "EXPRESS js", persent: 90 },
]
const fe = document.getElementById("frontend")
const be = document.getElementById("backEnd")

display(frontEndSkill, fe)
display(backEndSkill, be)

function display(arr, el) {
    for (const item of arr) {
        el.innerHTML += `
          <div class="progress-bar">
        <div class="progress" style="width:${item.persent}%">${item.name} </div>
    </div>`
    }

}

gsap.registerPlugin(ScrollTrigger)

gsap.from(".progress", {
    width: 0, duration: 2, ScrollTrigger: ".progress"
})

