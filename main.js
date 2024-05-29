// let url = "https://coffee.alexflipnote.dev/random.json"



// fetch(url , {method:"GET"})
// .then(Response => Response.json())
// // .then(json => console.log(json))


// .then(data => {
//     console.log(data.file)
    
    
//     let body =document.getElementById('imgf')
//    let coffee = document.createElement("img")
//    coffee.src=data.file

//    body.append(coffee)
//         // console.log(list)
//         // collection.append(list)
//         // console.log(list)

// })



//////////////////////// lab 2 ////////////////////
let link = "https://rickandmortyapi.com/api/character/?page=2"
// console.log(link)
async function fetchData(){
    let res = await fetch(link)
    let data = await res.json();
    let collection= document.querySelector(".collection")
    // console.log(data.results[0].name)

    data.results.forEach(element => {
        console.log(element);
    let hearo = document.createElement('img')
    hearo.src = element.image

    let heroN = document.createElement('h2')

        heroN.innerText = element.name
        collection.append(heroN,hearo)
    });

}

fetchData()