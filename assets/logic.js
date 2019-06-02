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

let bill, percent, split, between

// form is submitted
tipForm.addEventListener('submit', () => {
    event.preventDefault()

    // grab values from form
    bill = parseFloat(document.querySelector('input[name=bill]').value)
    percent = parseFloat(document.querySelector('input[name=percent]').value) / 100
    split = (document.querySelector('input[name=split]:checked').value === 'yes') ? true : false
    between = (split) ? parseFloat(document.querySelector('input[name=between]').value) : undefined

    if (bill <= 0 || percent <= 0 || between <= 0) {
        result.innerHTML = 'Please enter positive values'

    } else {
        // calculate tip
        let tipTotal = bill * percent
        if (split) tipTotal /= between

        result.innerHTML = 'Tip: ' + tipTotal.toFixed(2)
    }
})


// reset input fields and html
reset.addEventListener('click', () => {
    tipForm.reset()
    splitOption.style.display = 'none'
    result.innerHTML = ''
})