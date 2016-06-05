var pictureSource;   // picture source
var destinationType; // sets the format of returned value

document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}

function onPhotoDataSuccess(imageData) {
  var imageContainer = document.getElementById('imageContainer');
  var image = document.createElement('li');
  var imageSrc = document.createElement('img')
  imageSrc.src = 'data:image/jpeg;base64,' + imageData;
  image.appendChild(imageSrc);
  imageContainer.appendChild(image);
}

function capturePhoto() {
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
    destinationType: destinationType.DATA_URL });
}

function onFail(message) {
  alert('Failed because: ' + message);
}


