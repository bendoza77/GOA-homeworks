// Task 1

const cube = document.getElementById("cube");

fetch("https://fakestoreapi.com/products/2").then((response) => {
    return response.json()
}).then((res) => {
    cube.innerHTML = [
        `<h1>Title: ${res.title}</h1>`,
        `<p>Description: ${res.description}</p>`,
        `<p>Price: ${res.price}</p>`,
        `<img src="${res.image}" width=200px>`
    ]
})


// Task 2

const secondCube = document.getElementById("secondCube");

fetch("https://fakestoreapi.com/products").then((secondResponse) => {
    return secondResponse.json();
}).then((secondRes) => {
    for(const i of secondRes){
        secondCube.innerHTML += [
            `<h1>Title: ${i["title"]}</h1>`,
            `<p>Description: ${i["description"]}</p>`,
            `<p>Price: ${i["price"]}</p>`,
            `<img src="${i["image"]}" width=200px>`
        ]   
    }
})