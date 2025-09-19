/**
 * @jest-environment jsdom
 */


const { game, newGame, showScore } = require("../game");


beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.body.innerHTML = fileContents;
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("playMoves key exists", () => {
        expect("playMoves" in game).toBe(true);
    });

    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });

    test("choices contain correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3","button4"]);
    });

});

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        game.playMoves = ["button1", "button2"];
        game.currentGame = ["button1", "button2"];
        document.getElementById("score").innerText = "42";
        newGame();

    });
    test("should set score to zero", () => {
        expect(game.score).toEqual(0); // Rest the score to zero
    });
    test("should clear the player moves array", () => {
        expect(game.playMoves).toEqual([]); // Clear the playerMoves
    });
    test(" should clear the current game array", () => {
        expect(game.currentGame).toEqual([]); // Clear the currentGame array
        //Could be writen like; expect(game.currentGame.length).toBe(0);
    });
    test("should display 0 for the elment with id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
});