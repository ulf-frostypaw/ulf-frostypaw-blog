import Hgroup from "../Components/Hgroup";
import Layout from "../Components/Layout";
import ProjectCard from "../Components/ProjectCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Index() {
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  const [posts, setPosts] = useState<
    {
      date: string | number | Date;
      title: string;
    }[]
  >([]);
  return (
    <Layout title="Home">
      <section className="flex gap-4 pb-4 items-center">
        <div>
          <h2 className="font-bold">Hola, soy</h2>
          <h1>Ulf FrostyPaw.</h1>
          <p>
            {" "}
            {/* MAXIMO 250 PALABRAS */}
            Con más de{" "}
            <span className="font-bold">cinco años de experiencia</span>, me
            especializo en el desarrollo de software web y móvil. Mi objetivo es{" "}
            <span className="font-bold">transformar su idea</span> en una
            <span className="font-bold"> solución efectiva</span> que
            simplifique sus desafíos diarios. Planifico, organizo y desarrollo
            su aplicación que aborde problemas reales de nuestra sociedad, con
            el fin de hacer su vida más{" "}
            <span className="font-bold">fácil, eficiente y ágil.</span>
          </p>
        </div>
        <LazyLoadImage
        src={import.meta.env.VITE_APP_URL + "/perfil.webp"}
        className="rounded-full max-w-[40%] aspect-square shadow-md"
        alt="Quirino Emmanuel selfie"
        />
        
      </section>
      <Hgroup text="Proyectos recientes" />
      <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
        {posts
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .slice(0, 3)
          .map((post: any, index: number) => (
            <ProjectCard key={index}>
              <img
                src="https://placehold.co/600x400"
                className="rounded-md w-full"
                alt=""
              />
              <h2 className="font-bold">{post.title}</h2>
              <p className="text-gray-500">{post.description}</p>
              <p className="text-gray-500">{post.date}</p>
              {post.source && (
                <Link
                  to={`${post.source}`}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Ver en GitHub
                </Link>
              )}
            </ProjectCard>
          ))}
      </div>
    </Layout>
  );
}

export default Index;
