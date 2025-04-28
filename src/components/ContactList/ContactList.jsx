import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/contactsSlice";
import { selectFilter } from "../../redux/filter/filterSlice";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter((contact) => {
    if (!contact.name || typeof contact.name !== "string") return false;
    return contact.name.toLowerCase().includes(normalizedFilter);
  });

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
