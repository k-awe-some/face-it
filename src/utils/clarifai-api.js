import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "918f0504ea004d5bbeb15003d269f678"
});

const faceIt = input => {
  app.models.predict(global.Clarifai.FACE_DETECT_MODEL, input).then(
    function(response) {
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    },
    function(err) {
      // there was an error
    }
  );
};

export default faceIt;
