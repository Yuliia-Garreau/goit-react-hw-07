// import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";
// import initialContacts from "./initialContacts.json";
// console.log(initialContacts);

function App() {
  // const [contacts, setContacts] = useState([
  //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  // ]);
  // const [contacts, setContacts] = useState(() => {
  //   const allContacts = window.localStorage.getItem("contacts-book");
  //   console.log(allContacts);

  //   if (allContacts !== null) {
  //     return JSON.parse(allContacts);
  //   }
  //   return initialContacts;
  // });
  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   window.localStorage.setItem("contacts-book", JSON.stringify(contacts));
  // }, [contacts]);

  // // console.log(newContact);

  // const handleAddContact = (newContact) => {
  //   setContacts((prev) => [...prev, newContact]);
  // };
  // const handleDelete = (id) => {
  //   const contactsWithDeleted = contacts.filter((contact) => contact.id !== id);
  //   setContacts(contactsWithDeleted);
  // };
  // // const filteredContacts = contacts.filter((contact) =>
  // //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // // );
  // const filteredContacts = Array.isArray(contacts)
  //   ? contacts.filter((contact) =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase())
  //     )
  //   : [];
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
