var userNum;




$(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();


    userNum = parseInt($("#userInput").val());
    alert(userNum);


  });
});
