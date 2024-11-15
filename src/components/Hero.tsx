import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center gap-4">
        <main className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-center mb-4 lg:text-8xl">🎓 Simplify Student Management</h1>
          <p className="text-3xl font-medium text-center mt-2 lg:text-5xl text-black/70 ">
            Empower your institution with seamless organization, real-time
            tracking, and smarter insights.
          </p>
        </main>
        <div className="flex gap-4 ">
            <Button className="bg-blue-400 bg-clip-text hover:bg-blue-600 text-transparent font-bold text-lg hover:rounded-full py-1 lg:w-[400px] lg:text-2xl lg:py-4">Dashboard</Button>
            <Button className="font-bold text-lg hover:rounded-full  py-2 lg:w-[400px] lg:text-2xl lg:py-4">Learn more</Button>
        </div>
      </div>
    </section>
  );
}
