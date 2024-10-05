import RenderModel from "@/components/three/render";
import Venus from "@/components/three/models/planet";
import Img from "@/public/home/herobg.jpg";

const GallerySection = () => {
  return (
    <section
      className="border p-2 flex-1 bg-cover bg-center relative h-screen "
      style={{ backgroundImage: `url(${Img.src})` }}
    >
      <h1 className="relative z-10 text-white">Gallery Section</h1>

      {/* Render the 3D Sphere */}
      <RenderModel>
        <Venus position={[0, 0, 0]} />
      </RenderModel>
    </section>
  );
};

export default GallerySection;
