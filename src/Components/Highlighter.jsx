import React from "react";

const HighCompo = ({ highlight, value }) => {
  return <p>{getHighlightedText(value, highlight)}</p>;
};

function getHighlightedText(text, highlight) {
  var parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return parts.map((part, index) => (
    <React.Fragment key={index}>
      {part === highlight ? (
        <b className='text-emerald-900 bg-emerald-100 font-semibold rounded'>
          {part}
        </b>
      ) : (
        part
      )}
    </React.Fragment>
  ));
}

export default HighCompo;
