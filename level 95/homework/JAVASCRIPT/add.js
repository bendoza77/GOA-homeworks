const mainImage = document.getElementById("mainImage");
const imageLink = JSON.parse(localStorage.getItem("add"));
const bookArr = JSON.parse(localStorage.getItem("books"));

const title = document.getElementById("title");
const author = document.getElementById("author");

mainImage.src = imageLink[2];
title.textContent = imageLink[0]
author.textContent = imageLink[1];

