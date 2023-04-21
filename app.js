console.log("Let's get this party started!");





function returnGIF(){

    let button= document.querySelector('button')
    button.addEventListener('click', function(e) {e.preventDefault(); let searchTerm= e.target.value; console.log(e.target.value)})
async function getGIF(searchTerm){
    const response = await axios.get("https://api.giphy.com/v1/gifs/search", {params:{ q:searchTerm, api_key: 'jqYAfY2aomE4eC6qt081KX1VTxLgkIHB'}})
    console.log(response)
    return response
}
getGIF()

}