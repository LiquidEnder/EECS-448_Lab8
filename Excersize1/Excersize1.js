function calculate(){
    //get from html
    var password = document.getElementById("Password").value;
    var renter = document.getElementById("Renter Password").value;

    if(password.length < 8)
    {
        alert("Password not long enough!");
    }
    else if(password != renter)
    {
        alert("The two entered passwords are not the same.");
    }
    else
    {
        alert("Password acceptable.")
    }
    
}