import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li>
      {contact.name}: {contact.number}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Contact;
