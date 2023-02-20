import { useState } from "react";
import { Link, Text } from "../../styles/Texts";
import {
  MobileMenuButton,
  Nav,
  NavigationContainer,
  NavMobile,
} from "./styles";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <NavigationContainer>
      <Nav>
        <Link href="#introduction">Introduction</Link>
        <Link href="#about-me">About Me</Link>
        <Link href="#contact">Contact</Link>
        <Link href="#social-media">Social Media</Link>
      </Nav>
      <Nav>
        <Link>
          <FaLinkedinIn size="24px" />
        </Link>
        <Link>
          <AiOutlineGithub size="24px" />
        </Link>
      </Nav>

      <MobileMenuButton onClick={() => setOpen(!open)}>
        {!open ? (
          <>
            <div />
            <div />
            <div />
          </>
        ) : (
          <MdOutlineClose />
        )}
      </MobileMenuButton>

      {open ? (
        <NavMobile>
          <Link href="#introduction">Introduction</Link>
          <Link href="#about-me">About Me</Link>
          <Link href="#contact">Contact</Link>
          <Link href="#social-media">Social Media</Link>
        </NavMobile>
      ) : null}
    </NavigationContainer>
  );
};

export default Navigation;
