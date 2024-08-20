import Layout from "../../Components/Layout";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

function ReadPost() {
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setMarkdown(data))
      .catch((error) => console.log(error));
  }, []);
  const [markdown, setMarkdown] = useState("");

  return (
    <Layout title="Hola"> <ReactMarkdown children={markdown} /></Layout>
  );
}

export default ReadPost;
