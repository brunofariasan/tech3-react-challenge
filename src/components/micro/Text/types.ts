import { ThemeType } from "@/styles/theme";
import { ReactNode } from "react";

type TextVariants =
  | "text-icon" 
  | "post-title"
  | "small-title-post"
  | "author"
  | "text-status"
  | "details-post"
  | "title"

type TextComponent =
  | "span"
  | "p"
  | "label"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export type TextProps = {
  variant?: TextVariants;
  color?: keyof ThemeType["colors"];
  richText?: boolean;
  text?: string;
  component?: TextComponent;
  textAlign?: "left" | "center" | "right" | "justify";
  dynamicHeader?: true | false;
  informationColor?: "white" | "black";
  children?: ReactNode;
  colorWhenFalse?: string;
  link?: string;
  fontSize?: number;
  height?: number;
};
