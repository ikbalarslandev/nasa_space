import BannerSection from "@/components/home/banner";
import HeroSection from "@/components/home/hero";
import MissionSection from "@/components/home/mision";
import VisionSection from "@/components/home/vision";
import GallerySection from "@/components/home/gallery";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col ">
      <HeroSection />
      <BannerSection />
      <MissionSection />
      <VisionSection />
      <GallerySection />
    </div>
  );
}
