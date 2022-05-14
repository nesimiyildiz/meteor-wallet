import React from 'react';
import {Contactsform}  from './ContactForm';
import { ContactList } from './ContactList';


export const App = () => (
  <div>
    <h1>Meteor Wallet</h1>
   
    <Contactsform/>
    <ContactList/>
  </div>
);
