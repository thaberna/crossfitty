import Image from "next/image";
import Link from "next/link";
import { infoWorkout } from "@/services/serviceWorkouts";
import { imageType } from "@/utils/common";

export default async function WorkoutInfo({ params }) {
  const { id } = params;
  const wod = await infoWorkout(id);
  const { title, how, type, exercises } = wod;
  const image = imageType(exercises);

  return (
    <div className="container mx-auto px-16">
      <div className="flex items-center justify-center">
        <div className="bg-gradient-to-b from-[#1F264F] to-[#602C3F] p-3 rounded-lg">
          <div className="bg-[#11162A] p-6 rounded-lg">
            {wod && (
              <div className="text-white">
                <Image
                  className="rounded-xl mb-6"
                  src={image}
                  width={500}
                  height={300}
                  alt={title}
                />
                <h1 className="text-4xl">{title}</h1>
                <div className="flex items-center justify-between">
                  <h2>{how}</h2>
                  <h3 className="text-[#3E465A]">{type}</h3>
                </div>
                <div className="my-4 grid rounded-lg border-2 border-[#3E465A] divide-y-2 divide-[#3E465A]">
                  {exercises.map((exercise, index) => (
                    <div className="px-4 py-3" key={index}>
                      {exercise}
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="flex items-center justify-center mt-4">
              <Link
                href="/workouts"
                className="text-[#C0C8D4] text-lg hover:text-white transition ease-in-out duration-30000"
              >
                Volver
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
