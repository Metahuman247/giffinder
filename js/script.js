// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
  
  function giphyURLWithSearchTerm(searchTerm) {
}

function appendImageToBody(srcURL) {
    $('#image').html('<img src=' + srcURL + '/>');
}

function callGiphyAPIWithSearchTerm(searchTerm) {
    $.ajax({
      url: "https://api.giphy.com/v1/stickers/search?q="+ searchTerm + "&api_key=dc6zaTOxFJmzC&rating=g",
      method: "GET",
      success: function(response) {
        console.log(response);
        var url = response.data[0].images.original.url;
           $('#image').html('<img src=' + url + '/>');
      },
    }); 
    
    $("#search").click(function(){
    var inputValue = $("#srch-term").val();
    var secondValue = $("#two").val();
    callGiphyAPIWithSearchTerm(inputValue, secondValue);
});
      callGiphyAPIWithSearchTerm("pig");
});