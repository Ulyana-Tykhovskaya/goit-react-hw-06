import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter);

  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(
    (contact) =>
      typeof contact.name === "string" &&
      contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul>
      {visibleContacts.map(({ id, name, phone }) => (
        <li key={id}>
          {name}: {phone}
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
