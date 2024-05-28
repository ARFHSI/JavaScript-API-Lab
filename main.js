let url = "https://coffee.alexflipnote.dev/random.json"



fetch(url , {method:"GET"})
.then(Response => Response.json())
// .then(json => console.log(json))


.then(data => {
    console.log(data.file)
    
    
    let body =document.getElementById('imgf')
   let coffee = document.createElement("img")
   coffee.src=data.file

   body.append(coffee)
        // console.log(list)
        // collection.append(list)
        // console.log(list)

})