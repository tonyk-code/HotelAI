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
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navigation />
      <Hero />
      <Categories />
      <FeaturedHotels />
      <PremiumServices />
      <ExploreHotels />
      <StatsVideo />
      <Reviews />
      <Footer/>
    </div>
  );
}
