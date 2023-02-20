import { styled } from "../../styles/stitches.config";
import { Link } from "../../styles/Texts";

export const NavigationContainer = styled("div", {
  position: "fixed",
  width: "100%",
  minHeight: 80,
  zIndex: 5,
  display: "flex",
  alignItems: "center",
  padding: "0 $1",
  justifyContent: "space-between",
  backdropFilter: "blur(5px)",
  borderBottom: "2px solid $brand2",
  "@mobileSmall": {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "20px $1",
  },
});

export const Nav = styled("nav", {
  display: "flex",
  height: "100%",
  alignItems: "center",
  gap: "$1",
  "@mobileSmall": {
    display: "none",
  },
});

export const NavMobile = styled("nav", {
  display: "none",
  height: "100%",
  gap: "$1",
  flexDirection: "column",
  alignSelf: "flex-start",
  "@mobileSmall": {
    display: "flex",
  },
});

export const MobileMenuButton = styled("button", {
  display: "none",
  border: "none",
  cursor: "pointer",
  background: "$grey2",
  color: "$white",
  height: 40,
  width: 40,
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  padding: 10,
  borderRadius: 5,
  div: {
    height: 2,
    width: "100%",
    background: "$white",
  },
  "@mobileSmall": {
    display: "flex",
  },
});
