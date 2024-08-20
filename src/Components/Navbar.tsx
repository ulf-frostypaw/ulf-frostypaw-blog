import NavLink from "./tools/NavLink";
function Navbar() {
  return (
    <nav className="w-full sticky top-0 bg-white shadow-md mb-4 z-50">
      <header className="max-w-screen-lg mx-auto flex items-center justify-between py-8">
        <div>
          <h1>
            <NavLink to={"/"}>Ulf FrostyPaw</NavLink>
          </h1>
        </div>
        <div>
          <ul className="flex items-center">
            <li className="gap-4 flex ">
              <NavLink to={"/projects"}>Proyectos</NavLink>
              {/* <NavLink to={"/about"}>Sobre m&iacute;</NavLink> */}
            </li>
          </ul>
        </div>
      </header>
    </nav>
  );
}

export default Navbar;
