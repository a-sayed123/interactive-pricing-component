const slider = document.getElementById("slider")
const styles = getComputedStyle(document.documentElement)
const priceEL = document.querySelector('[data-scale-toggle]')
const viewsEL = document.querySelector(".header-subtitle")
const softCyan = styles.getPropertyValue("--Soft-Cyan").trim()
const strongCyan = styles.getPropertyValue("--Light-Grayish-Blue").trim()

data = [
    { views: "10K", price: 8 },
    { views: "50K", price: 12 },
    { views: "100K", price: 16 },
    { views: "500K", price: 24 },
    { views: "1M", price: 36 },
]


function updateSlider() {
    const value = Number(slider.value)
    const max = Number(slider.max)
    const percent = (value / max) * 100
    slider.style.background = `linear-gradient( to right , ${softCyan} ${percent}% , ${strongCyan} ${percent}%)`
    viewsEL.textContent = `${data[value].views} Pageviews`
    priceEL.textContent = `$${data[value].price.toFixed(2)}`
}

updateSlider()

slider.addEventListener("input", updateSlider)
