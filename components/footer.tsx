import React from "react";
import Link from "next/link";
// @ts-ignore
import TinaIconSvg from "../public/tina.svg";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Container } from "./container";
import { RawRenderer } from "./rawRenderer";
import { ThemeContext } from "./theme";
import { Icon } from "./icon";
import { IconDream } from "./icons/icon-dream";
import { IconLearn } from "./icons/icon-learn";
import { IconMeasure } from "./icons/icon-measure";
import { IconAct } from "./icons/icon-act";

export const Footer = ({ data, icon, rawData }) => {
  const theme = React.useContext(ThemeContext);
  const socialIconClasses = "h-7 w-auto";
  const socialIconColorClasses = {
    blue: "text-blue-500 dark:text-blue-400 hover:text-blue-300",
    teal: "text-teal-500 dark:text-teal-400 hover:text-teal-300",
    green: "text-green-500 dark:text-green-400 hover:text-green-300",
    red: "text-red-500 dark:text-red-400 hover:text-red-300",
    pink: "text-pink-500 dark:text-pink-400 hover:text-pink-300",
    purple: "text-purple-500 dark:text-purple-400 hover:text-purple-300",
    orange: "text-orange-500 dark:text-orange-400 hover:text-orange-300",
    yellow: "text-yellow-500 dark:text-yellow-400 hover:text-yellow-300",
    primary: "text-white opacity-80 hover:opacity-100",
  };

  const footerColor = {
    default:
      "text-gray-800 from-white to-gray-50 dark:from-gray-900 dark:to-gray-1000",
    primary: {
      blue: "text-white from-blue-500 to-blue-700",
      teal: "text-white from-teal-500 to-teal-600",
      green: "text-white from-green-500 to-green-600",
      red: "text-white from-#B91C1C to-#B91C1C",
      pink: "text-white from-pink-500 to-pink-600",
      purple: "text-white from-purple-500 to-purple-600",
      orange: "text-white from-orange-500 to-orange-600",
      yellow: "text-white from-yellow-500 to-yellow-600",
    },
  };

  const footerColorCss =
    data.color === "primary"
      ? footerColor.primary[theme.color]
      : footerColor.default;

  return (
    <footer className={`bg-white`}>
      <Container className="relative" size="small">
        <div className="flex">
          <p className="flex-1 text-center">
            Vision without action is a daydream
            <br />
            Action without vision is a nightmare
          </p>
        </div>
        <div className="flex my-8 mx-6 md:mx-24">
          <div className="w-1/4">
            <div className="w-1/3 mx-auto">
              <a href="https://mm.dreamineering.com/dream" target="_blank">
                <IconDream />
              </a>
            </div>
          </div>
          <div className="w-1/4 inline-block">
            <div className="w-1/3 mx-auto">
              <a href="https://mm.dreamineering.com/act" target="_blank">
                <IconAct />
              </a>
            </div>
          </div>
          <div className="w-1/4 inline-block">
            <div className="w-1/3 mx-auto">
              <a href="https://mm.dreamineering.com/measure" target="_blank">
                <IconMeasure />
              </a>
            </div>
          </div>
          <div className="w-1/4 inline-block">
            <div className="w-1/3 mx-auto">
              <a href="https://mm.dreamineering.com/learn" target="_blank">
                <IconLearn />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
