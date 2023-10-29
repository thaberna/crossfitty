const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const imageType = (exercises = []) => {
  const images = [
    { keyword: "pull", src: require("../assets/default.jpg") },
    { keyword: "run", src: require("../assets/run.jpg") },
  ];

  const imageSource = images
    .filter((image) =>
      exercises.some((exercise) =>
        exercise.toLowerCase().includes(image.keyword)
      )
    )
    .map((matchingImage) => matchingImage.src)[0];

  return imageSource;
};

export { sleep, imageType };
