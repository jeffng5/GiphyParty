console.log("Let's get this party started!");





async function getGIF(){
    let search = document.querySelector('#input').value   
    const response = await axios.get("https://api.giphy.com/v1/gifs/search", {params:{ q:`${search}`, api_key: 'jqYAfY2aomE4eC6qt081KX1VTxLgkIHB'}})
    let imagePost = document.createElement('img')
    let body = document.querySelector('body')
    body.appendChild(imagePost)
    url=response.data.data[0].images.downsized_large.url
    imagePost.setAttribute("src", url);
    imagePost.classList.add('items')
    imagePost.setAttribute("id", `${search}`)
    return imagePost}

let button= document.querySelector('button')
button.addEventListener('click', function(e) {e.preventDefault(); getGIF()
; 
})


let bttn= document.getElementById('remove')
console.log(bttn)
bttn.addEventListener('mousedown', function(e){e.preventDefault();
console.log(e)
let stuff= document.getElementById('#items')
console.log(stuff)
return stuff.remove()})
// function createImgTag(){
//     let button=document.querySelector('button')
//     button.addEventListener('click', function(e){e.preventDefault(); 
//     let imagePost2 = document.createElement('img');
//     imagePost2.setAttribute("src", url)
//     getGIF()
//     }) 
// }

// createImgTag()

