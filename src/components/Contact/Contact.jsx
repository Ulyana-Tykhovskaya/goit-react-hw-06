import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;
