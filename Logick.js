var Foto = document.getElementById('file');
var imgShove = document.getElementsByClassName('Foto')[0];

Foto.addEventListener('change', function(){
    if(Foto.files && Foto.files[0]) {
        var reader = new FileReader();

        // Когда файл загружен, обновляем src элемента img
        reader.onload = function(e) {
            imgShove.src = e.target.result; // Устанавливаем источник изображения
            localStorageSave(e.target.result);
        };

        reader.readAsDataURL(Foto.files[0]);
    }
});


var btnMusick = document.getElementById('BtnMusick').addEventListener('click', PlayPause);
var audio = document.getElementById('Musick');

function PlayPause(){
    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
    }
}


function localStorageSave(imgSrc){
    localStorage.setItem('savedImage', imgSrc);
}

window.onload = function() {
    var savedImage = localStorage.getItem('savedImage');
    if (savedImage) {
        imgShove.src = savedImage; // Устанавливаем src из localStorage, если оно доступно
    }
};

// localStorage.clear();