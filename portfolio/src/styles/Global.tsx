import { ReactNode } from "react";
import { globalCss } from "./stitches.config";

export const colors = {
  color: {
    orange: { color: "$orange" },
    grey0: { color: "$grey0" },
    grey1: { color: "$grey1" },
    grey2: { color: "$grey2" },
    grey3: { color: "$grey3" },
    grey4: { color: "$grey4" },
    white: { color: "$white" },
  },
};

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontSize: "$regular",
  },
  html: {
    fontFamily: "Inter",
    scrollBehavior: "smooth",
  },
});

interface GlobalStyleProps {
  children: ReactNode;
}

export const GlobalStyles: React.FC<GlobalStyleProps> = ({ children }) => {
  globalStyles();
  return <>{children}</>;
};
