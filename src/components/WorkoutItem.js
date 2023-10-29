import Link from "next/link";

export default function WorkoutItem({ wod }) {
  const { id, title, how, exercises, type } = wod;

  return (
    <Link
      href={`/workouts/${id}`}
      className="rounded-lg p-4 md:p-6 bg-gradient-to-r from-[#111628] to-[#1C1B46] hover:to-[#11162A] hover:cursor-pointer"
    >
      <h3 className="text-[#C0C8D4] leading-loose text-xl">{title}</h3>
      <h4 className="text-[#3E465A]">{how}</h4>
      <div className="flex items-start justify-start flex-col md:flex-row gap-2 md:gap-8 mt-4 text-[#3E465A]">
        <div className="flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#3E465A"
            viewBox="0 0 24 24"
          >
            <path d="M20.98 11.802a.995.995 0 0 0-.738-.771l-6.86-1.716 2.537-5.921a.998.998 0 0 0-.317-1.192.996.996 0 0 0-1.234.024l-11 9a1 1 0 0 0 .39 1.744l6.719 1.681-3.345 5.854A1.001 1.001 0 0 0 8 22a.995.995 0 0 0 .6-.2l12-9a1 1 0 0 0 .38-.998z"></path>
          </svg>
          <span>
            {exercises.length == 1
              ? `${exercises.length} workout`
              : `${exercises.length} workouts`}
          </span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#3E465A"
            viewBox="0 0 24 24"
          >
            <circle cx="17" cy="4" r="2"></circle>
            <path d="M15.777 10.969a2.007 2.007 0 0 0 2.148.83l3.316-.829-.483-1.94-3.316.829-1.379-2.067a2.01 2.01 0 0 0-1.272-.854l-3.846-.77a1.998 1.998 0 0 0-2.181 1.067l-1.658 3.316 1.789.895 1.658-3.317 1.967.394L7.434 17H3v2h4.434c.698 0 1.355-.372 1.715-.971l1.918-3.196 5.169 1.034 1.816 5.449 1.896-.633-1.815-5.448a2.007 2.007 0 0 0-1.506-1.33l-3.039-.607 1.772-2.954.417.625z"></path>
          </svg>
          <span>{type}</span>
        </div>
      </div>
    </Link>
  );
}
