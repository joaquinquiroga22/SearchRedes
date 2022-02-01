import React from "react";
import WordCloud from "react-d3-cloud";
import data from "../../data.json";

       const shortText = function (text) {
        var newText = text.substring(0, 40);
        newText = newText.charAt(30).toUpperCase() + newText.slice(1);
      
        if (text.length > 40) {
          return newText + "...";
        }
        return newText;
      };

const fontSize = (word) => word.value / 40;
const rotate = (word) => (word.value % 50) - 15;

function BurbujaPalabras() {
  const newData = data.data.map((item) => ({
      text: shortText(item.text),
      value: Math.random() * 1000
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