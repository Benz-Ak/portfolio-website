import React from "react";

export default function Container({ children, className }) {
  return <section className={`px-6 py-4 ${className} `}>{children}</section>;
}
