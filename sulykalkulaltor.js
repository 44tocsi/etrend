
function sulyszamolas(){

var magassag = document.getElementById("meret").value;
var suly = document.getElementById("suly").value;
var magassag170alatt;
var magassag171felett;
var eredmeny;
if (magassag <=170) {
    magassag170alatt = magassag;
    } else {
    magassag171felett = magassag;
            }       

if (magassag = magassag170alatt) {
    if (suly <=60 ) {
        eredmeny = "megfelelő";
    } else {
        if (suly >=61) {
            eredmeny ="nem megfelelő";
        }
    }
}

if (magassag = magassag171felett) {
    if (suly >=61 ) {
        eredmeny = "megfelelő";
    } else {
        if (suly <=60) {
            eredmeny ="nem megfelelő";
        }
    }
}

document.getElementById("eredmeny").innerHTML = eredmeny;

}