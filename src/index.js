console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function fetchImage(){
    fetch(imgUrl)
    .then(response => response.json())
    .then(pictures => domAdder(pictures.message))
}
const domAdder = (arraySource) => {
    const main = document.querySelector("#dog-image-container")
    arraySource.map(element => {
        const img = document.createElement("img")
        img.src = element
        main.appendChild(img)
    })
}

function fetchName(){
    fetch(breedUrl)
    .then(response => response.json())
    .then(names => domAdderNames(names.message))
}

function domAdderNames(obj){
    let array = []
    for(const key in obj){
        if(obj[key].lenght !=0){
            obj[key].map(element => array.push(element))
        }
    }
    const main = document.querySelector("#dog-breeds")
    array.forEach(name => {
        const li = document.createElement("li")
        li.innerText = name;
        li.addEventListener("click", () => li.style.color = "#FF0000")
        main.appendChild(li)
    })
    filter();
}


function filter(){
    let eventFilter = document.getElementById("breed-dropdown")
    let filter = eventFilter.value
    let ul = document.getElementById("dog-breeds");
    let li = ul.getElementsByTagName("li")
    Array.from(li).filter((item)=>{
        if(item.innerText[0] != filter){
            item.style.display = "none"
        }else {
            item.style.display = ""
        }
    })
    
}



document.addEventListener('DOMContentLoaded', function(){
    fetchImage();
    fetchName();
    const dropDown = document.getElementById('breed-dropdown');
    dropDown.addEventListener('change', filter); 
})






