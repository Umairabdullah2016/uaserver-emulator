playSpeech("Welcome To Our Online U A-server Emulator, please click signin to continue ", "female", "English");
hideElement("label17");
hideElement("text_input2");
hideElement("label3");
hideElement("button3");
hideElement("Spoify");
hideElement("button14");
hideElement("button101");
hideElement("Zoom");
hideElement("label1");
hideElement("label6");
hideElement("label7");
hideElement("label13");
hideElement("label18");
hideElement("button5");
onEvent("text_input1", "change", function( ) {
	console.log("text_input1 entered text: " + getText("text_input1"));
	showElement("text_input2");
	setScreen("screen3");
	showElement("label3");
});
onEvent("button1", "click", function( ) {
	console.log("button1 clicked!");
	setScreen("screen3");
	playSpeech("Please Enter Your Credentials or Log In as a guest", "female", "English");
});
onEvent("text_input2", "change", function( ) {
	console.log("text_input2 entered text: " + getText("text_input2"));
	showElement("button3");
});
onEvent("button3", "click", function( ) {
	console.log("button3 clicked!");
	setScreen("screen4");
});
onEvent("button7", "click", function( ) {
	console.log("button7 clicked!");
	open("https://rb.gy/t4lrpo");
});
onEvent("Spoify", "click", function( ) {
	console.log("Spoify clicked!");
	open("https://rb.gy/uf736a");
});
onEvent("button5", "click", function( ) {
	console.log("button5 clicked!");
	open("https://www.minecraft.net/");
});
onEvent("button6", "click", function( ) {
	console.log("button6 clicked!");
	setScreen("screen7");
});
onEvent("label4", "click", function( ) {
	console.log("label4 clicked!");
});
onEvent("label10", "click", function( ) {
	console.log("label10 clicked!");
	setScreen("screen4");
});
onEvent("label4", "click", function( ) {
	console.log("label4 clicked!");
	setScreen("screen1");
});
onEvent("button10", "click", function( ) {
	console.log("button10 clicked!");
	setScreen("screen5");
});
onEvent("button11", "click", function( ) {
	console.log("button11 clicked!");
	setScreen("screen2");
});
onEvent("button12", "click", function( ) {
	console.log("button12 clicked!");
	open("https://rb.gy/6j5byl");
});
onEvent("Skype_App", "click", function( ) {
	console.log("Skype_App clicked!");
	open("https://rb.gy/p0xr2d");
});
onEvent("button14", "click", function( ) {
	console.log("button14 clicked!");
	open("https://shorturl.at/Q6vNq");
});
onEvent("Zoom", "click", function( ) {
	console.log("Zoom clicked!");
	open("https://shorturl.at/vAB6d");
});
onEvent("Back", "click", function( ) {
	console.log("Back clicked!");
	setScreen("screen5");
	setScreen("screen5");
});
onEvent("screen4:WEBbutton10\LIBRARYSTATION\COMIC\TheMincraftBeggining", "click", function( ) {
	console.log("screen4:WEBbutton10\LIBRARYSTATION\COMIC\TheMincraftBeggining clicked!");
	setScreen("screen5");
});
onEvent("screen4:WEBbutton10\LIBRARYSTATION\COMIC\TheMincraftBeggining", "click", function( ) {
	console.log("screen4:WEBbutton10\LIBRARYSTATION\COMIC\TheMincraftBeggining clicked!");
	setScreen("screen4:Comprehension\LIBRARYSTATION\Comic\TheMinecraftBeggining\READ");
});
onEvent("button17", "click", function( ) {
	console.log("button17 clicked!");
	showElement("label17");
});
onEvent("button18", "click", function( ) {
	console.log("button18 clicked!");
	setScreen("screen4");
});
onEvent("button101", "click", function( ) {
	console.log("button101 clicked!");
	open("https://amongus-online.net/game/amongus");
});
onEvent("Next", "click", function( ) {
	console.log("Next clicked!");
	setScreen("screen6");
});
onEvent("button16", "click", function( ) {
	console.log("button16 clicked!");
	setScreen("screen5");
});
onEvent("WEBbutton10", "click", function( ) {
	console.log("WEBbutton10");
	setScreen("screen4:Comprehension\LIBRARYSTATION\Comic\TheMinecraftBeggining\READ");
});
onEvent("WEBbutton10", "click", function( ) {
	console.log("WEBbutton10 clicked!");
	setScreen("screen5");
});
onEvent("screen4:WEBbutton10\LIBRARYSTATION\COMIC\TheMincraftBeggining", "click", function( ) {
	console.log("screen4:WEBbutton10\LIBRARYSTATION\COMIC\TheMincraftBeggining clicked!");
	setScreen("screen4:Comprehension\LIBRARYSTATION\Comic\TheMinecraftBeggining\READ");
});
onEvent("button10", "click", function( ) {
	console.log("button10 clicked!");
	setScreen("settings");
});
onEvent("button35", "click", function( ) {
	console.log("button35 clicked!");
	setScreen("settingsApps");
});
onEvent("button43", "click", function( ) {
	console.log("button43 clicked!");
	setScreen("screen11");
});
onEvent("button53", "click", function( ) {
	console.log("button53 clicked!");
	setScreen("settingsApps");
});
onEvent("button52", "click", function( ) {
	console.log("button52 clicked!");
	setScreen("settingsApps");
});
onEvent("button48", "click", function( ) {
	console.log("button48 clicked!");
	setScreen("settings");
});
onEvent("button54", "click", function( ) {
	console.log("button54 clicked!");
	setScreen("settings");
});
onEvent("button38", "click", function( ) {
	console.log("button38 clicked!");
	setScreen("screen15");
});
onEvent("button54", "click", function( ) {
	console.log("button54 clicked!");
});
onEvent("button41", "click", function( ) {
	console.log("button41 clicked!");
	setScreen("screen4");
});
onEvent("button15", "click", function( ) {
	console.log("button15 clicked!");
	showElement("label18");
	showElement("button101");
	deleteElement("button15");
});
onEvent("button23", "click", function( ) {
	console.log("button23 clicked!");
	showElement("button14");
	showElement("label13");
	deleteElement("button23");
});
onEvent("button25", "click", function( ) {
	console.log("button25 clicked!");
	showElement("Zoom");
	showElement("label18");
	deleteElement("button25");
});
onEvent("button24", "click", function( ) {
	console.log("button24 clicked!");
	showElement("button5");
	showElement("label7");
	deleteElement("button24");
});
onEvent("button26", "click", function( ) {
	console.log("button26 clicked!");
	setScreen("screen4");
});
onEvent("button27", "click", function( ) {
	console.log("button27 clicked!");
	setScreen("screen4");
});
onEvent("button29", "click", function( ) {
	console.log("button29 clicked!");
	showElement("Spoify");
	showElement("label6");
	deleteElement("button29");
});
