let tipForm = document.getElementById('tip-form')
let result = document.getElementById('result')

tipForm.addEventListener('submit', () => {
    event.preventDefault()
    let bill = document.querySelector('input[name=bill]').value
    let percent = document.querySelector('input[name=percent]').value
    let split = (document.querySelector('input[name=split]:checked').value === 'yes') ? true : false
    let between = 1
    if (split) between = document.querySelector('input[name=between]').value 
})