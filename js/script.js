window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game; // added

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game(); // added

    game.start(); // added
  }

  // Function that handles keydown event
  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    // Check if the pressed key is in the possibleKeystrokes array
    if (possibleKeystrokes.includes(key)) {
      // Update player's directionX and directionY based on the key pressed
      switch (key) {
        case "ArrowLeft":
          event.preventDefault();
          game.player.directionX = -1;
          break;
        case "ArrowUp":
          event.preventDefault();
          game.player.directionY = -1;
          break;
        case "ArrowRight":
          event.preventDefault();
          game.player.directionX = 1;
          break;
        case "ArrowDown":
          event.preventDefault();
          game.player.directionY = 1;
          break;
      }
    }
  }

  function handleKeyup(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];
    // Check if the pressed key is in the possibleKeystrokes array
    if (possibleKeystrokes.includes(key)) {
      // Update player's directionX and directionY based on the key pressed
      switch (key) {
        case "ArrowLeft":
          event.preventDefault();
          game.player.directionX = 0;
          break;
        case "ArrowUp":
          event.preventDefault();
          game.player.directionY = 0;
          break;
        case "ArrowRight":
          event.preventDefault();
          game.player.directionX = 0;
          break;
        case "ArrowDown":
          event.preventDefault();
          game.player.directionY = 0;
          break;
      }
    }
  }

  // Add the handleKeydown function as an event listener for the keydown event
  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("keyup", handleKeyup);

  // Add an event listener to the restart button
  restartButton.addEventListener("click", function () {
    // Call the restartGame function when the button is clicked
    restartGame();
  });

  // The function that reloads the page to start a new game
  function restartGame() {
    location.reload();
  }
};
