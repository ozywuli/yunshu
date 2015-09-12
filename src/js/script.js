$(function() {

$('#getWord').on('click', function(e) {
  e.preventDefault();

$('.form-control').focus().removeClass('has-error');

var word = $('#word').val();

if ( word ) {

  $('.loading').show();

  $.ajax({
      url: 'https://wordsapiv1.p.mashape.com/words/' + word, // The URL to the API. You can get this in the API page of the API you intend to consume
      type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
      data: {}, // Additional parameters here
      datatype: 'json',
      success: function(data) {

        console.log(data);

        if (!data.results) {

          $('.loading').fadeOut(400);



          $('.no-results').fadeIn(400).html('<p>Uh oh, no results. Make sure you\'ve spelled the word correctly or please try again with another word. Thanks!</p>');

                    $('.definitions-container').empty();
                    $('.rhymes-container').empty();

        } else {


          if ($('.no-results').length) {
            $('.no-results').fadeOut(400);
          }

          $('.loading').fadeOut(400);



          $('.definitions-container').empty();


          $('.definitions-container').fadeIn(800);


          var theTemplateScript = $("#definition-template").html();
          var theTemplate = Handlebars.compile(theTemplateScript);
          $(".definitions-container").append(theTemplate(data));



          $.ajax({
            url: 'https://wordsapiv1.p.mashape.com/words/' + word + '/rhymes',
            type: 'GET',
            data: {},
            datatype: 'json',
            success: function(data) {
              console.log(data);



              $('.rhymes-container').empty();

              $('.rhymes-container').fadeIn(800);

              var theTemplateScript = $("#rhymes-template").html();
              var theTemplate = Handlebars.compile(theTemplateScript);
              $(".rhymes-container").append(theTemplate(data));


            }, // end success
            error: function(err) {
              console.log(err);
            }, // end error
            beforeSend: function(xhr) {
              xhr.setRequestHeader("X-Mashape-Authorization", "hhUvOn80C0mshEr1StkZqqGUloimp1P7Ndwjsn4g645NtwbRDP");
            } // end beforeSend
          });


        }



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