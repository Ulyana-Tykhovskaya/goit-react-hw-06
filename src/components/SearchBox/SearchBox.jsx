import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/filtersSlice";
import { selectFilter } from "../../redux/filters/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={handleChange}
      placeholder="Search contacts..."
    />
  );
};

export default SearchBox;
