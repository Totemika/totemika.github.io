$( "#button-send-image" ).click(function() {
  alert( "Handler for .click() called." );


});

function readURL(input){
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          $('#image-result').attr('src', e.target.result);
          $('#image-result').attr('width',500);
      }

      reader.readAsDataURL(input.files[0]);
  }

}

$("#input-add-image").change(function(){
  readURL(this);

});
