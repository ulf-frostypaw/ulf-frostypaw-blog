import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { useEffect, useState } from "react";
import Hgroup from "../../Components/Hgroup";
import ProjectCard from "../../Components/ProjectCard";

function ListPosts() {
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  const [posts, setPosts] = useState<{
    date: string | number | Date; title: string 
}[]>([]);
  //console.log(posts);
  return (
    <Layout title="Todos los proyectos">
      <Hgroup text="Proyectos" />
      <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
        {posts
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
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

export default ListPosts;
