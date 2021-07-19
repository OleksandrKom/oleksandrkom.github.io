import './Range.css';

function Range({ minVal, maxVal, getRangeVal, rangeVal}) {
  return (
    <div className="Range">
      <input type="range" className="slider" min={minVal} max={maxVal} value={ rangeVal } onChange={(ev) => getRangeVal(ev.target.value)}/>
    </div>
  );
}

export default Range;