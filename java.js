function validate()
{
    if( document.getElementByID("fname").value.length == 0) {
      alert("Please enter your first name!");
    }

    if(document.getElementByID("lname").value.length == 0) {
      alert("Please enter your last name!");
    }

    if(document.getElementByID("emailAddr").value.length == 0) {
      alert("Please enter your Email!");
    }
}
