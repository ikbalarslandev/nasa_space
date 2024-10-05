import RenderModel from "@/components/three/render";
import Venus from "@/components/three/models/planet";

const GallerySection = () => {
  return (
    <section className="border p-2 flex-1">
      <h1>Gallery Section</h1>
      {/* Render the 3D Sphere */}
      <RenderModel>
        <Venus position={[0, 0, 0]} />
      </RenderModel>
    </section>
  );
};

export default GallerySection;
