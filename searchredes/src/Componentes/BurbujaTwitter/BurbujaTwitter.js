import React from "react";
import WordCloud from "react-d3-cloud";
import data from "../../data.json";
import busqueda from '../Busqueda/Busqueda.jsx'

       const shortText = function (text) {
        var newText = text.substring(0, 30);
        newText = newText.charAt(30).toUpperCase() + newText.slice(0);
      
        if (text.length > 30) {
          return newText + "...";
        }
        return newText;
      };

const fontSize = (word) => word.value / 60;
const rotate = (word) => 0;

function BurbujaPalabras() {
  const newData = data.data.map((item) => ({
      text: shortText(item.text),
      value: Math.random(item.value) * 10000
    }));
   
  return (
    <WordCloud
      width={1100}
      height={900}
      data={newData}
      fontSize={fontSize}
      rotate={rotate}
      padding={20}
    />
  );
}
export default BurbujaPalabras;