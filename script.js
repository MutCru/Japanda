const startButton = document.getElementById("startButton");
const againButton = document.getElementById("againButton");
let isFlipping = false;

const data = {
  hiragana: [
    {
      caractere: "あ",
      nom: "あ",
      prononciation: "a",
    },
    {
      caractere: "い",
      nom: "い",
      prononciation: "i",
    },
    {
      caractere: "う",
      nom: "う",
      prononciation: "u",
    },
    {
      caractere: "え",
      nom: "え",
      prononciation: "e",
    },
    {
      caractere: "お",
      nom: "お",
      prononciation: "o",
    },
    {
      caractere: "か",
      nom: "か",
      prononciation: "ka",
    },
    {
      caractere: "き",
      nom: "き",
      prononciation: "ki",
    },
    {
      caractere: "く",
      nom: "く",
      prononciation: "ku",
    },
    {
      caractere: "け",
      nom: "け",
      prononciation: "ke",
    },
    {
      caractere: "こ",
      nom: "こ",
      prononciation: "ko",
    },
    {
      caractere: "さ",
      nom: "さ",
      prononciation: "sa",
    },
    {
      caractere: "し",
      nom: "し",
      prononciation: "shi",
    },
    {
      caractere: "す",
      nom: "す",
      prononciation: "su",
    },
    {
      caractere: "せ",
      nom: "せ",
      prononciation: "se",
    },
    {
      caractere: "そ",
      nom: "そ",
      prononciation: "so",
    },
    {
      caractere: "た",
      nom: "た",
      prononciation: "ta",
    },
    {
      caractere: "ち",
      nom: "ち",
      prononciation: "chi",
    },
    {
      caractere: "つ",
      nom: "つ",
      prononciation: "tsu",
    },
    {
      caractere: "て",
      nom: "て",
      prononciation: "te",
    },
    {
      caractere: "と",
      nom: "と",
      prononciation: "to",
    },
    {
      caractere: "な",
      nom: "な",
      prononciation: "na",
    },
    {
      caractere: "に",
      nom: "に",
      prononciation: "ni",
    },
    {
      caractere: "ぬ",
      nom: "ぬ",
      prononciation: "nu",
    },
    {
      caractere: "ね",
      nom: "ね",
      prononciation: "ne",
    },
    {
      caractere: "の",
      nom: "の",
      prononciation: "no",
    },
    {
      caractere: "は",
      nom: "は",
      prononciation: "ha",
    },
    {
      caractere: "ひ",
      nom: "ひ",
      prononciation: "hi",
    },
    {
      caractere: "ふ",
      nom: "ふ",
      prononciation: "fu",
    },
    {
      caractere: "へ",
      nom: "へ",
      prononciation: "he",
    },
    {
      caractere: "ほ",
      nom: "ほ",
      prononciation: "ho",
    },
    {
      caractere: "ま",
      nom: "ま",
      prononciation: "ma",
    },
    {
      caractere: "み",
      nom: "み",
      prononciation: "mi",
    },
    {
      caractere: "む",
      nom: "む",
      prononciation: "mu",
    },
    {
      caractere: "め",
      nom: "め",
      prononciation: "me",
    },
    {
      caractere: "も",
      nom: "も",
      prononciation: "mo",
    },
    {
      caractere: "や",
      nom: "や",
      prononciation: "ya",
    },
    {
      caractere: "ゆ",
      nom: "ゆ",
      prononciation: "yu",
    },
    {
      caractere: "よ",
      nom: "よ",
      prononciation: "yo",
    },
  ],
  katakana: [
    {
      caractere: "ア",
      nom: "ア",
      prononciation: "a",
    },
    {
      caractere: "イ",
      nom: "イ",
      prononciation: "i",
    },
    {
      caractere: "ウ",
      nom: "ウ",
      prononciation: "u",
    },
    {
      caractere: "エ",
      nom: "エ",
      prononciation: "e",
    },
    {
      caractere: "オ",
      nom: "オ",
      prononciation: "o",
    },
    {
      caractere: "カ",
      nom: "カ",
      prononciation: "ka",
    },
    {
      caractere: "キ",
      nom: "キ",
      prononciation: "ki",
    },
    {
      caractere: "ク",
      nom: "ク",
      prononciation: "ku",
    },
    {
      caractere: "ケ",
      nom: "ケ",
      prononciation: "ke",
    },
    {
      caractere: "コ",
      nom: "コ",
      prononciation: "ko",
    },
    {
      caractere: "サ",
      nom: "サ",
      prononciation: "sa",
    },
    {
      caractere: "シ",
      nom: "シ",
      prononciation: "shi",
    },
    {
      caractere: "ス",
      nom: "ス",
      prononciation: "su",
    },
    {
      caractere: "セ",
      nom: "セ",
      prononciation: "se",
    },
    {
      caractere: "ソ",
      nom: "ソ",
      prononciation: "so",
    },
    {
      caractere: "タ",
      nom: "タ",
      prononciation: "ta",
    },
    {
      caractere: "チ",
      nom: "チ",
      prononciation: "chi",
    },
    {
      caractere: "ツ",
      nom: "ツ",
      prononciation: "tsu",
    },
    {
      caractere: "テ",
      nom: "テ",
      prononciation: "te",
    },
    {
      caractere: "ト",
      nom: "ト",
      prononciation: "to",
    },
    {
      caractere: "ナ",
      nom: "ナ",
      prononciation: "na",
    },
    {
      caractere: "ニ",
      nom: "ニ",
      prononciation: "ni",
    },
    {
      caractere: "ヌ",
      nom: "ヌ",
      prononciation: "nu",
    },
    {
      caractere: "ネ",
      nom: "ネ",
      prononciation: "ne",
    },
    {
      caractere: "ノ",
      nom: "ノ",
      prononciation: "no",
    },
    {
      caractere: "ハ",
      nom: "ハ",
      prononciation: "ha",
    },
    {
      caractere: "ヒ",
      nom: "ヒ",
      prononciation: "hi",
    },
    {
      caractere: "フ",
      nom: "フ",
      prononciation: "fu",
    },
    {
      caractere: "ヘ",
      nom: "ヘ",
      prononciation: "he",
    },
    {
      caractere: "ホ",
      nom: "ホ",
      prononciation: "ho",
    },
    {
      caractere: "マ",
      nom: "マ",
      prononciation: "ma",
    },
    {
      caractere: "ミ",
      nom: "ミ",
      prononciation: "mi",
    },
    {
      caractere: "ム",
      nom: "ム",
      prononciation: "mu",
    },
    {
      caractere: "メ",
      nom: "メ",
      prononciation: "me",
    },
    {
      caractere: "モ",
      nom: "モ",
      prononciation: "mo",
    },
    {
      caractere: "ヤ",
      nom: "ヤ",
      prononciation: "ya",
    },
    {
      caractere: "ユ",
      nom: "ユ",
      prononciation: "yu",
    },
    {
      caractere: "ヨ",
      nom: "ヨ",
      prononciation: "yo",
    },
  ],
};

// Function to check if all pairs have been found
function checkWin() {
  const allTiles = document.querySelectorAll(".tile");
  const matchedTiles = document.querySelectorAll(".tile.matched");

  // If all tiles have been matched
  if (allTiles.length === matchedTiles.length) {
    alert("Congratulations! You found all the pairs!");
    againButton.classList.toggle("hidden"); // Show the 'Play Again' button
    againButton.textContent = "Play Again";
  }
}

// Event listener for the 'Play Again' button
againButton.addEventListener("click", () => {
  const gameArea = document.getElementById("gameArea");
  gameArea.innerHTML = ""; // Clear the game area
  createPairGame(); // Start a new game
  againButton.classList.toggle("hidden"); // Hide the 'Play Again' button
});

async function createPairGame() {
  // const response = await fetch("data.json");
  // const data = await response.json();
  let characters = [];

  // Merge the hiragana and katakana arrays into one array
  characters = [...data.hiragana, ...data.katakana];
  const selectedCharacters = [];

  // Select 10 random characters
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    selectedCharacters.push(characters[randomIndex]);
  }

  // Duplicate the selected characters to create pairs
  const pairs = [...selectedCharacters, ...selectedCharacters];

  // Shuffle the order of the pairs
  pairs.sort(() => Math.random() - 0.5);

  // Create the tiles
  const gameArea = document.getElementById("gameArea");
  pairs.forEach((character, index) => {
    const tile = document.createElement("div");
    tile.textContent = ""; // Don't show the character initially
    tile.dataset.character = character.caractere; // Store the character in a data attribute
    tile.className = "tile";
    gameArea.appendChild(tile);

    // Add an event listener to the tile
    tile.addEventListener("click", function () {
      // If the game is not flipping tiles and the tile is not already flipped
      if (!isFlipping && this.textContent === "") {
        this.textContent = this.dataset.character; // Show the character

        // Check if there's another flipped tile
        const flippedTiles = document.querySelectorAll(
          ".tile:not(.matched):not(:empty)"
        );
        if (flippedTiles.length === 2) {
          isFlipping = true; // The game is now flipping tiles
          if (flippedTiles[0].textContent === flippedTiles[1].textContent) {
            // If the characters match, mark the tiles as matched
            flippedTiles.forEach((tile) => tile.classList.add("matched"));
            isFlipping = false; // The game is no longer flipping tiles
          } else {
            // If the characters don't match, flip the tiles back after a delay
            setTimeout(() => {
              flippedTiles.forEach((tile) => (tile.textContent = ""));
              isFlipping = false; // The game is no longer flipping tiles
            }, 500);
          }
          checkWin(); // Check if the player has won
        }
      }
    });
  });

  startButton.style.display = "none"; // Hide the start button
}

// Event listener for the start button
startButton.addEventListener("click", () => {
  createPairGame(); // Start the game
});
