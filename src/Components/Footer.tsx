
import NavLink from "./tools/NavLink";
function Footer() {
  return (
    <footer className="flex flex-row flex-wrap items-center justify-center py-6 px-4 text-center border-t gap-y-6 gap-x-12 border-blue-gray-50 md:justify-between max-w-screen-lg mx-auto mt-4 w-full ">
      <p>Ulf FrostyPaw &copy; {new Date().getFullYear()}</p>
      <ul className="flex items-center">
        <li className="gap-4 flex">
          <NavLink to={"/little-space"}>Little Space</NavLink>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
