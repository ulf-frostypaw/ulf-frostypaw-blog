interface Props {
  text: string;

}

function Hgroup({ text }: Props) {
  return (
    <hgroup style={{ backgroundImage: `url(${import.meta.env.VITE_APP_URL}/ABDL-COVER.webp)` }} className="text-center py-8 mb-4 rounded-md bg-cover bg-center w-full shadow-md">
      <h1>{text}</h1>
    </hgroup>
  );
}

export default Hgroup;
