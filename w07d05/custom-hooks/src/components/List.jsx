import useList from "../hooks/useList";
import useInput from "../hooks/useInput";

const List = () => {
  const newElementInput = useInput('');
  const { list, addElement, removeElement, emptyList } = useList();

  const mappedList = list.map((el, index) => {
    return (
      <div key={index}>
        <p>{el} <button onClick={() => removeElement(el)}>X</button></p>
      </div>
    );
  });

  return (
    <div>
      <h2>List Component</h2>
      <button onClick={emptyList}>Empty List</button>

      <div>
        <label>Add new thing:</label>
        <input 
          value={newElementInput.value}
          onChange={newElementInput.onChange}
        />
        <button onClick={() => addElement(newElementInput.value)}>Add!</button>
      </div>

      { mappedList }
    </div>
  );
};

export default List;
