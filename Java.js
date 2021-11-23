window.onload=preparePage();

function preparePage(){

//find the button
var Click1=document.getElementById("Click1");
    //when button clicked, call function
    Click1.onclick=function(){
        loadDoc1();
    }

var Click2=document.getElementById("Click2");
//when button clicked, call function
    Click2.onclick=function(){
        loadDoc2();
    }

var Click3=document.getElementById("Click3");
//when button clicked, call function
    Click3.onclick=function(){
        loadDoc3();
}


}


//loadDoc function
function loadDoc1() {
	
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
	//if the state happens to equal to 4 (request is finished/ready) and the HTTP status code is 200 (ok), do something to the page
    if (this.readyState == 4 && this.status == 200) {
    	document.getElementById("Para1").innerHTML = this.responseText;
    }//end if
  };//end function
  
  xhttp.open("GET", "Click1.txt", true);
  
  //send request to server
  xhttp.send();
}

function loadDoc2() {
	
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
	//if the state happens to equal to 4 (request is finished/ready) and the HTTP status code is 200 (ok), do something to the page
    if (this.readyState == 4 && this.status == 200) {
    	document.getElementById("Para2").innerHTML = this.responseText;
    }//end if
  };//end function
  
  xhttp.open("GET", "Click2.txt", true);
  
  //send request to server
  xhttp.send();
}

function loadDoc3() {
	
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
	//if the state happens to equal to 4 (request is finished/ready) and the HTTP status code is 200 (ok), do something to the page
    if (this.readyState == 4 && this.status == 200) {
    	document.getElementById("Para3").innerHTML = this.responseText;
    }//end if
  };//end function
  
  xhttp.open("GET", "Click3.txt", true);
  
  //send request to server
  xhttp.send();
}




