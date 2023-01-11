import React from "react";

const Highlighter = ({ children, highlight }) => {
  if (!highlight) return children;
  const regexp = new RegExp(highlight, "gi");
  const matches = children.match(regexp);
  let parts = children.split(new RegExp(`${highlight.replace()}`, "gi"));
  let i;

  for (i = 0; i < parts.length; i++) {
    if (i !== parts.length - 1) {
      let match = matches[i];
      while (parts[i + 1] === "") {
        match += matches[++i];
      }
      parts[i] = (
        <span key={i} className='font-bold bg-emerald-100 text-emerald-900'>
          {match}
        </span>
      );
    }
  }
  return (
    <div key={i} className='w-full text-left'>
      {parts}
    </div>
  );
};

export default Highlighter;
