console.log("Let's get this party started!");



async function getGIF(){
    
    let search = document.querySelector('#input').value
    console.log(search)
    const response = await axios.get("https://api.giphy.com/v1/gifs/search", {params:{ q:`${search}`, api_key: 'jqYAfY2aomE4eC6qt081KX1VTxLgkIHB'}})
    console.log(response)
    let button= document.querySelector('button')
    button.addEventListener('click', function(e) {e.preventDefault();
    let imagePost = document.querySelector('img')
    url=response.data.data[0].images.looping.mp4
    imagePost.setAttribute("src", url);
    console.log(imagePost)})}
   
getGIF()


