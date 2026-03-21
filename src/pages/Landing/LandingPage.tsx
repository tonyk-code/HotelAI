import { Categories } from "./Categories";
import { ExploreHotels } from "./ExploreHotels";
import { FeaturedHotels } from "./FeaturedHotels";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Navigation } from "./Navigation";
import { PremiumServices } from "./PremiumServices";
import { Reviews } from "./Reviews";
import { StatsVideo } from "./StatsVideo";
import { TopBar } from "./TopBar";

export default function LandingPage() {
  return (
    /* THIS IS THE KEY PART */
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navigation />

      {/* The 'id' must match the 'href' in your navLinks array */}
      <section id="hero">
        <Hero />
      </section>

      <section id="categories">
        <Categories />
      </section>

      <section id="hotels">
        <FeaturedHotels />
      </section>

      <section id="services">
        <PremiumServices />
      </section>
      <ExploreHotels />

      <section id="stats">
        <StatsVideo />
      </section>

      <section id="reviews">
        <Reviews />
      </section>

      <Footer />
    </div>
  );
}
