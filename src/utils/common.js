const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const imageType = (exercises = []) => {
  const images = [
    { keyword: "pull", src: require("../assets/default.jpg") },
    { keyword: "run", src: require("../assets/run.jpg") },
  ];

  const imageDefault = require("../assets/default.jpg");

  const imageSource = images
    .filter((image) =>
      exercises.some((exercise) =>
        exercise.toLowerCase().includes(image.keyword)
      )
    )
    .map((matchingImage) => matchingImage.src)[0];

  if (imageSource === undefined) {
    return imageDefault;
  }

  return imageSource;
};

export { sleep, imageType };
