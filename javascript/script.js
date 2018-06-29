// function area() {
// 	var l = document.getElementById("length").value;
// 	var w = document.getElementById("width").value;
// 	var area = l * w;
// 	document.getElementById("answer").value = area;
// 	// alert(area);
// }
// var Name = ["Jaro", "Rodriq", "Naro", true];
// // alert(Name[3]);
// // document.write("Jaro" +"<br>");
// // document.write("is"+"learning");
// // 
// var vari = [];
// vari[0] = 2;
// vari[1] = 3;
// vari[0].toString();
// document.write(vari[0] + vari[1]);
// var date = new Date();
// var dat = date.getFullYear()
// alert(dat);
//  
/*
Changing bg

*/

function changeBackground() {
	// alert('ok');
	var bg = document.getElementById("body");
	// alert("fjkie");
	//bg.innerHTML.style:background = "red";
  bg.style.background = "red";
  bg.style.fontSize = "40px";
}

function myTImer() {
  	// body...
  	alert("Congratulations You WON");
  }  
  setTimeout(myTImer, 1000);

  var p1 = document.getElementById("main");
  p1.innerHTML = "I changed the text";

  var createTag = document.createElement("p");
  createTag.innerHTML = "Jesus is good";
  document.getElementById("main").appendChild(createTag);

  var textNode = document.createTextNode("OOhh my God");
  document.getElementById("main").appendChild(textNode);

  var navigation = document.getElementsByName("li");
  console.log("Element type : ", p1.nodeType);
  console.log("Inner html: ", p1.innerHTML);
  console.log("child node : ",p1.childNodes);
// alert(p1.innerHTML);
var listItem = document.getElementsByTagName("li");
var aTag = listItem.getElementsByTagName("a");
console.log("we have : " , listItem.length, "items");