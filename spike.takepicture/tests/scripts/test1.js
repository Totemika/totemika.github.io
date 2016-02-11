$( "#button-send-image" ).click(function() {
  alert( "Upload file not implemented, authentication is needed" );
  //uploadFile();
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

function uploadFile() {
    blobFile = $('#input-add-image').files[0]);
    var fd = new FormData();
    fd.append("capturedImage", blobFile);

    $.ajax({
       url: "",
       type: "POST",
       data: fd,
       processData: false,
       contentType: false,
       success: function(response) {
       },
       error: function(jqXHR, textStatus, errorMessage) {
           console.log(errorMessage);
       }
    });
}
