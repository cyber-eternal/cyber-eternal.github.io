
// document.getElementById('download').onclick = function () {
//   function doGET(path, callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState == 4) {
//         if (xhr.status == 200) {
//           // ***Yes, use `xhr.responseText` here***
//           callback(xhr.responseText);
//         } else {
//           // ***No, tell the callback the call failed***
//           callback(null);
//         }
//       }
//     };
//     xhr.open("GET", path);
//     // xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://google.com');
//     // xhr.setRequestHeader('Content-Type', 'application/pdf');
//     xhr.send();
//   }

//   function handleFileData(fileData) {
//     if (!fileData) {
//       // Show error
//       return;
//     }
//     console.log('fileData: ', fileData);
    
//     // Use the file data
//   }

//   doGET("https://github.com/cyber-eternal/cyber-eternal.github.io/blob/master/Edgar_Sargsyan's_CV.pdf", handleFileData);
// }