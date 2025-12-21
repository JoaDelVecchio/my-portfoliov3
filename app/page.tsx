import Home from "@/components/Home";
import NavBar from "@/components/NavBar";
import ProjectsMobile from "@/components/ProjectsMobile";

export default function page() {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      <header className="hidden h-screen md:flex md:shrink-0">
        <NavBar />
      </header>
      <main className="flex-1">
        <Home />
        <ProjectsMobile />
      </main>
    </div>
  );
}
