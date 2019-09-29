let newDiv = document.querySelector('.characters')
let counter = 1

const getCharacter = function() {
    let url = `https://www.anapioficeandfire.com/api/characters?page=${counter}&pageSize=50`
    fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then(function (jsonData) {

        jsonData.forEach(function(character){
            let name;
         if(character.name === ''){
            name = character.aliases[0]
         } else {
             name = character.name
         }
            let mainDiv = document.createElement('div')
            mainDiv.classList.add('maindiv')
            
            let nameDiv = document.createElement('div')
            nameDiv.innerHTML = name
            mainDiv.appendChild(nameDiv)


            books = character.books.map( book => {
                let booksDiv = document.createElement('div')
                booksDiv.innerHTML += book
                mainDiv.appendChild(booksDiv)
            })


            let cultureDiv = document.createElement('div')
            let culture;
            if (!character.culture) {
                culture = 'Unknown'
            } else {
                culture = character.culture
            }
            cultureDiv.innerHTML += culture
            mainDiv.appendChild(cultureDiv)

            let urlDiv = document.createElement('div')
            urlDiv.innerHTML += character.url
            mainDiv.appendChild(urlDiv)


            newDiv.appendChild(mainDiv)

        })

    })

}

getCharacter()

const nextButton = document.querySelector('.button')
nextButton.addEventListener('click', function(){
    counter += 1
    newDiv.innerHTML = ""
    getCharacter()
}) 