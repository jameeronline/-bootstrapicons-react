import * as React from "react";
const SvgBoundingBox = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="bounding-box_svg__bi bounding-box_svg__bi-bounding-box"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2zm6 1v2h2v6h-2v2H5v-2H3V5h2V3zm1-2h3v3h-3zm3 11v3h-3v-3zM4 15H1v-3h3zM1 4V1h3v3z" />
  </svg>
);
export default SvgBoundingBox;
