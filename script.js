const panels = document.querySelectorAll(".panel")

// pičo lína vyřeš to potom, jachym bude vědět
panels.forEach((panel, i) => {
    panel.addEventListener("click", () => {
        if (panel.classList.contains("active")) {
            // shrink panel logic
            removeActivePanels()
        } else {
            // enlarge panel logic
            removeActivePanels()
            panel.classList.add("active")
        }
    })
})

function removeActivePanels() {
    panels.forEach(panel => {
        panel.classList.remove("active")
    })
}
