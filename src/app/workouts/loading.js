import Placeholder from "@/components/Placeholder";

export default function WorkoutsLoading() {
  return (
    <section className="container mx-auto px-16 mb-8">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {Array.from(Array(43).keys()).map((index) => (
          <Placeholder key={index} />
        ))}
      </div>
    </section>
  );
}
