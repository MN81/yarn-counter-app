let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

console.log("How many rows did you knit?")




// Other opion to reset count to 0
// let saveBtn = document.getElementById("save-btn")

// saveBtn.addEventListener("click", function () {               
//    countEl.textContent = 0
//    count = 0
// });
