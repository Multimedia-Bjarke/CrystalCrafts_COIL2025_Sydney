// Array of card objects, each containing an image URL
const cards = [
    { url: "./images/Kort-1.png" }, // Adjusted path to use "./" (relative to game.html)
    { url: "./images/Kort-2.png" }
];

// Select the button and card container from the HTML
const button = document.getElementById("button");
const container = document.getElementById("sectionCards");

// Add an event listener to the button, so something happens when clicked
button.addEventListener("click", () => {  
    // Pick a random card from the 'cards' array
    const randomCard = cards[Math.floor(Math.random() * cards.length)];

    // Clear the previous card (if any) before adding a new one
    container.innerHTML = "";

    // Create a new div element for the card
    const cardElement = document.createElement("div"); 
    cardElement.classList.add("card"); // Add the 'card' CSS class for styling

    // Create an <img> element for the card image
    const imgElement = document.createElement("img"); 
    imgElement.src = randomCard.url; // Set the source to the selected card's URL
    imgElement.alt = "Card image"; // Set alt text for accessibility
    imgElement.style.width = "250px"; // Ensure width matches CSS
    imgElement.style.height = "390px"; // Ensure height matches CSS

    // Append the <img> inside the card <div>
    cardElement.appendChild(imgElement);

    // Add the card to the section in the HTML
    container.appendChild(cardElement);

    // Delay the animation slightly to ensure the CSS transition applies
    setTimeout(() => {
        cardElement.classList.add("show"); // Add 'show' class to trigger animation
    }, 10);

    // Log the selected card object to the console for debugging
    console.log("Selected card:", randomCard);
});