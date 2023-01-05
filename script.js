//Old way
//  if (window.XMLHttpRequest) {
//   request = new XMLHttpRequest();
// } else if (window.ActiveXObject) {
//   try {
//     request = new ActiveXObject("Msxml2.XMLHTTP");
//   } catch (e) {
//     try {
//       request = new ActiveXObject("Microsoft.XMLHTTP");
//     } catch (e) {}
//   }
// }

// request.open("GET", "https://url.com/placeholder", true);
// request.send(null);

//URL (required), options (optional)
fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=YvoQbpCUoJR805aNj9d7PZJNM7lw6sTz&s=cats",
  { mode: "cors" }
)
  .then(function (response) {
    //successful response
  })
  .catch(function (err) {
    //error
  });
