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
        this.guessedLetters = [];
        this.guesses = 20;
        var soulsBoss = document.getElementById("souls-boss");
        this.bossName = this.bosses[Math.floor(Math.random() * 12)];
        var letter = game.guesses.toString();

        document.getElementById("remainingGuess").innerHTML = letter;

        document.getElementById("usedLetters").textContent = game.guessedLetters;

        for (i = 0; i < this.bossName.length; i++) {
            underscore += "_ ";
        }

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
                }
            };
            if (keyGuess != game.guessedLetters[i]) {
                game.guessedLetters.push(keyGuess);
                console.log(game.guessedLetters);
                document.getElementById("usedLetters").textContent = game.guessedLetters;
            }

            //These lines write the remaining guesses to the page
            game.guesses--;
            var letter = game.guesses.toString();
            document.getElementById("remainingGuess").innerHTML = letter;

            if (game.guesses === 0) {
                alert("YOU DIED");
                game.losses++;
                var loser = game.losses.toString();
                document.getElementById("loss-text").innerHTML = "Losses: " + loser;
                game.restart();
            }

            if (bossChar + "" == lineArray) {
                alert("VICTORY")
                
            }

        }
    },

    restart: function () {
        this.initialize();
    },

    invalidKey: function (keyGuess) {
        var test = document.getElementById("usedLetters");
        test.textContent = keyGuess;
        //test.appendChild(test);
    },

};

document.onkeyup = function (event) {

    game.initialize();

};

