var tukhoa = document.getElementById("tukhoa");

var dathemkey = document.getElementById("dathemkey");

var downloadbutton = document.getElementById("downloadbutton");

var keycuaban = document.getElementById("keycuaban");

var giongdoc = document.getElementById("giongdoc");

var tocdo = document.getElementById("tocdo");


// TEXT TO SPEECH - Generate code link
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
            // console.log(xhr.status);
            // console.log(xhr.responseText);

            const obj = JSON.parse(xhr.responseText);

            // resultconvert.innerHTML = obj.async;

            downloadbutton.style.display = "block";

            downloadbutton.src = obj.async;
        }
    };

    var data = tukhoa.value;
    xhr.send(data);
    tukhoa.focus();
}

