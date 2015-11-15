$(document).ready(function(){

$('#form').submit(function (event){

//$('#results').append('Results will be here soon');

$('#results').append($('#location').val() + '<br>');
event.preventDefault();

//  alert($('#location').val() + 'has been submitted');


} )
} )
