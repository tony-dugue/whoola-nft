import * as React from "react"

const SvgComponent = (props) => (
  <svg
    viewBox="0 0 420 1600"
    fill={props.fill || "none"}
    {...props}
  >
    <path
      d="M149 1c-30 19-61 51-88 95l-17 29C31 149-4 209 2 273c5 66 41 88 59 96 49 22 101 1 149-28 15-9 27-17 42-31 4-5 17-16 12-23-1-4-9-1-10-1-15 7-30 20-44 33-13 12-23 22-34 38-8 11-20 29-23 56-5 42 21 65 28 74 2 2 33 27 25 46-5 13-24 35-28 39-19 23-201 242-134 230 98-17 196-5 254 83 108 164 155 488 199 486 43-2 76-372 97-391 22-19 38 82 67 84"
      stroke="currentColor"
      strokeLinecap="round"
      className="svg-path"
    />
  </svg>
)

export default SvgComponent
