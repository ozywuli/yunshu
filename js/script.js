



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

        var definitions = data.results;


        console.log(definitions.length);

        var x = '';


        for (var i = 0; i < definitions.length; i++) {
          console.log(definitions[i].definition);
          x += '<p>' + definitions[i].definition + '</p>';
          i++;

        }

        console.log(x);

        $('.word-result').html(x);


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