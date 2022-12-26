const panels = document.querySelectorAll(".panel")

// pičo lína vyřeš to potom, jachym bude vědět
panels.forEach((panel, i) => {
    panel.addEventListener("click", () => {
        removeActivePanels()
        panel.classList.add("active")
    })
})

function removeActivePanels() {
    panels.forEach(panel => {
        panel.classList.remove("active")
    })
}