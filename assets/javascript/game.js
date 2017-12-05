

$("#factButton").on("click", function() {
  var number = Math.floor(Math.random() * computerChoices.length);
  $("#factText").text(computerChoices[number])

})

var computerChoices = ["clairvoyant", "aesthetic", "amicable", "asylum", "benevolent", "camaraderie",
"circuitous", "demagogue", "empathy", "ephemeral", "fortuitous", "hackneyed"; "hypothesis", "impetuous",
"integrity", "nonochalant", "opulent", "ostentatious", "procrastinate", "querulous", "resilient", "spontaneity",
"sagacity"]

while (remainingLetters > 0) {

  // Game code goes here

  // Show the player their progress

  // Take input from the player

  // Update answerArray and remainingLetters for every correct guess

}


var answerArray = [];

for (var i = 0; i < word.length; i++) {

    answerArray[i] = "_";

  }

  var remainingLetters = word.length;