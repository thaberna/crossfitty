import { countWorkouts } from "../services/serviceWorkouts";

export default async function Infobar() {
  const { benchmarks, wods } = await countWorkouts();

  return (
    <section className="bg-[#202939]">
      <div className="container mx-auto px-16">
        <div className="py-2 flex flex-col items-center justify-center md:items-start md:justify-start md:flex-row">
          <div className="border-[#202939] color-[#C0C8D4] border-8 bg-[#030303] rounded-2xl mt-[-64px] z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              fill="#ffffff"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C5.505 2 2 6.637 2 11c0 2.129 1.009 3.979 3 5.508V21h3v-3h2v3h4v-3h2v3h3v-4.493c1.991-1.528 3-3.379 3-5.507 0-4.363-3.505-9-10-9zM8 13c-1.121 0-2-1.098-2-2.5S6.879 8 8 8s2 1.098 2 2.5S9.121 13 8 13zm8 0c-1.121 0-2-1.098-2-2.5S14.879 8 16 8s2 1.098 2 2.5-.879 2.5-2 2.5z"></path>
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center gap-8 w-full mt-2 md:flex-row">
            <div className="bg-[#11162A] rounded-lg grid grid-cols-2 py-2 divide-x divide-[#3E495B] text-center">
              <div className="text-[#3E495B] px-4 py-2">Benchmarks</div>
              <div className="text-[#C0C8D4] py-2">{benchmarks}</div>
            </div>
            <div className="bg-[#11162A] rounded-lg grid grid-cols-2 py-2 divide-x divide-[#3E495B] text-center">
              <div className="text-[#3E495B] px-4 py-2">Workouts</div>
              <div className="text-[#C0C8D4] py-2">{wods}</div>
            </div>
          </div>
        </div>
        <div className="pt-4 pb-8 flex flex-col items-start">
          <h1 className="text-[#C0C8D4] text-3xl leading-normal">Crossfitty</h1>
          <h2 className="text-[#3E465A] text-lg">
            Crossfit Benchmarks Workouts
          </h2>
        </div>
      </div>
    </section>
  );
}
