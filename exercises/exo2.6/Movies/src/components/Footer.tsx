import type { ReactNode } from "react";
import "./Footer.css"

interface FooterProps {
  logoUrl: string;
  children?: ReactNode;
}

const Footer = ({ logoUrl, children }: FooterProps) => {
  return (
    <footer className="footer">
      <img src={logoUrl} alt="Logo" className="footer-logo" />
      <div className="footer-content">{children}</div>
    </footer>
  );
};

export default Footer