import WorkoutList from "../components/WorkoutList";

export default function Home() {
  return (
    <>
      <WorkoutList pageSize={9} />
    </>
  );
}
