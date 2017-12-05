// When the facButton is clicked...
$("#factButton").on("click", function() {
	// We generate a random number
	var number = Math.floor((Math.random() * computerChoices.length));
	// We display the fact from the booFactArray that is in the random position we just generated
	$("#factText").text(computerChoices[number])
})

// Vocab Array
var computerChoices = ["clairvoyant", "aesthetic", "amicable", "asylum", "benevolent", "camaraderie",
"circuitous", "demagogue", "empathy", "ephemeral", "fortuitous", "hackneyed"; "hypothesis", "impetuous",
"integrity", "nonochalant", "opulent", "ostentatious", "procrastinate", "querulous", "resilient", "spontaneity",
"sagacity"]


