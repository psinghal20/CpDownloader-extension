window.onload = function() {
	let btn = document.getElementById("saveme");
	btn.onclick = function(){
		chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
  			chrome.tabs.sendMessage(tabs[0].id, {flag: "send",currentURL:tabs[0].url}, function(response) {
    			alert(response.filename+" saved");
    			loadDoc(response.filename,response.code);
  			});
		});
		
	}
}
function loadDoc(filename,code) {
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "http://localhost:4545/cpdownloader", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("filename="+filename+"&code="+code);
}