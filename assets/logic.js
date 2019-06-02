let tipForm = document.getElementById('tip-form')
let result = document.getElementById('result')

tipForm.addEventListener('submit', () => {
    event.preventDefault()

    // grab values from form
    let bill = parseFloat(document.querySelector('input[name=bill]').value)
    let percent = parseFloat(document.querySelector('input[name=percent]').value) / 100
    let split = (document.querySelector('input[name=split]:checked').value === 'yes') ? true : false
    let between = (split) ? parseFloat(document.querySelector('input[name=between]').value) : undefined

    let tipTotal = bill * percent
    if (split) {
        tipTotal /= between
    }
    result.innerHTML = 'Tip: ' + tipTotal
})