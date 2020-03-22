$(document).ready(function() {
  $('input.autocomplete').autocomplete2({
        data: [
      {id:1,text:'Apple',img:'http://placehold.it/250x250',url:'http://www.inpi.gov.br/'},
      {id:2,text:'Microsoft',img:'http://placehold.it/250x250',url:'http://placehold.it/250x250'},
      {id:3,text:'Google',img:'http://placehold.it/250x250',url:'http://placehold.it/250x250'}
    ],
        select: function( event, ui ) { 
            window.location.href = ui.item.url;
        }
    });
});
