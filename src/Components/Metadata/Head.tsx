import { Helmet } from "react-helmet-async";
interface Props {
  title: string;
}
function Head({ title }: Props) {
  return (
    <Helmet>
      <title>{title} / Ulf FrostyPaw</title>
    </Helmet>
  );
}

export default Head;
