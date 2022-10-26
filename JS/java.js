function validate() 
{
     if( document.getElementById("name").value.length == 0 ) {
     alert( "Please enter your name!" );
    }
    if( document.getElementById("emailAddr").value.length == 0 ) {
     alert( "Please enter your Email!" );
    }

    if( document.getElementById("message").value.length == 0 ) {
     alert( "Please enter a message!" );
    }

}
