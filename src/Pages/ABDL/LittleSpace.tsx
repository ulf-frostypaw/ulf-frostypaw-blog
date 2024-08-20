import Layout from "../../Components/Layout";
import Hgroup from "../../Components/Hgroup";
import { LazyLoadImage } from "react-lazy-load-image-component";

function LittleSpace() {
  return (
    <Layout title="Hola">
      <Hgroup text="Little Space" />
      <div className="grid-container">
        <LazyLoadImage
          src={import.meta.env.VITE_PLACEHOLDER_SRC}
          alt="placeholder"
          className="rounded-md object-cover"
          placeholderSrc={import.meta.env.VITE_PLACEHOLDER_SRC}
        />
        <LazyLoadImage
          src="https://placehold.co/600x400"
          alt="placeholder"
          className="rounded-md object-cover"
        />
        <LazyLoadImage
          src="https://placehold.co/600x400"
          alt="placeholder"
          className="rounded-md object-cover"
        />
        <LazyLoadImage
          src="https://placehold.co/600x400"
          alt="placeholder"
          className="rounded-md object-cover"
        />
        <LazyLoadImage
          src="https://placehold.co/600x400"
          alt="placeholder"
          className="rounded-md object-cover"
        />
        <LazyLoadImage
          src="https://placehold.co/600x400"
          alt="placeholder"
          className="rounded-md object-cover"
        />
        <LazyLoadImage
          src="https://placehold.co/600x400"
          alt="placeholder"
          className="rounded-md object-cover"
        />

        <LazyLoadImage
          src="https://placehold.co/600x400"
          alt="placeholder"
          className="rounded-md object-cover"
        />
        <LazyLoadImage
          src="https://placehold.co/600x400"
          alt="placeholder"
          className="rounded-md object-cover"
        />
        <LazyLoadImage
          src="https://placehold.co/600x400"
          alt="placeholder"
          className="rounded-md object-cover"
        />
        <LazyLoadImage
          src="https://placehold.co/600x400"
          alt="placeholder"
          className="rounded-md object-cover"
        />
        <LazyLoadImage
          src="https://placehold.co/600x400"
          alt="placeholder"
          className="rounded-md object-cover"
        />
        <LazyLoadImage
          src="https://placehold.co/600x400"
          alt="placeholder"
          className="rounded-md object-cover"
        />
      </div>
    </Layout>
  );
}

export default LittleSpace;
