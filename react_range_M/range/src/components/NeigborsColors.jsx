import './NeighborsColors.css';

function NeigborsColors({ rangeVal, colorsArr }) {
  const colorBefore = (rangeVal) => {
    let color = colorsArr[Number(rangeVal) - 1];
    if(color === undefined) return;
    return `${color[0]}, ${color[1]}`;
  }

  const colorAfter = (rangeVal) => {
    let color = colorsArr[Number(rangeVal) + 1];
    if(color === undefined) return;
    return `${color[0]}, ${color[1]}`;
  }

  return (
    <div className="NeigborsColors">
      Neigbors:
      <p>color before: { colorBefore(rangeVal) } </p>
      <p>color after: { colorAfter(rangeVal) } </p>
    </div>
  );
}

export default NeigborsColors;