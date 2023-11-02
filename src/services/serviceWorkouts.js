const URL_API =
  "https://raw.githubusercontent.com/thaberna/crossfity/main/src/constants/benchmarks.json";

const getWorkouts = async (id) => {
  const response = await fetch(URL_API);
  const workouts = await response.json();

  if (id) return workouts.wods.find((wod) => wod.id === id);
  return workouts.wods;
};

const listWorkouts = async (pageSize = 0) => {
  const workouts = await getWorkouts();

  if (pageSize === 0) pageSize = workouts.length;
  return workouts.slice(0, pageSize);
};

const infoWorkout = async (id) => {
  return await getWorkouts(id);
};

const countWorkouts = async () => {
  const workouts = await getWorkouts();

  const totalBenchmarks = workouts.length;
  const totalWods = workouts.reduce(
    (accumulator, wod) => accumulator + wod.exercises.length,
    0
  );

  return { benchmarks: totalBenchmarks, wods: totalWods };
};

const searchWorkouts = async (search) => {
  const workouts = await getWorkouts();

  const filteredWorkouts = workouts.filter((wod) => {
    return wod.exercises.find((exercise) =>
      exercise.toLowerCase().includes(search.toLowerCase())
    );
  });
  if (filteredWorkouts.length > 0) {
    return filteredWorkouts;
  } else {
    return [];
  }
};

export { listWorkouts, infoWorkout, countWorkouts, searchWorkouts };
