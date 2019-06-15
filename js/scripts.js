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
  return array;
}

var convertSmallNumber = function(number) {
  var result = [];
  for (var i = 0; i <= number; i++) {
    if (i > 0 && i < 4) {
      result.push(checkNumber(i) + " ");
    } else {
      result.push(i + " ");
    }
  }
  return result;
}
var convertLargeNumber = function(array) {
  var result = [];
  var max = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 1 || array[i] === 2 || array[i] === 3) {
      if (max < array[i]) {
        max = array[i];
      }
    }
  }
  if (max != 0) {
    result.push(checkNumber(max));
  } else {
    // result.push(array);
    return array.join('');
  }
  return result.join("");
}



$(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();

    var inputString = $("#userInput").val();
    // debugger;
    $("#inputForm")[0].reset();
    if (inputString === "") {
      result = "It looks like you didn't enter anything. Please enter a valid number!";
    } else {
      inputNum = parseInt(inputString);
      if (inputNum <= 0) {
        result = "It looks like you entered either '0' or negative number. Please enter a valid number!";
      } else {
        var arrayOfDigits = splitInToDigits(inputNum);
        if (arrayOfDigits.length == 1) {
          result = convertSmallNumber(arrayOfDigits);
        } else {
          result = convertLargeNumber(arrayOfDigits);
        }
      }

    }

    $("#stringResult").text(result);
    $(".modal").show();
    $("button.close").click(function() {
      $("#myModal").hide("hide");
    });
    $("button.btn-secondary").click(function() {
      $("#myModal").hide("hide");
    });
  });


});
