import { useState } from "react";

export default function SimpleButton() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
  };
  return (
    <>
      <button onClick={handleClick}>
        {clicked ? 'Clicked' : 'Click me'}
      </button>
    </>
  )
}