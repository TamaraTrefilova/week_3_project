var inputNum;
var arrayNum;
var result = [];

var checkNumber = function(number) {
  var value = "";

  switch (number) {
    case 1:
      value = "Beep!";
      break;
    case 2:
      value = "Boop";
      break;
    case 3:
      value = "I'm sorry, Dave. I'm afraid I can't do that.";
      break;
    default:
      value = "Enter a valid number";
  }
  return value;
}

$(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();

    var inputString = $("#userInput").val();
    inputNum = parseInt(inputString);
    alert("input as a number: " + inputNum);
    arrayNum = inputString.split();
    alert(arrayNum);
    var arrayLength = arrayNum.length;
    // debugger;
    if (arrayLength == 1) {
      for (var i = 0; i <= inputNum; i++) {
        if (i > 0 && i < 4) {
          result.push(checkNumber(i));
        } else {
          result.push(""+i);
        }
      }
    }
    alert("Result: " + result);
  });

  result = result.join(" ");
  $("#stringResult").text(result);
  $("#output").show();
});
