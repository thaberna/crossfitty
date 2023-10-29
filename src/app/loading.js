import Placeholder from "@/components/Placeholder";

export default async function LoadingHome() {
  return (
    <section className="container mx-auto px-16 mb-8">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {Array.from(Array(9).keys()).map((index) => (
          <Placeholder key={index} />
        ))}
      </div>
      <div className="flex items-center justify-center my-10">
        <span className="bg-slate-500 h-6 text-slate-500 rounded-xl py-2 px-8">
          Ver todos los workouts
        </span>
      </div>
    </section>
  );
}
