$(document).on('ready page:load', function(){
  $("#divUpload").unbind('click').on("click", function(e) {
    e.preventDefault();
    $('#hidden-new-file').click();
  });

  $('.right.menu.open').on("click",function(e){
        e.preventDefault();
    $('.ui.vertical.menu').toggle();
  });
    
  $('.ui.dropdown').dropdown();

  $('.message .close').on('click', function() {
    $(this).closest('.message').fadeOut('3000');
  });

  $('.photos.right.remove').unbind('click').on('click', function() {
    alert("closed...");
    //$(this).closest('.message').fadeOut('3000');
  });

  $('.ui.checkbox').checkbox();
});

