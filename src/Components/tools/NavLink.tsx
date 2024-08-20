import React from "react";
import { Link } from "react-router-dom";
interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  props?: any;
}

function NavLink({ to, children, className, ...props }: NavLinkProps) {
  // const pathname = useLocation(); // como poner que /projects se active y como /little-space se active en cada caso por separado
  return (
    <Link
    className={`hover:underline ${className}`}
      /* className={`hover:underline ${
        pathname.pathname === "/projects" ? "font-bold underline" : ""
      } ${pathname.pathname === "/little-space" ? "font-bold underline" : ""}`} */
      {...props}
      to={import.meta.env.VITE_APP_URL + to}
    >
      {children}
    </Link>
  );
}

export default NavLink;
