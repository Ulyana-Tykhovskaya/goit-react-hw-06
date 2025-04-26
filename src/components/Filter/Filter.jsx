import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/filter/filterSlice";
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" value={filter} onChange={handleChange} />
      </label>
    </div>
  );
};

export default Filter;
