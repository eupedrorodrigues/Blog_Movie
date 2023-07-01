interface Card {
  id: number;
  imageUrl: string;
  title: string;
  body: string;
}

const cards: Card[] = [
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

document.addEventListener("DOMContentLoaded", () => {
  const cardSection = document.getElementById("cardsContainer");
  if (cardSection) {
    cards.forEach((card) => {
      const cardElement = createCardElement(card);
      cardSection.appendChild(cardElement);
    });
  }

  const cardId = getUrlParameter("id");
  if (cardId) {
    const selectedCard = cards.find((card) => card.id.toString() === cardId);
    if (selectedCard) {
      displayPresentation(selectedCard);
    }
  }
  
});

function getUrlParameter(name: string): string | null {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  const results = regex.exec(location.search);
  return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function displayPresentation(card: Card): void {
  const cardImage = document.getElementById("displayImg") as HTMLImageElement;
  const cardTitle = document.getElementById("displayTitle") as HTMLHeadingElement;
  const cardBody = document.getElementById("displayParagrafy") as HTMLParagraphElement;
  
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


function createCardElement(card: Card): HTMLElement {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const cardLink = document.createElement("a");
  cardLink.style.textDecoration = "none";
  cardLink.addEventListener("click", () => {
    window.location.href = `pages/pages.html?id=${card.id}&img=${card.imageUrl}&title=${card.title}&body=${card.body}`;
  });

  const cardImage = document.createElement("img");
  cardImage.classList.add("card-img-top");
  cardImage.src = card.imageUrl;
  cardImage.width = 309;
  cardLink.appendChild(cardImage);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h4");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = card.title;
  cardBody.appendChild(cardTitle);

  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent = card.body;
  cardBody.appendChild(cardText);

  const cardExpand = document.createElement("a");
  cardExpand.classList.add("card-expand");
  cardExpand.href = "";
  cardExpand.textContent = "Expand...";
  cardBody.appendChild(cardExpand);

  cardLink.appendChild(cardBody);
  cardDiv.appendChild(cardLink);

  return cardDiv;
}


interface userComment {
  id: number;
  postId: number;
  email: string;
  body: string;
}

const comments: userComment[] = [
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

document.addEventListener("DOMContentLoaded", () => {
  const commentsContainer = document.getElementById("comments");
  if (commentsContainer) {
    comments.forEach((comment) => {
      const commentElement = createCommentElement(comment);
      commentsContainer.appendChild(commentElement);
    });
  }
});

function createCommentElement(comment) {
  const commentParagraph = document.createElement("p");
  commentParagraph.classList.add("userComments");

  const commentLine = document.createElement("hr");
  commentLine.classList.add("line");

  commentParagraph.textContent = `User_${comment.id}: ${comment.email}: ${comment.body}`;
  commentParagraph.appendChild(commentLine)
  return commentParagraph;
}
