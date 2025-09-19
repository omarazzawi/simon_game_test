beforeAll (() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("indec.html", "utf-8");
    document.body.innerHTML = fileContents;
});

describe("game object contains correct keys", () => {
    test("scire key exists" ,() => {
        excpect("score" in game).toBe(true);
    });
});
