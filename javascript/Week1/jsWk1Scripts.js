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

	console.log("There are "+countNewChoices+" choices to add");

	for (var i = 0; i < countNewChoices; i++) {
		var newPick = document.createElement("a");
		newPick.name = newChoices[i][0];

		var theCommand = newChoices[i][0];
		newPick.setAttribute("onclick", takeAction(theCommand));

		//newPick.onclick = function(){ takeAction(theCommand); }

		newPick.text = newChoices[i][1];

		console.log("The new pick name is "+newPick.name);

		actionDropdown.appendChild(newPick);
	};

}

// This function handles all of the stories. The functions above handle changing the text and choices on the screen
function takeAction(action) {
	console.log("the action is "+action);

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
				['city', "Visit a city"]]);
			return;

		case "appleTree":
			// The apple tree adventure
			setImage("Week1Images/haroldRoad.png");
			setNarrative("Harold Harold goes on the apple tree adventure.");
			setQuestion("What adventure does he choose next?")
			setChoices([
				['boat', "Draw a boat"],
				['mountain', "Climb a mountain"],
				['city', "Visit a city"]]);
				['chooseAdventure', "Return to the road"]
			return;

		case "boat":
			// The boat adventure
			setImage("Week1Images/haroldRoad.png");
			setNarrative("Harold continued on his adventure, taking his big purple crayon with him.<br/><br/>But he didn't seem to be getting anywhere on the long straight path.<br/><br/>So he left the path to find an adventure. And the moon went with him.");
			setQuestion("What adventure does he choose?")
			setChoices([
				['appleTree', "Visit the apple tree"], 
				['boat', "Draw a boat"],
				['picnic', "Have a picnic"],
				['mountain', "Climb a mountain"],
				['balloon', "Climb into a hot air baloon"],
				['city', "Visit a city"]]);
			return;
	}

}
