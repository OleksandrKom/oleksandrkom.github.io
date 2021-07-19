import './App.css';
import React, {useState} from 'react';
import colors from './colors.json';
import Range from './Range';
import CurrentColor from './CurrentColor';
import NeigborsColors from './NeigborsColors';


function App() {
  
  let colorsArr = [];
  
  const getColorsFromJson = (file) => {
    const keysVal = Object.entries(file);
    return  keysVal;
  }

  colorsArr = getColorsFromJson(colors);

  const generStarRangeVal = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const startRangeVal = generStarRangeVal(0, (colorsArr.length - 1));

  let [rangeVal, setRangeVal] = useState(startRangeVal);

  const getRangeVal = (value) => {
    console.log("value: ", value);
    setRangeVal(value);
  }

  let color = colorsArr[rangeVal];
  let colorName = "";
  let colorCode = "";

  if(color !== undefined) {
    colorName = color[0];
    colorCode = color[1];
  }

  return (
    <div className="App">
      <Range minVal={0} maxVal={colorsArr.length - 1} getRangeVal={ getRangeVal } rangeVal = { rangeVal } />
      <CurrentColor color={ colorName } code={ colorCode }/>
      <NeigborsColors rangeVal={ rangeVal } colorsArr={ colorsArr }/>
    </div>
  );
}

export default App;
