import React from "react"

export default ({ children, title = "Tip", color = "--primary" }) => {
  return (
    <div
      className="my-4 p-4"
      style={{ background: "#fff", border: `5px solid var(${color})` }}
    >
      <h4>{title}</h4>
      {children}
    </div>
  )
}
