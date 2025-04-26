import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/contactsSlice.js";
import { nanoid } from "nanoid";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

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

    const newContact = { id: nanoid(), name, number };
    dispatch(addContact(newContact));

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
