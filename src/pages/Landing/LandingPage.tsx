import { Categories } from "./Categories";
import { ExploreHotels } from "./ExploreHotels";
import { FeaturedRooms } from "./FeaturedRooms";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Navigation } from "./Navigation";
import { PremiumServices } from "./PremiumServices";
import { Reviews } from "./Reviews";
import { StatsVideo } from "./StatsVideo";
import { TopBar } from "./TopBar";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navigation />

      <section id="hero">
        <Hero />
      </section>

      <section id="categories">
        <Categories />
      </section>

      <section id="rooms">
        <FeaturedRooms />
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

