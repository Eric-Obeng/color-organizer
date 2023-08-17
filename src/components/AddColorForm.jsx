/* eslint-disable react/prop-types */
import useInput from "./hooks";


const AddColorForm = ({ onNewColor = (f) => f }) => {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    onNewColor(titleProps.value, colorProps.value)
    resetTitle()
    resetColor()
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title"
        required
      />
      <input
        {...colorProps}
        type="color"
        required
        title="click to select color"
      />
      <button>ADD</button>
    </form>
  );
};

export default AddColorForm;
