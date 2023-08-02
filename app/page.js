import MobileNav from "./FrontPage/MobileNav";
import Date from "./FrontPage/Date";
import Advertisements from "./FrontPage/Advertisement";
import Footer from "./FrontPage/Footer";

export default function Home() {
  return (
    <main className="p-4">
      <MobileNav />
      <Date />
      <Advertisements />
      <Footer />
    </main>
  );
}
