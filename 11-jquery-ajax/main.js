// $(function() {
//     function informMe(endpoint,   value){

    
//         $.ajax({
//             url: `https://restcountries.eu/rest/v2/name/germany`,
//             beforeSend: function(xhr){
//             },
//             type: "get"

//         }).done(function(data) {
//             console.log(data)
//             console.log("This function will be run if the ajax is successful");
//         }).fail(function(data){
//             console.log("This function will be run if the ajax if failed");
//         }).always(function(data){
//             console.log("This function runs no matter success or fail.");
//         });

//     }

//     informMe()
// });

// $(function() {
//     function informMe(endpoint,   value){

//         $.get(
//             {url: `https://restcountries.eu/rest/v2/${endpoint}/${value}`}
//         ).done(function(data) {
//             console.log(data)
//             console.log("This function will be run if the ajax is successful");
//         }).fail(function(data){
//             console.log("This function will be run if the ajax if failed");
//         }).always(function(data){
//             console.log("This function runs no matter success or fail.");
//         });

//     }

//     informMe('name', 'germany')
// });








// $(function() {
//     function informMe(endpoint,   value){

//         $.get(
//             {url: `https://restcountries.eu/rest/v2/${endpoint}/${value}`}
//         ).done(function(data) {
//             console.log(data)
//             console.log("This function will be run if the ajax is successful");
//         }).fail(function(data){
//             console.log("This function will be run if the ajax if failed");
//         }).always(function(data){
//             console.log("This function runs no matter success or fail.");
//         });

//     }

//     informMe('name', 'germany')
// });

$('form').submit(function(input){
    input.preventDefault();

    let long = $('input[name=lng]').val();
    let lat = $('input[name=lat]').val()


        $.ajax(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&formatted=0`
        ).done(function(data) {
            console.log("This function will be run if the ajax is successful");

            let sunrise = new Date(data.results.sunrise);
            let sunset = new Date(data.results.sunset);


            let now = new Date();
            console.log('I am a new date object '+now);


                console.log('Sunrise is at: ' + sunrise);

                console.log('Sunset is at: ' + sunset);



                $('#times').append(`<p>Sunrise is at: ${sunrise}</p><br><p>Sunset is at: ${sunset}</p>`);
        });
});




$('#form').on('submit', function(e) {
    e.preventDefault();
     var oldDay = new Date(new Date().getTime()- 86400*1000); //initiate a new time (using new Date()), minus one day in milliseconds, store in variable oldDay
    var nextDay = new Date(new Date().getTime()+ 86400*1000); // initiate a new time (using new Date()), plus one day in milliseconds, store in variable nextDay
    var data = $('#form').serialize();  //serialize the data from the from submission, so that we can access it like an object, store in variable data
    // Call with the input longitude and latitude check for today, since no date and no manually added latitude and longitude are passed in, first two parameter are 0. The callback of callApi call the timeDifference function to calculate the time. The callback of this function will return the time difference which we can put out into the HTML
    callApi(new Date(), data, today => { //kind of call back hell (hard to read and hard to understand what closes where)
        console.log('This is for today!')
        console.log(today.sunrise);


        callApi(oldDay,data,yesterday=>{ //the callback is today, yesterday and tomorrow here.
            console.log('This is for yesterday!')
            console.log(new Date(yesterday.sunrise)); 


            callApi(nextDay,data,tomorrow =>{
                console.log('This is for tomorrow!')
                console.log(new Date(tomorrow.sunrise))


                var sunrisesTime = [new Date(today.sunrise),new Date(yesterday.sunrise),new Date(tomorrow.sunrise)]; //declare an array, sunrisesTime and store three dates, today.sunrise, yesterday.sunrise and tomorrow.sunrise
                
                var sunsetsTime = [new Date(today.sunset),new Date(yesterday.sunset), new Date(tomorrow.sunset)];//declare an array, sunsetTime and store three dates, today.sunset, yesterday.sunset and tomorrow.sunset
                 var now = new Date(); //declare a variable now, store inside a new Date() - gets the time from right now
                console.log(now);
                 var nextSunrise = sunrisesTime.find(function(sunrise){ 
                    console.log('this is inside Sunrise '+sunrise);
                    console.log('this is inside Now '+now);
                    console.log((sunrise - now)>0);

                    return (sunrise - now) > 0;
                });


                 var nextSunset = sunsetsTime.find(function(sunset){
                    return (sunset - now) > 0;
                });

                 var pastSunrises = sunrisesTime.filter(function(sunrise){
                     console.log(now - sunrise);
                    return (now - sunrise) > 0
                }).sort();
                console.log(pastSunrises);

                 var pastSunsets = sunsetsTime.filter(function(sunset){
                    return (now - sunset) > 0
                }).sort();

                 var prevSunrise = pastSunrises[0]; //store both previousSunrise and Sunset in variables so that they can be called to check the time difference
                var prevSunset = pastSunsets[0];
                 $('#times').append("The time difference between previous sunrise and now is "+toHHMMSS(now-prevSunrise)+"<br/>"); //    E
                $('#times').append("The time difference between next sunrise and now is "+toHHMMSS(nextSunrise - now)+"<br/>"); //E
                $('#times').append("The time difference between previous sunset and now is "+toHHMMSS(now-prevSunset)+"<br/>"); // E
                $('#times').append("The time difference between next sunset and now is "+toHHMMSS(nextSunset - now)+"<br/>"); // E
                 $('#times').append("The time difference between yesterday sunrise and now is "+toHHMMSS(now - new Date(yesterday.sunrise))+"<br/>"); //E
                $('#times').append("The time difference between yesterday sunset and now is "+toHHMMSS(now - new Date(yesterday.sunset))+"<br/>"); //E
                $('#times').append("The time difference between tomorrow sunrise and now is "+toHHMMSS(new Date(tomorrow.sunrise) - now)+"<br/>"); //E
                $('#times').append("The time difference between tomorrow sunset and now is "+toHHMMSS(new Date(tomorrow.sunset) - now)+"<br/>"); //E
             });
        });
    });
     
});


//3 F
// $('#btn').on('click', function(e) { //compare the location against Hong Kong's sunrise and sun set.
// e.preventDefault();
//  callApi(new Date(),$('#form').serialize(), inputPlace => {
//      callApi(new Date(),'lat=22.25&lng=114.16666666',hongKong =>{
//          var hongKongDiff = new Date(hongKong.sunset) - new Date(hongKong.sunrise);
//         var inputDiff =new Date(inputPlace.sunset) - new Date(inputPlace.sunrise);
       
//         if(inputDiff > hongKongDiff){
//              alert('Your input has a longer day time');
//          }else{
//              alert('HK has longer day time')
//         }
//     });
// });
// });


//1
//create a function called callApi, it takes three inputs, date, latLng and a callback
function callApi(date, latLng ,cb) { 
$.ajax({ //function sets of an Ajax get request
    type: 'GET',
    // call api, manually define date so that any date can be called
    url:  `https://api.sunrise-sunset.org/json?${latLng}&date=${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}&formatted=0`, //add in the lat&lng to the query string and then add in the dates (full date)
    dataType: "json", //define datatype not entirely needed.
}).done(function(data){
    console.log(data);
    //console.log(data)
    cb(data.results); //make the returned information usable outside of the function.   
}).fail(function(err) {
    console.log('error', err);
});
}


function toHHMMSS(milliseconds){ //change the time from time in seconds to date in the correct format
var seconds = milliseconds / 1000;
var hourDisplayed = Math.floor(seconds / 3600) +"";
var minuteDisplayed = Math.floor(seconds % 3600 / 60 ) + "";
var secondDisplayed = (seconds % 60).toFixed(0) + "";
return `${hourDisplayed.padStart(2,"0")}:${minuteDisplayed.padStart(2,"0")}:${secondDisplayed.padStart(2,"0")}`;
} 