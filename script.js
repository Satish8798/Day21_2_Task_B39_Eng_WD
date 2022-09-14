//function that returns disney charcters data
function getDisneyCharactersData(){
    try {
        const charactersData= fetch('https://api.disneyapi.dev/characters'); //using fetch to retrieve data

        /* returning json data using then if resloved 
            or else returning error if rejected */
         return charactersData.then(response=>response.json()).then(data=>data).catch(error=>{
            console.log(error)
            return error;
         })

    } catch (error) {
        console.log(error);
    }
}

//using an async function here for displaying disney characters data
async function displayDisneyCharactersData(){
    const charactersData=await getDisneyCharactersData(); //await is used to get the json data but not promise

    //accessing the div element where data is to be displayed
    let displayCharactersDiv = document.querySelector(".display-data");
    displayCharactersDiv.innerHTML="";

    //displaying the character data on webpage
    charactersData.data.forEach(character=>{
        displayCharactersDiv.innerHTML+=`
        <div class="character-card">
            <h4> Name : ${character.name}</h4>
            <img src="${character.imageUrl}" class="character-image">
            <p>TV Shows : ${character.tvShows}</p>
            <p>Films :  ${character.films}</p>
        </div>
    `
    })
}