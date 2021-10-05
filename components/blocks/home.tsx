import * as React from "react";
// import Markdown from "react-markdown";
// import { Actions } from "../actions";
import { Container } from "../container";
import { Section } from "../section";
// import { ThemeContext } from "../theme";

export const Home = ({ data }) => {
  return (
    <Section color={data.color}>
      <Container
        size="large"
        className="max-w-xl grid grid-cols-1 items-center justify-center"
      >
        <div className="mx-10">
          <svg
            viewBox="0 0 512 512"
            fill="#B91C1C"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Dreamineering</title>
            <desc>Dream fueled engineering</desc>
            <path
              d="M170.335 250.616L221.814 38.4701H0L50.7073 250.616H170.335Z"
              fill=""
            />
            <path
              d="M141.218 512V299.854L363.032 405.927L141.218 512Z"
              fill=""
            />
            <path
              d="M444.135 249.665C456.681 261.288 462.953 275.657 462.953 292.769C462.953 310.205 456.593 325.138 443.874 337.569C431.154 350 415.733 356.215 397.612 356.215C379.839 356.215 364.68 350 352.135 337.569C339.589 325.138 333.316 310.205 333.316 292.769C333.316 275.334 339.502 260.885 351.873 249.423C364.245 237.96 379.491 232.229 397.612 232.229C416.082 232.229 431.589 238.041 444.135 249.665Z"
              fill=""
            />
            <path
              d="M356.83 212.146V204.327C356.83 191.021 358.302 180.218 361.247 171.919C364.191 163.619 368.573 156.04 374.395 149.181C380.216 142.322 393.297 130.251 413.639 112.966C424.479 103.912 429.899 95.6132 429.899 88.0684C429.899 80.5236 427.724 74.6593 423.375 70.4753C419.025 66.2914 412.435 64.1994 403.602 64.1994C394.1 64.1994 386.238 67.4231 380.015 73.8705C373.793 80.3179 369.811 91.5664 368.072 107.616L290.186 97.7395C292.862 68.3832 303.267 44.7545 321.4 26.8526C339.534 8.95079 367.335 0 404.806 0C433.98 0 457.533 6.24155 475.466 18.7248C499.822 35.5978 512 58.0948 512 86.2165C512 97.8767 508.855 109.125 502.565 119.962C496.276 130.799 483.429 144.037 464.024 159.675C450.508 170.65 441.976 179.463 438.43 186.117C434.884 192.77 433.11 201.446 433.11 212.146H356.83Z"
              fill=""
            />
          </svg>
        </div>
        {data.tagline && (
          <h2 className="text-lg sm:text-xl inline-block mx-auto mt-10 font-normal tracking-wide title-font uppercase">
            {data.tagline}
          </h2>
        )}
      </Container>
    </Section>
  );
};
