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
      value += "" + number;
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
        var result = ["0"];
        $("#inputForm")[0].reset();
        if (inputString === "") {
          result = "It looks like you didn't enter anything. Please enter a valid number!";
        } else {
          inputNum = parseInt(inputString);
          if (inputNum <= 0) {
            result = "It looks like you entered either '0' or negative number. Please enter a valid number!";
          } else {
            for (var i = 1; i <= inputNum; i++) {
              // debugger;
              var digitsArray = splitInToDigits(i);
                var num = convertLargeNumber(digitsArray);
                result.push(num);
            }          // result = result.split("");
          }

        }
        $("#stringResult").text(result);
        $(".result").show();
        $("#close_btn").click(function() {
          $(".result").hide("hide");
        });
      });


    });
