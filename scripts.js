(function($){

$(document).ready(function(){

var addUl = $("<ul> </ul>");

addUl.appendTo("div");


var button= $("input:button");

button.on("click",function(){

var text = $("input:text").val();	


if (text.length<1)
{
	$("input:text").css("border-color","red");

}
else 
{
addUl.css("opacity","1");
$("input:text").css("border","none");	
var addLi = $("<li></li>")
addLi.html(text);
addLi.appendTo("ul")
console.log(text);
}});



});
}) (jQuery);