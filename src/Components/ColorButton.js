import React from 'react'

export default function ColorButton() {
  const [color, setColor] = React.useState('white');

  const changeColor = () => {
    const newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(newColor);
  }

  return (
    <button style={{ background: color }} onClick={changeColor}>
      Click to change color
    </button>
  );
}
