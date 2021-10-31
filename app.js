console.log("Game has begun");

let ting = new Audio("ting.mp3");
let audioGameOver = new Audio("gameover.mp3");
let isGameOver = false;

//change turn function
let turn = "X";

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
};

//function to check win
const checkWin = function () {
    let boxtext = document.querySelectorAll(".boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    wins.forEach((e) => {
        if (
            boxtext[e[0]].textContent === boxtext[e[1]].textContent &&
            boxtext[e[2]].textContent === boxtext[e[1]].textContent &&
            boxtext[e[0]].textContent !== ""
        ) {
            console.log("hello");
            document.querySelector(".turn").innerText =
                boxtext[e[0]].textContent + " has Won !!";
            isGameOver = true;
            document
                .querySelector(".imgContainer")
                .querySelector("img").style.display = "block";
            audioGameOver.play();
        }
    });
};

//game logic
let boxes = document.querySelectorAll(".box");
for (let box of boxes) {
    let boxtext = box.querySelector(".boxtext");
    box.addEventListener("click", () => {
        if (boxtext.textContent === "") {
            boxtext.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            if (!isGameOver) {
                document.querySelector(".turn").innerText = "Now Turn: " + turn;
            }
        }
    });
}

//reset function
const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    for (let text of boxtexts) {
        text.innerText = "";
    }
    turn = "X";
    isGameOver = false;
    document.querySelector(".turn").innerText = "Now turn: " + turn;
    document.querySelector(".imgContainer").querySelector("img").style.display =
        "none";
});
