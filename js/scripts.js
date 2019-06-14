var inputNum;
var arrayNum;
var result = "";


$(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();

    var inputString = $("#userInput").val();
    inputNum = parseInt(inputString);
    alert("input as a number: "+inputNum);
    arrayNum = inputString.split();
    alert(arrayNum);
    var arrayLength = arrayNum.length;
    if (arrayLength == 1) {
      for (var i = 0; i <= inputNum; i++) {
        result += i+" ,";
      }
    }
    alert("Result: "+result);
  });
});
