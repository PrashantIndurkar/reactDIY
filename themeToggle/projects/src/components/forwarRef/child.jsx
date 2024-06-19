const MyInput = forwardRef((props, ref) => {
  return (
    // Use the forwarded ref on the input element
    <input type="text" ref={ref} placeholder="Enter text here" />
  );
});
