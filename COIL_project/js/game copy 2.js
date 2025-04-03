const cards = [
    { url: "../images/Kort-1.png" },
    { url: "../images/Kort-2.png" }
]; // Img array

const button = document.getElementById("button"); // Finds the button
const container = document.getElementById("sectionCards"); // Finds the section for the card

button.addEventListener("click", () => {  
    const randomCard = cards[Math.floor(Math.random() * cards.length)]; // Picks a random card

    const cardElement = document.createElement("img"); // Creates a div for the card
    cardElement.classList.add("card"); 

    const imgElement = document.createElement("img"); // Create an img element
    imgElement.src = randomCard.url; // Set the src attribute
    imgElement.alt = "Card image"; // Add alt text
    imgElement.style.width = "150px"; // Ensure width matches CSS
    imgElement.style.height = "200px"; // Ensure height matches CSS

    cardElement.appendChild(imgElement); // Add img to the div
    container.innerHTML = ""; // Clear previous card
    container.appendChild(cardElement);

    setTimeout(() => {
        cardElement.classList.add("show");
    }, 10);
    console.log("Valgt kort:", randomCard);
});