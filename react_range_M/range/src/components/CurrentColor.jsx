import './CurrentColor.css';

function CurrentColor({ color, code }) {
  return (
    <div className="CurrentColor">
      <p>current color: { color } <span className="color" style={ {background: code} }></span></p>
    </div>
  );
}

export default CurrentColor;