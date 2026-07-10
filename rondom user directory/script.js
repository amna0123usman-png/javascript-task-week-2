const image = document.getElementById("userImage");
const name = document.getElementById("name");
const email = document.getElementById("email");
const country = document.getElementById("country");
const button = document.getElementById("refreshBtn");

async function getUser(){

    try{

        const response = await fetch("https://randomuser.me/api/");

        const data = await response.json();

        const user = data.results[0];

        image.src = user.picture.large;

        name.textContent =
        `${user.name.first} ${user.name.last}`;

        email.textContent = user.email;

        country.textContent = user.location.country;

    }

    catch(error){

        name.textContent = "Failed to load user";

        email.textContent = "";

        country.textContent = "";

        console.log(error);

    }

}

getUser();

button.addEventListener("click", getUser);