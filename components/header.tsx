import React from "react";
import Link from "next/link";
import { Container } from "./container";
import { ThemeContext } from "./theme";
import { Icon } from "./icon";
import { useRouter } from "next/router";

export const Header = ({ data }) => {
  const theme = React.useContext(ThemeContext);

  const headerColor = {
    default:
      "text-black dark:text-white from-gray-50 to-white dark:from-gray-700 dark:to-gray-800",
    primary: {
      blue: "text-white from-blue-300 to-blue-500",
      teal: "text-white from-teal-400 to-teal-500",
      green: "text-white from-green-400 to-green-500",
      red: "text-white from-red to-red",
      //red: "text-white from-#B91C1C to-#B91C1C",
      pink: "text-white from-pink-400 to-pink-500",
      purple: "text-white from-purple-400 to-purple-500",
      orange: "text-white from-orange-400 to-orange-500",
      yellow: "text-white from-yellow-400 to-yellow-500",
    },
  };

  const headerColorCss =
    data.color === "primary"
      ? headerColor.primary[theme.color]
      : headerColor.default;

  const activeItemClasses = {
    blue: "border-b-3 border-blue-200 dark:border-blue-700",
    teal: "border-b-3 border-teal-200 dark:border-teal-700",
    green: "border-b-3 border-green-200 dark:border-green-700",
    red: "border-b-3 border-red-300 dark:border-red-700",
    pink: "border-b-3 border-pink-200 dark:border-pink-700",
    purple: "border-b-3 border-purple-200 dark:border-purple-700",
    orange: "border-b-3 border-orange-200 dark:border-orange-700",
    yellow: "border-b-3 border-yellow-300 dark:border-yellow-600",
  };

  const router = useRouter();

  return (
    <div className="bg-white">
      <Container className="py-0 relative z-10 max-w-8xl">
        <div className="flex items-center">
          <h4 className="mx-auto select-none text-2xl md:text-3xl lg:text-4xl font-light tracking-widest my-4 uppercase">
            <Link href="/" passHref>
              <a className="flex items-center">Dreamineering</a>
            </Link>
          </h4>
        </div>
      </Container>
    </div>
  );
};
