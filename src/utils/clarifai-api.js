import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "918f0504ea004d5bbeb15003d269f678"
});

const faceIt = app.models
  .predict(
    "a403429f2ddf4b49b307e318f00e528b",
    "https://samples.clarifai.com/face-det.jpg"
  )
  .then(
    function(response) {
      console.log(response);
    },
    function(err) {
      // there was an error
    }
  );

export default faceIt;
