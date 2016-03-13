// --------------------------------------
// Laura Paglione (MENTOR)            
// NanoHacker Academy                 
// Spring 2016: Got Game (JavaScript) 
// March 6, 2016                      
// --------------------------------------

// Scripts for the adventure game

// the number of anchor tags in the document
// NOTE: Assumes that all of the choices are anchor tags, and no
// other objects are...

// Script to change the image
function setImage(newImage) {
	document.getElementById("story-image").src = newImage;
}

// script to change the narrative
function setNarrative(newNarrative) {
	document.getElementById('story-narrative').innerHTML = newNarrative;
}

function setQuestion(newQuestion) {
	document.getElementById('story-question').innerHTML = newQuestion;
}

function setChoices(newChoices) {
	// Get the choice dropdown
	var actionDropdown = document.getElementById("theChoices");

	// Clear the previous choices (ASSUMES all choices are at the end of the doc)
	while (actionDropdown.firstChild) {
		actionDropdown.removeChild(actionDropdown.firstChild);
	}

	// Fill the dropdown with the menu picks from newChoices
	var countNewChoices = newChoices.length;

	var x = 0;

	for (var i = 0; i < countNewChoices; i++) {
		var newPick = document.createElement("a");
		var newAction = newChoices[i][0];

		//set the atributes of new menu pick
		newPick.name = newAction;
		$(newPick).data('action', newAction);
		newPick.style.cursor = "pointer";
		newPick.setAttribute("onclick", "takeAction(this)");

		//set what the menu pick will say
		newPick.text = newChoices[i][1];

		//add it to the menu
		actionDropdown.appendChild(newPick);
	};

}

// This function handles all of the stories. The functions above handle changing the text and choices on the screen
function takeAction(item) {
	//Get the action from the item selected
	var action = $(item).data('action');

	switch (action) {
		case "finish":
			//quit the story - display the final screen (Harold goes to bed)
			setImage("Week1Images/haroldBed.png");
			setNarrative("Harold finally felt tired, and wished he was in his room and in bed.<br/><br/>Then, suddently, Harold remembered. He remembered where his bedroom window was, when there was a moon. It was always right around the moon.<br></br>And then Harold made his bed. He got in it and drew up the covers.<br/><br/>The purple crayon dropped on the floor. And Harold dopped off to sleep.");
			setQuestion("Thanks for playing!");
			setChoices([""])
			$("button#take-action").hide();
			return;

		case "chooseAdventure":
			//present all of the adventures that one can take
			setImage("Week1Images/haroldRoad.png");
			setNarrative("Harold continued on his adventure, taking his big purple crayon with him.<br/><br/>But he didn't seem to be getting anywhere on the long straight path.<br/><br/>So he left the path to find an adventure. And the moon went with him.");
			setQuestion("What adventure does he choose?")
			setChoices([
				['appleTree', "Visit the apple tree"], 
				['boat', "Draw a boat"],
				['picnic', "Have a picnic"],
				['mountain', "Climb a mountain"],
				['balloon', "Climb into a hot air baloon"],
				['city', "Visit a city"],
				['finish', "I'm tired. Go to bed"]]);
			return;

		case "appleTree":
			// The apple tree adventure
			setImage("Week1Images/haroldApple.png");
			setNarrative("Harold Harold goes on the apple tree adventure.");
			setQuestion("What adventure does he choose next?")
			setChoices([
				['boat', "Draw a boat"],
				['mountain', "Climb a mountain"],
				['city', "Visit a city"],
				['chooseAdventure', "Return to the road"],
				['finish', "I'm tired. Go to bed"]]);
			return;

		case "boat":
			// The boat adventure
			setImage("Week1Images/haroldBoat.png");
			setNarrative("Harold goes on the boat adventure");
			setQuestion("What adventure does he choose next?")
			setChoices([
				['picnic', "Have a picnic"],
				['mountain', "Climb a mountain"],
				['balloon', "Climb into a hot air baloon"],
				['chooseAdventure', "Return to the road"],
				['finish', "I'm tired. Go to bed"]]);
			return;

		case "picnic":
			// The picnic adventure
			setImage("Week1Images/haroldPicnic.png");
			setNarrative("Harold goes on the picnic adventure");
			setQuestion("What adventure does he choose next?")
			setChoices([
				['boat', "Draw a boat"],
				['mountain', "Climb a mountain"],
				['balloon', "Climb into a hot air baloon"],
				['chooseAdventure', "Return to the road"],
				['finish', "I'm tired. Go to bed"]]);
			return;

		case "mountain":
			// The mountain adventure
			setImage("Week1Images/haroldMountain.png");
			setNarrative("Harold goes on the mountain adventure");
			setQuestion("What adventure does he choose next?")
			setChoices([
				['appleTree', "Visit the apple tree"], 
				['city', "Visit a city"],
				['balloon', "Climb into a hot air baloon"],
				['chooseAdventure', "Return to the road"],
				['finish', "I'm tired. Go to bed"]]);
			return;

		case "balloon":
			// The balloon adventure
			setImage("Week1Images/haroldBalloon.png");
			setNarrative("Harold goes on the balloon adventure");
			setQuestion("What adventure does he choose next?")
			setChoices([
				['appleTree', "Visit the apple tree"], 
				['city', "Visit a city"],
				['boat', "Draw a boat"],
				['chooseAdventure', "Return to the road"],
				['finish', "I'm tired. Go to bed"]]);
			return;

		case "city":
			// The city adventure
			setImage("Week1Images/haroldCity.png");
			setNarrative("Harold goes on the city adventure");
			setQuestion("What adventure does he choose next?")
			setChoices([
				['appleTree', "Visit the apple tree"], 
				['picnic', "Have a picnic"],
				['boat', "Draw a boat"],
				['chooseAdventure', "Return to the road"],
				['finish', "I'm tired. Go to bed"]]);
			return;
	}

}
