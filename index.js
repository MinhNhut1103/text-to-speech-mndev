// KHAI BÁO

var tukhoa = document.getElementById('tukhoa');

var vanbanmoi = document.getElementById('vanbanmoi')

var soluongtu = document.getElementById('soluongtu');

function mohuongdan() {
    var x = document.getElementById("huongdan");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// NGUỒN VIDEO

function demtu() {

    var dem = tukhoa.value.length;

    soluongtu.innerHTML = dem + " từ";

    tukhoa.focus();
    return false;
}

function ngatvanban() {

    var x = document.getElementById("vanbanmoi");
    x.style.display = "block";

    var formattedString = tukhoa.value.split(".").join(".<br /><br />");

    vanbanmoi.innerHTML = formattedString;

    tukhoa.focus();
    return false;
}

function reloadtrang() {
    document.location.reload(true);
    tukhoa.focus();
}