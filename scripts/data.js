var cards = [
    {
        id: 1,
        imageUrl: "img/image_1.svg",
        title: "Spider-Man: Across the Spider-Verse",
        body: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence...",
        bodyOpen: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero."
    },
    {
        id: 2,
        imageUrl: "./img/creed.svg",
        title: "Creed",
        body: "Adonis Johnson is the son of the famous boxing champion Apollo Creed, who died in a boxing match in Rocky IV (1985). Adonis wasn't born until after his father's death and wants...",
        bodyOpen: "Adonis Johnson is the son of the famous boxing champion Apollo Creed, who died in a boxing match in Rocky IV (1985). Adonis wasn't born until after his father's death and wants to follow his fathers footsteps in boxing. He seeks a mentor who is the former heavyweight boxing champion and former friend of Apollo Creed, the retired Rocky Balboa."
    },
    {
        id: 3,
        imageUrl: "./img/Inception.svg",
        title: "Inception",
        body: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state...",
        bodyOpen: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved."
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
        cardBody.textContent = card.bodyOpen;
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
        email: "jolomol731@outlook.com.br",
        body: "This movie was so badass, I loved it!"
    },
    {
        id: 1,
        postId: 2,
        email: "pedro.rodrigues.pb@compasso.com.br",
        body: "I have a squad called Pedroverso. xD"
    },
    {
        id: 1,
        postId: 3,
        email: "emily.smith23@yahoo.com",
        body: "I just loved the movie!"
    },
    {
        id: 2,
        postId: 1,
        email: "johndoe87@gmail.com",
        body: "Creed packs a punch with its electrifying performances and heart-pounding boxing sequences."
    },
    {
        id: 2,
        postId: 2,
        email: "david.jones34@hotmail.com",
        body: "This film is a knockout combination of nostalgia and innovation, breathing new life into the Rocky franchise."
    },
    {
        id: 2,
        postId: 3,
        email: "samantha.johnson13@gmail.com",
        body: "Creed is a powerful and emotional journey that leaves you cheering for its characters long after the final bell."
    },
    {
        id: 3,
        postId: 1,
        email: "matthew.rodriguez21@outlook.com",
        body: "Christopher Nolan's Inception is a cinematic tour de force that blurs the lines between dreams and reality, leaving audiences questioning their own perceptions."
    },
    {
        id: 3,
        postId: 2,
        email: "lisa.brown42@yahoo.com",
        body: "Inception is a mind-bending masterpiece that challenges reality and captivates with its intricate plot and stunning visuals."
    },
    {
        id: 3,
        postId: 3,
        email: "alex.wilson89@gmail.com",
        body: "With its ingenious storytelling and mesmerizing performances, Inception is a thought-provoking and visually stunning film that keeps you on the edge of your seat."
    },
];
document.addEventListener("DOMContentLoaded", function () {
    var commentsContainer = document.getElementById("comments");
    if (commentsContainer) {
        // Get the page number from the URL parameters (assuming the URL is like "index.html?page=1")
        var urlParams = new URLSearchParams(window.location.search);
        var currentPage = parseInt(urlParams.get("id") || "1");
        // Number of comments to show per page
        var commentsPerPage = 3;
        // Calculate the start and end index for comments on the current page
        var startIndex = (currentPage - 1) * commentsPerPage;
        var endIndex = startIndex + commentsPerPage;
        var commentsOnPage = comments.slice(startIndex, endIndex);
        commentsOnPage.forEach(function (comment) {
            var commentElement = createCommentElement(comment);
            commentsContainer.appendChild(commentElement);
        });
    }
});
function createCommentElement(comment) {
    var commentParagraph = document.createElement("p");
    commentParagraph.id = "userComments";
    var userIdSpan = document.createElement("span");
    userIdSpan.textContent = "User_".concat(comment.postId, ": ");
    userIdSpan.style.color = "#3A4F9A";
    userIdSpan.style.fontWeight = "600";
    userIdSpan.style.fontSize = "16px";
    var emailSpan = document.createElement("span");
    emailSpan.textContent = "".concat(comment.email, ": ");
    emailSpan.style.color = "#3A4F9A";
    emailSpan.style.fontWeight = "600";
    emailSpan.style.fontSize = "16px";
    var userComments = document.createElement("span");
    userComments.textContent = "".concat(comment.body);
    userComments.style.color = "#575757";
    userComments.style.fontSize = "16px";
    var commentLine = document.createElement("hr");
    commentLine.classList.add("line");
    commentParagraph.appendChild(userIdSpan);
    commentParagraph.appendChild(emailSpan);
    commentParagraph.appendChild(userComments);
    commentParagraph.appendChild(commentLine);
    return commentParagraph;
}
