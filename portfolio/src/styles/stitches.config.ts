import { createStitches } from "@stitches/react";

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      brand1: "#6E76C5",
      brand2: "#848FED",
      brand3: "#5E66B1",
      grey1: "#0C0C0C",
      grey2: "#1F1F1F",
      grey3: "#232323",
      grey4: "#868E96",
      white: "#FFFFFF",
    },
    fontSizes: {
      small: "0.875rem",
      regular: "1.00rem",
      larger1: "1.25rem",
      larger2: "1.50rem",
      larger3: "1.75rem",
      larger4: "2.00rem",
      larger5: "2.25rem",
      larger6: "2.75rem",
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    lineHeights: {
      title: 1,
    },
    space: {
      1: "1rem",
      2: "1.5rem",
      3: "2rem",
      4: "4rem",
    },
  },
  media: {
    mobile: "(max-width: 768px)",
    mobileSmall: "(max-width: 560px)",
  },
});
