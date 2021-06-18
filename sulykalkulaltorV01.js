
function sulyszamolas(){

var magassag = document.getElementById("meret").value;
var suly = document.getElementById("suly").value;
var magassag170es150kozott;
var magassag171es180kozott;
var magassag181felett;
var magassag150alatt;
var magassag200felett;
var eredmeny;

if (magassag <=170 && magassag>=150) {
    magassag170es150kozott = magassag;
    } else {
        if (magassag >=171 && magassag<=180) {
            magassag171es180kozott = magassag;
        } else {
            if (magassag < 150) {
                magassag150alatt = magassag;
            } else {
                if (magassag >200) {
                    magassag200felett = magassag;
                } else {
                    magassag181felett = magassag
                }
            }
        }
            }       

if (magassag = magassag170es150kozott) {
    if (suly <=60 && suly >= 50 ) {
        eredmeny = "megfelelő";
    } else {
        if (suly >=61 || suly <50) {
            eredmeny ="nem megfelelő";
        }
    }
}

if (magassag = magassag171es180kozott) {
    if (suly >=61 && suly <= 75 ) {
        eredmeny = "megfelelő";
    } else {
        if (suly <=60 || suly > 75) {
            eredmeny ="nem megfelelő";
        }
    }
}

if (magassag = magassag181felett) {
    if (suly >=76 && suly <= 90 ) {
        eredmeny = "megfelelő";
    } else {
        if (suly <=75 || suly > 90) {
            eredmeny ="nem megfelelő";
        }
    }
}

if (magassag = magassag150alatt) {
    eredmeny = "nincs adat";
}

if (magassag = magassag200felett) {
    eredmeny = "nincs adat";
}

document.createElement("button");
document.getElementById("eredmeny").innerHTML = eredmeny;

}