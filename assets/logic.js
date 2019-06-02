let tipForm = document.getElementById('tip-form')
let result = document.getElementById('result')
let reset = document.getElementById('reset')

// hide or show split option depending on user input
let splitOption = document.getElementById('split-option')
splitOption.style.display = 'none'

let confirmSplit = document.getElementById('confirm-split')
confirmSplit.addEventListener('click', () => {
    splitOption.style.display = 'block'
})

let noSplit = document.getElementById('no-split')
noSplit.addEventListener('click', () => {
    splitOption.style.display = 'none'
})


// form is submitted
tipForm.addEventListener('submit', () => {
    event.preventDefault()

    // grab values from form
    let bill = parseFloat(document.querySelector('input[name=bill]').value)
    let percent = parseFloat(document.querySelector('input[name=percent]').value) / 100
    let split = (document.querySelector('input[name=split]:checked').value === 'yes') ? true : false
    let between = (split) ? parseFloat(document.querySelector('input[name=between]').value) : undefined

    // calculate tip
    let tipTotal = bill * percent
    if (split) {
        tipTotal /= between
    }

    result.innerHTML = 'Tip: ' + tipTotal
})


reset.addEventListener('click', () => {
    
})