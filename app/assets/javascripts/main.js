$(document).on('ready page:load', function(){
  $('.right.menu.open').on("click",function(e){
        e.preventDefault();
    $('.ui.vertical.menu').toggle();
  });
    
  $('.ui.dropdown').dropdown();

  $('.message .close').on('click', function() {
    $(this).closest('.message').fadeOut('3000');
  });

  $('.ui.checkbox').checkbox();
});
