// import React from "react";
import s from "./ContactList..module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  console.log("Contacts:", contacts);
  console.log("Filter:", filter);
  // if (!contacts || !filter) {
  //   return <div>Loading...</div>;
  // }

  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter || "".toLowerCase())
  );
  // console.log(filteredContacts);

  return (
    <div className={s.div}>
      <ul className={s.list}>
        {filteredContacts.map((contact) => (
          <li className={s.item} key={contact.id}>
            <Contact {...contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
