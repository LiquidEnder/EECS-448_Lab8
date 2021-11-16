function remake()
{
    var BackRed= document.getElementById("BackgroundRed").value;
    var BackBlue= document.getElementById("BackgroundBlue").value;
    var BackGreen= document.getElementById("BackgroundGreen").value;

    var BorderRed= document.getElementById("BorderRed").value;
    var BorderBlue= document.getElementById("BorderBlue").value;
    var BorderGreen= document.getElementById("BorderGreen").value;
    var Width= document.getElementById("BorderWidth").value;

    var background = document.getElementById("body");

    background.style.backgroundColor = "#"+BackRed+BackGreen+BackBlue;

    background.style.borderWidth = Width;
    background.style.borderColor = "#"+BorderRed+BorderGreen+BorderBlue;
}