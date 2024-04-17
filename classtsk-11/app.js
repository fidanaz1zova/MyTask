const movies = [
    {
      id: 1,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_tizKnbS9Gg-FO1NGLU1R43Z9Qwjm-0Sx5IH3we9hw&s",
      title: "LOTR",
      desc: "The Lord od the Rings",
      imdb: "8,9",
    },
    {
      id: 2,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZiGf80_RTs3BJwbCJkUYw1hwlsLbTYfJFBQ8KMTJ-g&s",
      title: "HP",
      desc: "Harry Potter",
      imdb: "8,1",

    }, 
    {
        id: 3,
        imgSrc:
          "",
        title: "",
        desc: "The Godfather",
        imdb: "",
  
      }, 
      {
        id: 4,
        imgSrc:
          "",
        title: "",
        desc: "",
        imdb: "",
  
      }, 
      {
        id: 5,
        imgSrc:
          "",
        title: "",
        desc: "",
        imdb: "",
  
      }, 
      {
        id: 6,
        imgSrc:
          "",
        title: "",
        desc: "",
        imdb: "",
  
      }, 
  ];
  
  const form = document.querySelector("form");
  const imgInput = document.querySelector("#image"); 
  imgInput.style.width = "500px"
  imgInput.style.background = "beige"
  imgInput.style.border = "3px solid black"
  imgInput.style.borderRadius = "20px"
  const titleInput = document.querySelector("#title");
  titleInput.style.width = "500px"
  titleInput.style.background = "beige"
  titleInput.style.border = "3px solid black"
  titleInput.style.borderRadius = "20px"
  const descInput = document.querySelector("#desc");
  descInput.style.width = "500px"
  descInput.style.background = "beige"
  descInput.style.border = "3px solid black"
  descInput.style.borderRadius = "20px"
  const imdbInput = document.querySelector("#imdb");
  imdbInput.style.width = "500px"
  imdbInput.style.background = "beige"
  imdbInput.style.border = "3px solid black"
  imdbInput.style.borderRadius = "20px"
  const cards = document.querySelector("#cards");

 
  
  let counter = 3;
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const newMovie = {
      id: counter,
      imgSrc: imgInput.value,
      title: titleInput.value,
      desc: descInput.value,
    };
  
    //   movies = [...movies, newMovie] spreaddd
    movies.push(newMovie);
  
    counter++;
  
    cards.innerHTML = "";
    movies.map((elem) => {
      createCard(elem);
    });
  });
  
  movies.map((elem) => {
    createCard(elem);
  });
  
  function createCard(item) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "18rem";
  
    const imageSec = document.createElement("img");
    imageSec.classList.add("card-img-top");
    imageSec.setAttribute("src", item.imgSrc);
  
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.style.background = "black"
  
    const titleSec = document.createElement("h5");
    titleSec.classList.add("card-title");
    titleSec.innerText = item.title;
    titleSec.style.background = "black"
    titleSec.style.color= "beige"


    const descSec = document.createElement("p");
    descSec.classList.add("card-text");
    descSec.innerText = item.desc;
    descSec.style.background = "black"
    descSec.style.color = "beige"

    const imdbSec = document.createElement("p");
    imdbSec.classList.add("card-text");
    imdbSec.innerText = item.imdb;
    imdbSec.style.background = "black"
    imdbSec.style.color = "beige"

  
    cardBody.append(titleSec, descSec, imdbSec);
    card.append(imageSec, cardBody);
  
    cards.appendChild(card);
  }