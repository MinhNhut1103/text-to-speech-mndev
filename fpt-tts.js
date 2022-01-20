// KHAI BÁO

var tukhoa = document.getElementById('tukhoa');
var vanbanmoi = document.getElementById('vanbanmoi')
var soluongtu = document.getElementById('soluongtu');
var dathemkey = document.getElementById("dathemkey");
var downloadbutton = document.getElementById("downloadbutton");
var keycuaban = document.getElementById("keycuaban");
var giongdoc = document.getElementById("giongdoc");
var tocdo = document.getElementById("tocdo");

// HƯỚNG DẪN LẤY KEY

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

    if (tukhoa.value == "") {
        alert("Vui lòng nhập văn bản vào..")
        tukhoa.focus();
    }
    else {
        soluongtu.innerHTML = dem + " ký tự";
    }
    return false;
}

function ngatvanban() {

    var x = document.getElementById("vanbanmoi");

    if (tukhoa.value == "") {
        alert("Vui lòng nhập văn bản vào..")
        tukhoa.focus();
    }
    else {
        x.style.display = "block";
        var formattedString = tukhoa.value.split(".").join(".<br /><br />");
        vanbanmoi.innerHTML = formattedString;
    }
    return false;
}

function reloadtrang() {
    document.location.reload(true);
    tukhoa.focus();
}

// https://reqbin.com/req/javascript/c-qjaws1fh/curl--u

function convertTTS() {

    var url = "https://api.fpt.ai/hmi/tts/v5";
    var key = keycuaban.value;
    var speed = tocdo.value;
    var voice = giongdoc.value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("api-key", key);
    xhr.setRequestHeader("speed", speed);
    xhr.setRequestHeader("voice", voice);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (key == "") {
                alert("Vui lòng nhập key vào..")
                keycuaban.focus();
            }
            else {
                const obj = JSON.parse(xhr.responseText);
                downloadbutton.style.display = "block";
                downloadbutton.src = obj.async;
            }
        }
    };

    var data = tukhoa.value;
    xhr.send(data);
}
