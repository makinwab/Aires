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

  $('.ui.checkbox').checkbox();

  $('.run').on('click', function(e){
    e.preventDefault();
    $('.small.modal').modal('show');
  });
  
  $('.ui.form')
    .form({
      fields: {
        name     : 'empty',
        gender   : 'empty',
        username : 'empty',
        password : ['minLength[6]', 'empty'],
        skills   : ['minCount[2]', 'empty'],
        terms    : 'checked',
        listing  : 'empty'
      }
    })
  ;
});

