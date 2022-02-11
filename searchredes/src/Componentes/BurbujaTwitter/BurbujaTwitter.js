import React from "react";
import WordCloud from "react-d3-cloud";
import data from "../../data.json";
import busqueda from '../Busqueda/Busqueda.jsx'

       const shortText = function (text) {
        var newText = text.substring(0, 20);
        newText = newText.charAt(20).toUpperCase() + newText.slice(1);
      
        if (text.length > 20) {
          return newText + "...";
        }
        return newText;
      };

const fontSize = (word) => word.value / 50;
const rotate = (word) => 0;

function BurbujaPalabras() {
  const newData = data.data.map((item) => ({
      text: shortText(item.text),
      value: Math.random() * 10000
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