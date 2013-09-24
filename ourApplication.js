log('jQuery loaded.');

jqLoaded = true;

$(function(){
  log('DOM Ready fired');
  $('#main').append('Viable Payload');
});

log('Inline JS appending content...', true);
$('#main').append('Minimum ');