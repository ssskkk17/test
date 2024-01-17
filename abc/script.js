//task 1
for(var a = 1; a < 3; a++) {
    document.write("★");
}

document.write("<br><br>");

//task 2
for(var b = 1; b < 3; b++) {
    for(var c =1; c <= 3; c++) {
        document.write("★");
    }
    document.write("<br>");
}

document.write("<br><br>");

//task 3
for(var d = 1; d <= 2; d++) {
    for(var e = 1; e <= 5; e++) {
        document.write("☆");
    }
    document.write("<br>");
}

document.write("<br><br>");

//task 4
for(var f = 1; f <= 4; f++) {
    for(var g = 1; g <= 5; g++) {
        document.write("★")
    }
    document.write("<br>");
}

document.write("<br><br>");

//task 5
for(var h = 1; h <= 4; h++) {
    for(var i = 1; i <= 3; i++) {
        document.write("★");
    }
    document.write("<br>");
}

document.write("<br><br>");

//task 6
for(var l = 0; l < 3; l++) {
    for(var m = 0; m < 3; m++) {
        if(m%2 === 0){
            document.write("★");
        }
        else{
            document.write("☆");
        }
    }
    document.write("<br>");
}

document.write("<br><br>");

//task 7
for(var n= 0 ; n < 5; n++) {
    for(var p = 0; p < 5; p++) { 
        if(p%2 === 0){
            document.write("★");
        }
        else{
            document.write("☆");
        }
    }
    document.write("<br>");
}

document.write("<br><br>");

//task 8
for(var aa = 1; aa < 6; aa++) {
    for(var bb= 1; bb < aa+1; bb++) {
        document.write("★")
    }
    document.write("<br>");
}