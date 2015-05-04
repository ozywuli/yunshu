// Basic

/*$(function() {
  var shoesData = [
    {
      name: "Nike",
      price: 199.00
    },
    {
      name: "Loafers",
      price: 59.00
    },
    {
      name: "Wing Tip",
      price: 259.00
    }
  ];

  var theTemplateScript = $("#shoe-template").html();

  var theTemplate = Handlebars.compile(theTemplateScript);

  $(".shoesNav").append(theTemplate(shoesData));

})*/




// Basic with Jquery


/*$(function() {
  var shoesData = [
    {
      name: "Nike",
      price: 199.00
    },
    {
      name: "Loafers",
      price: 59.00
    },
    {
      name: "Wing Tip",
      price: 259.00
    }
  ];


  function updateAllShoes(shoes) {

    var theHTMLListOfShoes = "";
    shoesData.forEach(function(eachShoe) {
      theHTMLListOfShoes += '<li class="shoes">' + '<a href="/' + eachShoe.name.toLowerCase() + '">' + eachShoe.name + ' --Price: ' + eachShoe.price + '</a></li>';
    });

    return theHTMLListOfShoes;
  }


  $(".shoesNav").append(updateAllShoes(shoesData));


})*/















// Parents

/*

$(function() {
  var shoesData = {
    groupName: "Celebrities",
    users: [
      {
        name: {
          firstName: "Mike",
          lastName: "Alexander"
        }
      }
    ]
  };


  var theTemplateScript = $("#shoe-template").html();
  var theTemplate = Handlebars.compile(theTemplateScript);
  $(".shoesNav").append(theTemplate(shoesData));

})
*/

















// Partials


/*
$(function() {
var shoesData = {
  allShoes: [
    {
      name:"Nike",
      price:199.00,
      color:"black",
      size:10
    },
    {
      name:"Loafers",
      price:59.00,
      color:"blue",
      size:9
    },
    {
      name:"Wing Tip",
      price:259.00,
      color:"brown",
      size:11
    }
  ]};

  var theTemplateScript = $("#shoe-template").html();
  var theTemplate = Handlebars.compile(theTemplateScript);

  Handlebars.registerPartial("description", $("#shoe-description").html());
  $(".shoesNav").append(theTemplate(shoesData));

});
*/


// each this

//Also, if the data object passed to the each helper is not an array, the entire object is the current context and we use the this keyword. This illustrates:

/*$(function() {
  var favoriteFruits = {
    firstName: "Peter",
    lastName: "Paul"
  };



  var theTemplateScript = $("#fruits-template").html();
  var theTemplate = Handlebars.compile(theTemplateScript);

  $(".shoesNav").append(theTemplate(favoriteFruits));

});*/






// with helper

/*$(function() {
  var shoesData = {
    groupName: "Celebrities",
    celebrity: {
      firstName: "Mike",
      lastName:"Alexander"
    }
  };



  var theTemplateScript = $("#shoe-template").html();
  var theTemplate = Handlebars.compile(theTemplateScript);

  $(".shoesNav").append(theTemplate(shoesData));

});*/












// custom helper function
/*
$(function() {
  var contextObj = {
    score: 75,
    userName: "Mike"
  };

  var theTemplateScript = $("#shoe-template").html();
  var theTemplate = Handlebars.compile(theTemplateScript);

  Handlebars.registerHelper("theNameOfTheHelper", function(theScore) {
    console.log("Grade: " + theScore);
    var userGrade = "C";

    if (theScore >= 90) {
      return "A";
    }

    if (theScore >= 80 && theScore < 90) {
      return "B";
    }

    if (theScore >= 70 && theScore < 80) {
      return "C";
    }

    else {
      "return D";
    }
  });

  $(".shoesNav").append(theTemplate(contextObj));


})
*/




// custom block helpers
/*$(function() {


var contextObj = [
  {
    firstName: "Kapil",
    lastName:"Manish",
    score:[22, 34, 45, 67]
  },
  {
    firstName: "Bruce",
    lastName:"Kasparov",
    score:[10, 34, 67, 90]
  }
];


  var theTemplateScript = $("#shoe-template").html();
  var theTemplate = Handlebars.compile(theTemplateScript);




Handlebars.registerHelper("userScore", function(dataObject, options) {
  var templateWithinInterpolatedData = "";

  for ( var i = dataObject.length - 1; i >= 0; i-- ) {
    dataObject[i].score = dataObject[i].score.reduce( function( prev, cur, index, array ) {
      return prev + cur;
    });

    // Each object in the data object array is interpolated with the options.fn method, which processes all the HTML from the template and insert the values from the object in their respective positions.

    // Just so you understand the purpose of the options.fn method: it does exactly what the regular handlebars template function does when we pass the data object to the function, to  retrieve the values from the object and insert them into the HTML from the template.

    // Without the options.fn object in this example, the raw objects (instead of the interpolated values) would have been returned


    templateWithinInterpolatedData += options.fn(dataObject[i]);


  }


  return templateWithinInterpolatedData;


});


$(".shoesNav").append(theTemplate(contextObj));





})*/



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
        console.log(data)


        var definitions = data.results;

        definitions.forEach(function(definition) {
          console.log(definition.definition);
        })

/*        definitions.forEach(function(definition) {
          _.each(definition, function(value, key) {
            if ( _.isArray(definition[key] && key != 'examples') {
              var arr = value;
              for ( var i = 0, len = arr.length; i < len; i++) {
                if ( _.isString(arr[i])) {
                  arr[i] ='<a class=\'exampleLink\' href=\'#\'>' + arr[i] + '</a>'
                }
              }
            } )
          })
        })*/

        $('.word-result').html(data.word + data.results[0].definition + data.frequency);


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