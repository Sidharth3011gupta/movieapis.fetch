import create from "./apis.js";
import sidebar from "./favorites.js"
import movies from "./search.js"
import manageFavs from "./favorites.js"
const searchinput = document.querySelector("[searchinput]");
const searchButton = document.querySelector("[searchbutton]");
const profileButton = document.querySelector("[myProfile]");
const randomPage = Math.floor(Math.random()*10);
async function getmovies() {
    const res = await fetch(`https://www.omdbapi.com/?apikey=fd4d0f1e&s=movie&page=${randomPage}.`);
   
    const data1 = await res.json();
    const data = Object.entries(data1)[0][1]
    console.log(data)
    movies.searchinputevent(searchinput,data);
    create.create(data)
    manageFavs.manageFavs(data);
    sidebar.activatesidebar(profileButton);

}
getmovies();