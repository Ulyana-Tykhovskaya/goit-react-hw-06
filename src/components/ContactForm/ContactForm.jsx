import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "../../redux/contacts/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalized = name.toLowerCase();

    const duplicate = contacts.find(
      (contact) =>
        typeof contact.name === "string" &&
        contact.name.toLowerCase() === normalized
    );

    if (duplicate) {
      alert("Контакт вже є у списку!");
      return;
    }

    dispatch(addContact(name, number));
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Number
          <input
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </label>
      </div>

      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
