import type { ReactNode } from "react";
import "./Header.css";

interface HeaderProps {
  logoUrl: string;
  children?: ReactNode;
}

const Header = ({ logoUrl, children }: HeaderProps) => {
  return (
    <header className="header">
      <img src={logoUrl} alt="Logo" className="header-logo" />
      <div className="header-content">{children}</div>
    </header>
  );
};

export default Header;