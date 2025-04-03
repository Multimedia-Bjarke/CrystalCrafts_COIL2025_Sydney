const cards = [
    { url: "/images/Kort-1.png" },
    { url: "/images/Kort-2.png" }
  ];//Img array
const button = document.getElementById("button") //Finds the button
const container = document.getElementById("sectionCards") //Finds the section for the card

button.addEventListener("click", () => {  //Event listener for when the button is clicked
    const randomCard = cards[Math.floor(Math.random() * cards.length)]; //Finds a random card with math :O

    const cardElement = document.createElement("div") // Makes a new div-element for the card
    cardElement.classList.add("card"); 
    cardElement.textContent = randomCard;
    container.innerHTML = "";
    container.appendChild(cardElement)

    setTimeout(() =>{
        cardElement.classList.add("show");
    },10);
});



