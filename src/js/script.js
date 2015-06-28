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


        console.log(data);



        $('.definitions').empty();


        var theTemplateScript = $("#definition-template").html();
        var theTemplate = Handlebars.compile(theTemplateScript);
        $(".definitions").append(theTemplate(data));



        $.ajax({
          url: 'https://wordsapiv1.p.mashape.com/words/' + word + '/rhymes',
          type: 'GET',
          data: {},
          datatype: 'json',
          success: function(data) {
            console.log(data);
            console.log(data.rhymes)


            $('.rhymes').empty();

            var theTemplateScript = $("#rhymes-template").html();
            var theTemplate = Handlebars.compile(theTemplateScript);
            $(".rhymes").append(theTemplate(data));


          }, // end success
          error: function(err) {
            console.log(err);
          }, // end error
          beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "hhUvOn80C0mshEr1StkZqqGUloimp1P7Ndwjsn4g645NtwbRDP");
          } // end beforeSend
        });


      }, // end success
      error: function(err) {
        console.log(err);
      }, // end error
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "hhUvOn80C0mshEr1StkZqqGUloimp1P7Ndwjsn4g645NtwbRDP");
      } // end beforeSend

  }); // end ajax


} else {
  $('.form-control').addClass('has-error');
}

});



}); // end document ready