document.addEventListener('DOMContentLoaded', () => {
    fetchingQuotes()
})


function renderquotes(quotes){
const quoteList = document.querySelector('#quote-list')
const list = document.createElement('li')
// list.classList('quote-card')
list.textContent = `${quotes.quote},
${quotes.author},`

      quoteList.appendChild(list)
}

function fetchingQuotes(){
    fetch('http://localhost:3000/quotes')
    .then(response => response.json())
    .then(quotes => quotes.forEach(quotes => renderquotes(quotes)))
}



const newquote = document.querySelector('#new-quote').value
const authorname = document.querySelector('#author').value

function handleSubmit(e){
    e.preventDefault()
let quoteObject = {
    quote:e.target.newquote.value,
    author:e.target.authorname.value
}
    sendingQuotes(quoteObject)
}

function sendingQuotes(quoteObject){
    fetch('http://localhost:3000/quotes',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(quoteObject)

    })
    .then(response => response.json())
    .then(data => console.log(data))
}

document.querySelector('.btn btn-primary').addEventListener('click', sendingQuotes)
