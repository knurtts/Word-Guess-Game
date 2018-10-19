var game = {
    wins: 0,
    losses: 0,
    guesses: 20,
    guessedLetters: [],
    bossName: "",
    gameStart: false,
    bosses: ["quelaag", "artorias", "manus", "nito", "gwyn", "seath", "priscilla", "smough", "ornstein", "gwyndolin", "sif", "pinwheel",],

    
    badGuess: function() {
        this.guesses = this.guesses - 1;
        this.guessedLetters = key.push(guessedLetters);
    },

    start: function() {
        this.gameStart = true;
        var underscore = ".";
        var soulsBoss = document.getElementById("souls-boss");
        this.bossName = this.bosses[Math.floor(Math.random() * 12)];
        for (i = 0; i < this.bossName.length; i++) {
            //var wordLength = "_ ";
            underscore += " _ ";
            //underscore.textContent = wordLength;
            //revisit this. pressing enter multiple times just adds on to end of word
       }
       console.log(underscore);
       document.querySelector("#souls-boss").innerHTML = underscore;
       
    },


};

document.onload = game.start();

    document.onkeyup = function(event) {
        var keyGuess = event.keyCode;
        var keySearch = game.bossName.includes(keyGuess);
        if (keySearch) {
            alert("Good guess!");

        } else {
            alert("Bad guess!");
            game.guesses--;
        }
        //if (keyGuess === 13) {
          //  game.start();
        //}
    }






