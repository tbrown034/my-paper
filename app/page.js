import MobileNav from "./FrontPage/MobileNav";
import Date from "./FrontPage/Date";
import Advertisements from "./FrontPage/Advertisement";
import Footer from "./FrontPage/Footer";

export default function Home() {
  return (
    <main>
      <MobileNav />
      <Date />
      <Advertisements />
      <Footer />
    </main>
  );
}
