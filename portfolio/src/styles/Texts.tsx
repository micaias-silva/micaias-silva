import { colors } from "./Global";
import { styled } from "./stitches.config";

const baseText = {
  fontSize: "$regular",
  fontWeight: "$regular",
  color: "$grey1",

  variants: {
    ...colors,
    weight: {
      light: { fontWeight: "$light" },
      regular: { fontWeight: "$regular" },
      medium: { fontWeight: "$medium" },
      bold: { fontWeight: "$bold" },
    },
  },
};

export const Text = styled("p", {
  ...baseText,
  fontWeight: "$light",
  "@mobile": {
    fontSize: "$small",
  },
});

export const Heading1 = styled("h1", {
  ...baseText,
  lineHeight: "$title",
  fontSize: "$larger6",
});

export const Heading2 = styled("h2", {
  ...baseText,
  lineHeight: "$title",
  fontSize: "$larger5",
});

export const Heading3 = styled("h3", {
  lineHeight: "$title",
  ...baseText,
  fontSize: "$larger4",
});

export const Heading4 = styled("h4", {
  ...baseText,
  lineHeight: "$title",
  fontSize: "$larger3",
});

export const Heading5 = styled("h5", {
  ...baseText,
  lineHeight: "$title",
  fontSize: "$larger2",
});

export const Heading6 = styled("h6", {
  ...baseText,
  lineHeight: "$title",
  fontSize: "$larger1",
});

export const Label = styled("label", {
  ...baseText,
  color: "$gray1",
  fontWeight: "$medium",
  fontSize: "$small",
});
