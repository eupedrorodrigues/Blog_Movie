document.addEventListener('DOMContentLoaded', function () {
    var cardSection = document.getElementById("cardsContainer");
    if (cardSection) {
        var cards = [
            {
                id: 1,
                imageUrl: "img/image_1.svg",
                title: "spider-man: across the spider-verse ",
                body: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence..."
            },
            {
                id: 2,
                imageUrl: "img/creed.svg",
                title: "Creed",
                body: "Adonis Johnson is the son of the famous boxing champion Apollo Creed, who died in a boxing match in Rocky IV (1985). Adonis wasn't born until after his father's death and wants..."
            },
            {
                id: 3,
                imageUrl: "img/A-origem.svg",
                title: "Inception",
                body: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state..."
            }
        ];
        cards.forEach(function (card) {
            var cardElement = createCardElement(card);
            cardSection.appendChild(cardElement);
        });
    }
});
function createCardElement(card) {
    var cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    var cardLink = document.createElement("a");
    cardLink.href = "pages/pag_1.html";
    cardLink.style.textDecoration = "none";
    var cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top");
    cardImage.src = card.imageUrl;
    cardImage.width = 309;
    cardLink.appendChild(cardImage);
    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    var cardTitle = document.createElement("h4");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = card.title;
    cardBody.appendChild(cardTitle);
    var cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = card.body;
    cardBody.appendChild(cardText);
    var cardExpand = document.createElement("a");
    cardExpand.classList.add("card-expand");
    cardExpand.href = "";
    cardExpand.textContent = "Expand...";
    cardBody.appendChild(cardExpand);
    cardLink.appendChild(cardBody);
    cardDiv.appendChild(cardLink);
    return cardDiv;
}
//     const customCardElement = creatCardsPages();
//     const cardSection = document.getElementById("cardsContainer");
//     if (cardSection) {
//         cardSection.appendChild(customCardElement);
//     }
//   function creatCardsPages() {
//     const cardDiv = document.createElement("div");
//     cardDiv.id = "card";
//     const cardImage = document.createElement("img");
//     cardImage.src = "../img/image_1.svg";
//     cardImage.alt = "Spider-Man: Across the Spider-Verse";
//     cardImage.width = 671;
//     cardDiv.appendChild(cardImage);
//     const cardBody = document.createElement("div");
//     cardBody.classList.add("card-body");
//     const cardTitle = document.createElement("h3");
//     cardTitle.classList.add("card-title");
//     cardTitle.textContent = "Spider-Man: Across the Spider-Verse";
//     cardBody.appendChild(cardTitle);
//     const cardParagraph = document.createElement("p");
//     cardParagraph.id = "paragrafy-card";
//     cardParagraph.textContent = "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.";
//     cardBody.appendChild(cardParagraph);
//     cardDiv.appendChild(cardBody);
//     return cardDiv;
//   }
