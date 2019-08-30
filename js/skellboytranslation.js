


var lang_ger = {
	lang_skelltext_1:       {type:"innerHTML", text:`
Manchmal, wenn sich sonst niemand dafür bereit erklärt, braucht es einen alten, <strong>wiederauferstandenen
Helden</strong> um die Welt zu retten! Vernichte deine Gegner und mach dir ihr Innerstes zu Nutze - wortwörtlich,
denn mit den <strong>Körperteilen und Waffen deiner Gegner kannst du Skippy aufrüsten</strong>!
<br><br>
In diesem rechtwinkligen, actionbepackten Papp-Abenteuer hilfst du <strong>Skippy</strong>, dem eckigen Skelett,
<strong>Kastputins</strong> endlose Armeen untoter und bösartiger Unholde zu bekämpfen!
	` },
	lang_skelltext_release: {type:"innerHTML", text:"3. Dezember"},	
	lang_skelltext_platforms_1: {type:"innerHTML", text:"für Nintendo Switch"},		
	lang_skelltext_platforms_2: {type:"innerHTML", text:"2020 für PC, Mac and Linux"},					
	lang_skelltext_and: {type:"innerHTML", text:"und"},		
	lang_skelltext_pub: {type:"innerHTML", text:"Switch Version veröffentlicht von"},	
	lang_skelltext_follow: {type:"innerHTML", text:"Folge uns!"},	
	lang_skelltext_follow2: {type:"innerHTML", text:"Tritt unserem <a href='https://discord.gg/8eWHk53'>discord</a>  bei und teile alle deine <strong>Knochenwitze</strong> mit uns!"},	
	lang_skelltext_follow3: {type:"innerHTML", text:"oder"},		
	lang_skelltext_follow4: {type:"innerHTML", text:"<strong>Melde dich für unseren Newsletter an</strong> um im Gegenzug unsere Knochenwitze zu bekommen!"},		
	"mce-EMAIL": {type:"placeholder", text:"Anmelden für Release Infos!"}	
};

var lang_en = {
	lang_skelltext_1:       {type:"innerHTML", text:`
					Sometimes, when there is nobody up to the task, old heroes have to <strong>rise from the grave</strong> to save the day!
					Crush your enemies and make good use of their guts - literally, as you can <strong>augment Skippy with your
					foe's body parts </strong> and weapons!
					<br><br>
					Help <strong>Skippy</strong>, the cubic skeleton, to fight off <strong>Squaruman's</strong> endless forces of undead and vicious
					foes in this rectangular action packed cardboard adventure!
	` },
	lang_skelltext_release: {type:"innerHTML", text:"December 3rd 2019"},
	lang_skelltext_platforms_1: {type:"innerHTML", text:"For Nintendo Switch"},		
	lang_skelltext_platforms_2: {type:"innerHTML", text:"2020 for PC, Mac and Linux"},	
	lang_skelltext_and: {type:"innerHTML", text:"and"},	
	lang_skelltext_pub: {type:"innerHTML", text:"Switch version published by"},
	lang_skelltext_follow: {type:"innerHTML", text:"Follow us!"},	
	lang_skelltext_follow2: {type:"innerHTML", text:"You can join our <a href='https://discord.gg/8eWHk53'>discord</a> and share all of your <strong>bone jokes</strong> with us!"},	
	lang_skelltext_follow3: {type:"innerHTML", text:"or"},		
	lang_skelltext_follow4: {type:"innerHTML", text:"<strong>subscribe to our Newsletter</strong> to get all of our bone jokes!"},	
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