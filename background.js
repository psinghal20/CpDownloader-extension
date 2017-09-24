let RegEx = {
	hackerrank:/hackerrank/,
	codechef:/codechef/,
	hackerearth:/hackerearth/
}
var filename,temp,code;
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		if (request.flag == "send"){
			if(request.currentURL.match(RegEx.hackerrank)){
				filename = document.getElementsByClassName("hr_tour-challenge-name")[0].textContent;//$(".hr_tour-challenge-name").text();
				temp = document.getElementsByClassName("CodeMirror-code")[0].getElementsByTagName("pre");//$(".CodeMirror-code").find("pre");
				code="";
				for (var i = 0; i < temp.length; i++) {
					code=code+"\r\n"+temp[i].textContent;
				}
				
			}

			if (request.currentURL.match(RegEx.codechef)){
				filename = document.getElementsByClassName("ns-heading")[0].getElementsByTagName("a")[0].innerHTML;
				temp = document.getElementById("frame_edit-program").contentDocument;
				code = temp.getElementsByClassName("cpp")[0].innerHTML;
				console.log(code);
			}
			
			sendResponse({
				filename: filename,
				code:code
			});
	}  
});

