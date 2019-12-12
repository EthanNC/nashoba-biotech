import React from "react"

import {COLORS, BORDER_RADIUS, GRADIENT } from "./constants"

const Button = ({ children }) => (
  <button
    style={{
      padding: ".5rem 2.5rem",
      color: COLORS.lightWhite,
      fontWeight: 600,
      background: GRADIENT,
      borderRadius: BORDER_RADIUS,
      borderWidth: 0,
      cursor: "pointer",
      margin:"2rem auto",
    }}
  >
    {children}
  </button>
)

export default Button