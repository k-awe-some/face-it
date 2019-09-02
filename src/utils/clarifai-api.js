import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "918f0504ea004d5bbeb15003d269f678"
});

const calcFaceLocation = response => {
  console.log(response);
  const clarifaiFace =
    response.outputs[0].data.regions[2].region_info.bounding_box;
  const inputImage = document.getElementById("inputImage");
  const width = Number(inputImage.width);
  const height = Number(inputImage.height);
  return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - clarifaiFace.right_col * width,
    bottomRow: height - clarifaiFace.bottom_row * height
  };
};

export const faceIt = (input, displayFaceBoxCallback) => {
  app.models
    .predict(global.Clarifai.FACE_DETECT_MODEL, input)
    .then(response => calcFaceLocation(response))
    .then(data => displayFaceBoxCallback(data))
    .catch(error => console.log(error.message));
};
