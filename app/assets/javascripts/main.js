$(document).on('ready page:load', function(){
  $("#divUpload").unbind('click').on("click", function(e) {
    e.preventDefault();
    $('#hidden-new-file').click();
  });

  $('.ui.dropdown.item').on("click",function(e){
        e.preventDefault();
        $('.ui.vertical.menu').toggle();
  });

  $('.ui.dropdown').dropdown();

  $('.message .close').on('click', function() {
    $(this).closest('.message').fadeOut('3000');
  });

  $('.ui.checkbox').checkbox();

  $('.run').on('click', function(e){
    e.preventDefault();
    $('.small.modal').modal('show');
  });

  $('.room .item').click(function(e){
    e.preventDefault();
    $('.menu .item').removeClass('active');
    $(this).addClass('active');
  });
});
