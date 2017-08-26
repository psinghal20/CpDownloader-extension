chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	if (request.flag == "send"){
      let filename = document.getElementsByClassName("hr_tour-challenge-name")[0].textContent;//$(".hr_tour-challenge-name").text();
  		let temp = document.getElementsByClassName("CodeMirror-code")[0].getElementsByTagName("pre");//$(".CodeMirror-code").find("pre");
  		let code="";
      for (var i = 0; i < temp.length; i++) {
        code=code+"\r\n"+temp[i].textContent;
      }
      sendResponse({
          	filename: filename,
          	code:code
        	});
    	}  
  });

