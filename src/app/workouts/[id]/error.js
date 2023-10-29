"use client";

import Link from "next/link";

export default function WorkoutError() {
  return (
    <div className="container mx-auto px-16">
      <div className="flex items-center justify-center flex-col gap-4 mt-16">
        <h1 className="text-3xl text-white">Error al cargar el workout</h1>

        <Link
          href="/workouts"
          className="text-[#C0C8D4] text-lg hover:text-white transition ease-in-out duration-30000"
        >
          Volver
        </Link>
      </div>
    </div>
  );
}
