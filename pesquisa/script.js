$(document).ready(function() {
  $('.modal').modal();
  $('select').material_select();
  $('input.autocomplete').autocomplete2({
    data: [
      {url:'http://placehold.it/250x250',text:'Apple',img:'http://placehold.it/250x250'},
      {id:2,text:'Microsoft',img:'http://placehold.it/250x250'},
      {id:3,text:'Google',img:'http://placehold.it/250x250'},
    ]
  });
});

  function getId() {
    alert($('#autocomplete').data('url'));
  }





      