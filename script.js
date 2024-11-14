const submitBtn = document.querySelector('#submit-btn')
const textInput = document.querySelector('#text-input')
const list = document.querySelector('#list')



const handleSubmit = (e) => {
    e.preventDefault()
    let text = textInput.value
    let newEl = document.createElement('li')
    newEl.innerText = text
    list.appendChild(newEl)
    textInput.value = ""
}

submitBtn.addEventListener('click', handleSubmit)