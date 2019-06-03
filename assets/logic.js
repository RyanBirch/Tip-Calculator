const tipForm = document.getElementById('tip-form')
const result = document.getElementById('result')
const reset = document.getElementById('reset')

// hide or show split option depending on user input
const splitOption = document.getElementById('split-option')
splitOption.style.display = 'none'

// show if the user wants to split the bill
const confirmSplit = document.getElementById('confirm-split')
confirmSplit.addEventListener('click', () => {
    splitOption.style.display = 'block'
})

// hide if the user doesn't want to split the bill
const noSplit = document.getElementById('no-split')
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


// reset html
reset.addEventListener('click', () => {
    splitOption.style.display = 'none'
    result.innerHTML = ''
})