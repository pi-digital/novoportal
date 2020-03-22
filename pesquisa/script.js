$(document).ready(function() {
  $('.modal').modal();
  $('select').material_select();
  $('input.autocomplete').autocomplete2({
var data = [ { value: "www.foo.com",
                 label: "Spencer Kline"
               },
               { value: "www.example.com",
                 label: "James Bond"
               },
               ...
             ];
$(document).ready(function() {
    $("input#autocomplete").autocomplete({
        source: source,
        select: function( event, ui ) { 
            window.location.href = ui.item.value;
        }
    });
});
});
