import firebase from '../firebaseConfig';
const cors = require('cors')({origin: true});

function UploadImage(img) {
  console.log(img[0])
    var file = img[0]
// var metadata = {
//   contentType: 'image/jpeg'
// };
// var uploadTask = firebase.storage().ref().child('images/' + file.name).put(file, metadata)
// .then(snapshot => {
//   console.log(snapshot)
// })

firebase.storage().ref().child('images/').put(file).then(function(snapshot) {
  console.log(snapshot.downloadURL);
});

// uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
//   function(snapshot) {
//     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     console.log('Upload is ' + progress + '% done');
//   }, function(error) {
//     console.log(error);
//   }
// , function() {
//   // Upload completed successfully, now we can get the download URL
//   uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
//     console.log('File available at', downloadURL);
//   });
// });
}

export default UploadImage;
