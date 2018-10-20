var game = {
    wins: 0,
    losses: 0,
    guesses: 20,
    guessedLetters: [],
    bossName: "",
    gameStart: false,
    bosses: ["quelaag", "artorias", "manus", "nito", "gwyn", "seath", "priscilla", "smough", "ornstein", "gwyndolin", "sif", "pinwheel", ],


    badGuess: function () {
        this.guesses = this.guesses - 1;
        this.guessedLetters = key.push(guessedLetters);
    },

    initialize: function () {
        this.gameStart = true;
        var underscore = "";
        var soulsBoss = document.getElementById("souls-boss");
        this.bossName = this.bosses[Math.floor(Math.random() * 12)];
        for (i = 0; i < this.bossName.length; i++) {
            underscore += "_ ";
        }

        //setTimeout is a placeholder to make this method work for now.
        setTimeout(() => {
            document.querySelector("#souls-boss").innerHTML = underscore;
        }, 1);

        console.log(this.bossName);

        var bossChar = this.bossName.split('');
        console.log(bossChar);

        var lineArray = underscore.split(' ');
        console.log(lineArray);

        document.onkeyup = function (event) {
            var keyGuess = event.key;
            for (i = 0; i < bossChar.length; i++) {
                if (keyGuess === bossChar[i]) {
                    lineArray[i] = keyGuess;
                    document.querySelector("#souls-boss").innerHTML = lineArray.join(' ');
                } else {
                    this.guesses--;
                    document.querySelector("#usedLetters").innerHTML = appendChild.keyGuess;
                }
            }

        }
    },


    /*
        invalidKey: function(keyGuess) {
            this.guesses--;
            var bossChar = this.bossName.split(', ');
            console.log(bossChar);
            document.getElementById("remainingGuess").textContent = this.guesses;
            var badLetter = document.getElementById("usedLetters");
            badLetter.textContent = keyGuess;
        },*/

};

document.onkeyup = function (event) {

    game.initialize();

};