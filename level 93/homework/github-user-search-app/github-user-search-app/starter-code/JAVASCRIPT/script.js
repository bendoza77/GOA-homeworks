const photo = document.getElementById("photo");
const myForm = document.getElementById("myForm");
const button = document.getElementById("button");
const image = document.getElementById("image");
const myName = document.getElementById("myName");
const date = document.getElementById("date");
const loginName = document.getElementById("loginName");
const bio = document.getElementById("bio");
const folower = document.getElementById("folower");
const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const local = document.getElementById("local");
const web = document.getElementById("web");
const tw = document.getElementById("tw");
const co = document.getElementById("co");
const firstLine = document.getElementById("firstLine");
const secondLine = document.getElementById("secondLine");
const body = document.getElementById("body");
const mainTitle = document.getElementById("mainTitle");
const Light = document.getElementById("Light");
const sun = document.getElementById("sun");
const search = document.getElementById("search");
const main = document.getElementById("main");

folower.style.display = "none";
firstLine.style.display = "none";
secondLine.style.display = "none";


async function getInformation(){
    const username = document.getElementById("userName").value;
    try{
        const response = await fetch(`https://api.github.com/users/${username}`);
        if(!response.ok){
            console.log("The user is not found");
        } else{
            folower.style.display = "block";
            firstLine.style.display = "block";
            secondLine.style.display = "block";

            const result = await response.json();
            image.innerHTML = `<img src ="${result.avatar_url}", width="140px">`;
            myName.innerHTML = `<h1>${result.name || "Not available"}</h1>`;
            const dateTime = Date(result.created_at).split(" ");
            date.innerHTML = `<p>Joined ${dateTime[2]} ${dateTime[1]} ${dateTime[3]}</p>`
            loginName.innerHTML = `<p>${result.login}</p>`
            bio.innerHTML = `<p>${result.bio || "This  profile  has  no  bio"}</p>`;
            const accounte = await fetch(`https://api.github.com/users/${username}/repos`);
            const res = await accounte.json()
            let count = [];
            for(const i of res){
                count.push(i.name);
            }
            repos.innerHTML = `<p>${count.length || "Not Available"}</p>`;
            followers.innerHTML =`<p>${result.followers || "Not Available"}</p>`;
            following.innerHTML = `<p>${result.following || "Not Available"}</p>`;
            local.textContent = result.location;
            web.innerHTML = `<a href="${result.blog}">${result.blog || "Not Available"}</a>`
            tw.textContent = result.twitter_username || "Not Available";
            co.innerHTML = result.company || "Not Available";
        }

    }
    catch(err){
        console.log(err);
    }

}

let light = true;


function changeLight(){

    if(light === true){
        body.style.backgroundColor = "white";
        light = false;
        mainTitle.style.color = "black"
        Light.style.color = "black";
        sun.src = "./assets/icon-moon.svg";
        search.style.backgroundColor = "white";
        search.style.boxShadow = "0 10px 40px  rgba(187, 178, 178, 0.83)";
        main.style.backgroundColor = "white";
        main.style.boxShadow = "0 10px 40px  rgba(187, 178, 178, 0.83)";
        myName.style.color = "black";
        local.style.color = "black";
        tw.style.color = "black";
        web.style.color = "black";
        co.style.color = "black"
        bio.style.color = "black";
        
    } else {
        body.style.backgroundColor = "rgb(22, 24, 43)";
        mainTitle.style.color = "white"
        Light.style.color = "white";
        sun.src = "./assets/icon-sun.svg";
        search.style.backgroundColor = "rgb(32, 41, 103)";
        search.style.boxShadow = "0 0 0";
        main.style.backgroundColor = "rgb(32, 41, 103)";
        main.style.boxShadow = "0 0 0";
        myName.style.color = "white";
        local.style.color = "rgba(187, 178, 178, 0.83)";
        tw.style.color = "rgba(187, 178, 178, 0.83)";
        web.style.color = "rgba(187, 178, 178, 0.83)";
        co.style.color = "rgba(187, 178, 178, 0.83)"
        bio.style.color = "rgba(187, 178, 178, 0.83)";
        light = true;
    }
}