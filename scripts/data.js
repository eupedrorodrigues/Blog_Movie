var cards = [
    {
        id: 1,
        imageUrl: "./img/image_1.svg",
        title: "Spider-Man: Across the Spider-Verse",
        body: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence."
    },
    {
        id: 2,
        imageUrl: "./img/creed.svg",
        title: "Creed",
        body: "Adonis Johnson is the son of the famous boxing champion Apollo Creed, who died in a boxing match in Rocky IV (1985). Adonis wasn't born until after his father's death and wants."
    },
    {
        id: 3,
        imageUrl: "./img/Inception.svg",
        title: "Inception",
        body: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state."
    }
];
document.addEventListener("DOMContentLoaded", function () {
    var cardSection = document.getElementById("cardsContainer");
    if (cardSection) {
        cards.forEach(function (card) {
            var cardElement = createCardElement(card);
            cardSection.appendChild(cardElement);
        });
    }
    var cardId = getUrlParameter("id");
    if (cardId) {
        var selectedCard = cards.find(function (card) { return card.id.toString() === cardId; });
        if (selectedCard) {
            displayPresentation(selectedCard);
        }
    }
});
function getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function displayPresentation(card) {
    var cardImage = document.getElementById("displayImg");
    var cardTitle = document.getElementById("displayTitle");
    var cardBody = document.getElementById("displayParagrafy");
    console.log(cardImage);
    if (cardImage) {
        cardImage.src = card.imageUrl;
    }
    if (cardTitle) {
        cardTitle.textContent = card.title;
    }
    if (cardBody) {
        cardBody.textContent = card.body;
    }
}
function createCardElement(card) {
    var cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    var cardLink = document.createElement("a");
    cardLink.style.textDecoration = "none";
    cardLink.addEventListener("click", function () {
        window.location.href = "pages/pages.html?id=".concat(card.id, "&img=").concat(card.imageUrl, "&title=").concat(card.title, "&body=").concat(card.body);
    });
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
var comments = [
    {
        id: 1,
        postId: 1,
        email: "sandro.pb@example.com",
        body: "Esse filme foi muito foda, amei!"
    },
    {
        id: 2,
        postId: 2,
        email: "pedro.pb@example.com",
        body: "Eu tenho um squad chamado Pedroverso"
    },
    {
        id: 3,
        postId: 3,
        email: "user3@example.com",
        body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
];
document.addEventListener("DOMContentLoaded", function () {
    var commentsContainer = document.getElementById("comments");
    if (commentsContainer) {
        comments.forEach(function (comment) {
            var commentElement = createCommentElement(comment);
            commentsContainer.appendChild(commentElement);
        });
    }
});
function createCommentElement(comment) {
    var commentParagraph = document.createElement("p");
    commentParagraph.classList.add("userComments");
    var commentLine = document.createElement("hr");
    commentLine.classList.add("line");
    commentParagraph.textContent = "User_".concat(comment.id, ": ").concat(comment.email, ": ").concat(comment.body);
    commentParagraph.appendChild(commentLine);
    return commentParagraph;
}
