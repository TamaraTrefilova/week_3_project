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

var splitInToDigits = function(number) {
  var array = [];
  while (number > 0) {
    array[array.length] = number % 10;
    number = parseInt(number / 10);
  }
  array.reverse();
  alert("Here is array" +array);
  return array;
}

$(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();

    var inputString = $("#userInput").val();
    inputNum = parseInt(inputString);
    var arrayOfDigits = splitInToDigits(inputNum);
    alert("input as a number: " + inputNum);
    // arrayNum = inputString.split();
    // alert(arrayNum);
    debugger;
    if (arrayOfDigits.length == 1) {
      for (var i = 0; i <= inputNum; i++) {
        if (i > 0 && i < 4) {
          result.push(checkNumber(i) + ", ");
        } else {
          result.push(i + ", ");
        }
      }
    } else {
      var max = 0;
      for (var i = 0; i < arrayOfDigits.length; i++) {

        if(arrayOfDigits[i]===1 || arrayOfDigits[i]===2 ||arrayOfDigits[i]===2 ){
          if(max < )
          max = arrayOfDigits[i];
        }
          arrayOfDigits[i]
      }

    }
    result = result.join(" ");
    $("#stringResult").text(result);
    $("#output").show();
  });


});
