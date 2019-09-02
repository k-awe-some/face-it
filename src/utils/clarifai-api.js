import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "918f0504ea004d5bbeb15003d269f678"
});

const calcFaceLocation = response => {
  console.log(response);
  const faceRegions = [];
  response.outputs[0].data.regions.map(face => {
    const clarifaiFace = face.region_info.bounding_box;
    const inputImage = document.getElementById("inputImage");
    const width = Number(inputImage.width);
    const height = Number(inputImage.height);
    return faceRegions.push({
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    });
  });
  return faceRegions;
};

export const faceIt = (input, displayFaceBoxCallback) => {
  app.models
    .predict(global.Clarifai.FACE_DETECT_MODEL, input)
    .then(response => calcFaceLocation(response))
    .then(data => displayFaceBoxCallback(data)) // data as an array (faceRegions)
    .catch(error => console.log(error.message));
};
