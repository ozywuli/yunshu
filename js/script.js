



$(function() {

$('#getWord').on('click', function(e) {
  e.preventDefault();

$('.form-control').focus().removeClass('has-error');

var word = $('#word').val();

if ( word ) {

  $.ajax({
      url: 'https://wordsapiv1.p.mashape.com/words/' + word, // The URL to the API. You can get this in the API page of the API you intend to consume
      type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
      data: {}, // Additional parameters here
      datatype: 'json',
      success: function(data) {
        // console.log(data)



        console.log(data);
        console.log(data.results);


        $('.word-result').empty();


        var theTemplateScript = $("#definition-template").html();
        var theTemplate = Handlebars.compile(theTemplateScript);
        $(".word-result").append(theTemplate(data));


      },
      error: function(err) {
        console.log(err);
      },
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "hhUvOn80C0mshEr1StkZqqGUloimp1P7Ndwjsn4g645NtwbRDP");
      }
  });


} else {
  $('.form-control').addClass('has-error');
}

});



}); // end document ready