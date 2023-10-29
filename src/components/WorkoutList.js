import Link from "next/link";
import { listWorkouts } from "../services/serviceWorkouts";
import { sleep } from "@/utils/common";
import WorkoutItem from "./WorkoutItem";

export default async function WorkoutList({ pageSize }) {
  const workouts = await listWorkouts(pageSize);
  await sleep(2000);

  return (
    <section className="container mx-auto px-16 mb-8">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {workouts &&
          workouts.map((wod) => <WorkoutItem key={wod.id} wod={wod} />)}
      </div>
      {pageSize > 0 && (
        <div className="flex items-center justify-center my-8">
          <Link
            href="/workouts"
            className="text-[#C0C8D4] text-lg hover:text-white transition ease-in-out duration-30000"
          >
            Ver todos los workouts
          </Link>
        </div>
      )}
    </section>
  );
}
