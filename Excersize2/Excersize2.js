var imgsrc = new Array();
imgsrc[0]="IMG_0016.PNG";
imgsrc[1]="IMG_0017.JPG";
imgsrc[2]="IMG_0126.PNG";
imgsrc[3]="IMG_0830.JPG";
imgsrc[4]="IMG_0838.JPG";

function next()
{
    CurrentDisplay = document.getElementById("slideShow").getAttribute("src");

    for(var i = 0; i < imgsrc.length;i++)
    {
        if(CurrentDisplay == imgsrc[i] && i != imgsrc.length-1)
        {
            document.getElementById("slideShow").setAttribute("src", imgsrc[i+1]);
        }
        else if(CurrentDisplay == imgsrc[i])
        {
            document.getElementById("slideShow").setAttribute("src", imgsrc[0]);
        }
    }
}

function previous()
{
    CurrentDisplay = document.getElementById("slideShow").getAttribute("src");

    for(var i = 0; i < imgsrc.length;i++)
    {
        if(CurrentDisplay == imgsrc[i] && i != 0)
        {
            document.getElementById("slideShow").setAttribute("src", imgsrc[i-1]);
        }
        else if(CurrentDisplay == imgsrc[0])
        {
            document.getElementById("slideShow").setAttribute("src", imgsrc[imgsrc.length-1]);
        }
    }
}