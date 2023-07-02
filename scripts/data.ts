interface propsCard {
  id: number;
  imageUrl: string;
  title: string;
  body: string;
  bodyOpen:string;
}

const cards: propsCard[] = [
  {
    id: 1,
    imageUrl: "../img/image_1.svg",
    title: "Spider-Man: Across the Spider-Verse",
    body: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence...",
    bodyOpen: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero."
  },
  {
    id: 2,
    imageUrl: "../img/creed.svg",
    title: "Creed",
    body: "Adonis Johnson is the son of the famous boxing champion Apollo Creed, who died in a boxing match in Rocky IV (1985). Adonis wasn't born until after his father's death and wants...",
    bodyOpen: "Adonis Johnson is the son of the famous boxing champion Apollo Creed, who died in a boxing match in Rocky IV (1985). Adonis wasn't born until after his father's death and wants to follow his fathers footsteps in boxing. He seeks a mentor who is the former heavyweight boxing champion and former friend of Apollo Creed, the retired Rocky Balboa.",
  },
  {
    id: 3,
    imageUrl: "../img/Inception.svg",
    title: "Inception",
    body: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state...",
    bodyOpen: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved."
  },
];


function createCardElement(card: propsCard): HTMLElement {

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const cardLink = document.createElement("a");
  cardLink.style.textDecoration = "none";
  cardLink.addEventListener("click", () => {
    window.location.href = `pages/pages.html?id=${card.id}`;
  });

  const cardImg = document.createElement("img");
  cardImg.src = card.imageUrl;
  cardImg.width = 309;
  
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

  const expandLink = document.createElement("a");
  expandLink.classList.add("card-expand");
  expandLink.href = "";
  expandLink.textContent = "Expand...";
  
  cardLink.appendChild(cardImg);
  cardBody.appendChild(expandLink);
  cardLink.appendChild(cardBody);
  cardDiv.appendChild(cardLink);

  return cardDiv;
}


document.addEventListener("DOMContentLoaded", () => {
  const cardSection = document.getElementById("cardsContainer");
  if (cardSection) {
    cards.forEach((card) => {             
      const cardElement = createCardElement(card);
      cardSection.appendChild(cardElement);
    });
  }
  // Retorna ao para ao id por meio da função geturlparameter.
  const cardId = getUrlParameter("id");
  //Faz a verificação se o parâmetro definido foi encontrado.
  if (cardId) {
    // Procura o objeto no array 'cards' cujo ID corresponde ao valor do parâmetro "id".
    // A função find() retorna o primeiro elemento que satisfaça a condição de busca.
    const selectedCard = cards.find((card) => card.id.toString() === cardId);
    // Verifica se o cartão foi encontrado com base no ID fornecido.
    if (selectedCard) {
      // Se o cartão foi encontrado, chama a função displayPresentation com o cartão selecionado como argumento.
      displayPresentation(selectedCard);
    }
  }
  
});

// Função que obtém o valor de um parâmetro na URL com base no seu nome.
// A função recebe o nome do parâmetro como argumento e retorna uma string contendo o valor do parâmetro,
// ou retorna null se o parâmetro não for encontrado na URL.
function getUrlParameter(name: string): string | null {
  // Substitui os colchetes "[" e "]" por "\\[" e "\\]" respectivamente na string 'name'.
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  // Cria uma expressão regular para encontrar o parâmetro na URL.
  // A expressão regular procura por um caractere "?", "&" seguido do nome do parâmetro,
  // seguido por "=", seguido de qualquer sequência de caracteres que não inclua "&" ou "#".
  const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  // Executa a expressão regular na propriedade 'search' do objeto 'location',
  // que contém a parte da URL após o caractere "?".
  const results = regex.exec(location.search);
   // Verifica se a execução da expressão regular retornou null
   // Se houver resultados, retorna o valor do parâmetro decodificado.
    // O valor do parâmetro é armazenado na posição [1] do array 'results'.
    // Também substitui os sinais de "+" por espaços vazios na string decodificada.
  return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function displayPresentation(card: propsCard): void {
  const displayImg = document.getElementById("displayImg") as HTMLImageElement;
  const displayTitle = document.getElementById("displayTitle") as HTMLHeadingElement;
  const displayBody = document.getElementById("displayParagraph") as HTMLParagraphElement;

  if (displayImg) {
    displayImg.src = card.imageUrl;
  }

  if (displayTitle) {
    displayTitle.textContent = card.title;
  }

  if (displayBody) {
    displayBody.textContent = card.bodyOpen;
  }
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

function createCommentElement(comment) {
  
  const commentParagraph: HTMLParagraphElement = document.createElement("p");

  const userId: HTMLSpanElement = document.createElement("span");
  userId.textContent = `User_${comment.postId}: `
  userId.style.color = "#3A4F9A"; 
  userId.style.fontWeight = "600";
  userId.style.fontSize = "14px";
  userId.style.lineHeight = "20px";
  userId.style.letterSpacing = "1.3px";

  const emailComment: HTMLSpanElement = document.createElement("span");
  emailComment.textContent = `${comment.email}: `;
  emailComment.style.color = "#3A4F9A";
  emailComment.style.fontWeight = "600";
  emailComment.style.fontSize = "14px";
  emailComment.style.lineHeight = "20px";
  emailComment.style.letterSpacing = "1.3px";

  const userComments: HTMLSpanElement = document.createElement("span");
  userComments.textContent = `${comment.body}`;
  userComments.style.color = "#575757" ;
  userComments.style.fontSize = "14px";
  userComments.style.lineHeight = "20px";
  userComments.style.letterSpacing = "1.3px";

  const commentLine = document.createElement("hr");
  commentLine.classList.add("line");

  commentParagraph.appendChild(userId);
  commentParagraph.appendChild(emailComment);
  commentParagraph.appendChild(userComments);
  commentParagraph.appendChild(commentLine);

  return commentParagraph;
}

document.addEventListener("DOMContentLoaded", () => {
  const commentsContainer = document.getElementById("comments");
  if (commentsContainer) {
     // Cria um objeto URLSearchParams com base na string de consulta (query string) da URL atual.
    const urlParams = new URLSearchParams(window.location.search);
     // Obtém o valor do parâmetro "id" da URL e converte para um número inteiro.
    // Se o parâmetro "id" não estiver presente, assume o valor 1.
    const currentPage = parseInt(urlParams.get("id") || "1");
    // Comentários por página.
    const commentsPerPage = 3;
    // Calcula o índice de início e o índice de fim dos comentários na página atual.
    const startIndex = (currentPage - 1) * commentsPerPage;
    const endIndex = startIndex + commentsPerPage;
     // Seleciona os comentários correspondentes à página atual com base nos índices calculados.
    const commentsOnPage = comments.slice(startIndex, endIndex);

    commentsOnPage.forEach((comment) => {
      const commentElement = createCommentElement(comment);
      commentsContainer.appendChild(commentElement);
    });
  }
})