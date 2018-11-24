


var lang_ger = {
	lang_skelltext_1:       {type:"innerHTML", text:`
Manchmal, wenn sich sonst niemand dafür bereit erklärt, braucht es einen alten, wiederauferstandenen
Helden um die Welt zu retten! Vernichte deine Gegner und mach dir ihr Innerstes zu Nutze - wortwörtlich,
denn mit den Körperteilen und Waffen deiner Gegner kannst du Skippy aufrüsten!
<br><br>
In diesem rechtwinkligen, actionbepackten Papp-Abenteuer hilfst du Skippy, dem eckigen Skelett,
Kastputins endlose Armeen untoter und bösartiger Unholde zu bekämpfen!
<br><br>
Skellboy wird mit Unity entwickelt und ist für einen Release Mitte 2019 für Windows,
MaxOS und Linux geplant!
	` },
	lang_skelltext_release: {type:"innerHTML", text:"Mitte 2019"},	
	"mce-EMAIL": {type:"placeholder", text:"Anmelden für Release Infos!"}	
};

var lang_en = {
	lang_skelltext_1:       {type:"innerHTML", text:`
Sometimes, when there is nobody up to the task, old heroes have to rise from the grave to save the day!
Crush your enemies and make good use of their guts - literally, as you can augment Skippy with your
foe's body parts and weapons!
<br><br>
Help Skippy, the cubic skeleton, to fight off Squaruman's endless forces of undead and vicious
foes in this rectangular action packed cardboard adventure!
<br><br>
Skellboy is developed using Unity and its release is slated for mid 2019 for Windows,
MacOS and Linux!
	` },
	lang_skelltext_release: {type:"innerHTML", text:"mid 2019"},
	"mce-EMAIL": {type:"placeholder", text:"Subscribe for release news!"}		
};





var languages = {};
languages["ger"] = lang_ger;
languages["en"] = lang_en;

window.onload = function() {
	loadLanguage("en");
}

var loadLanguage = function(langName) {
	
	var langObj = languages[langName];
	
    for (var prop in langObj) {
		
        // skip loop if the property is from prototype
        if(!langObj.hasOwnProperty(prop)) continue;

		let ob = document.getElementById(prop);
		ob[langObj[prop].type] = langObj[prop].text;

    }	
	
}