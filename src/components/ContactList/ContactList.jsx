// ContactList.jsx

import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/contactsSlice";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  if (contacts.length === 0) {
    return <p>No contacts</p>;
  }

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
