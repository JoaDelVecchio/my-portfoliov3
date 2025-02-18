import Home from "@/components/Home";
import NavBar from "@/components/NavBar";

export default function page() {
  return (
    <div className="flex min-h-screen w-full flex-col-reverse md:flex-row">
      <header>
        <NavBar />
      </header>
      <main className="flex-1">
        <Home />
      </main>
    </div>
  );
}
