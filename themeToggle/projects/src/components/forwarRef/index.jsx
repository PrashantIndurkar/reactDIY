import React from "react";

const ForwardRef = () => {
  // Create a ref using useRef hook
  const inputRef = useRef(null);

  // Define a function to focus the input when the button is clicked
  const focusInput = () => {
    // Use the ref to focus the input element
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h2>Using forwardRef in React</h2>
      {/* Pass the created ref to the MyInput component */}
      <MyInput ref={inputRef} />
      {/* Button to trigger the focusInput function */}
      <button onClick={focusInput}>Focus the Input</button>
    </div>
  );
};

export default ForwardRef;
