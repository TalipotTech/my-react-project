import { useState } from 'react';

export default function Redundant() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  //const [fullName, setFullName] = useState('');
  const fullName = firstName + ' ' + lastName; // here fullName is const but value is changing based on state changes of firstName and lastName

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
   // setFullName(e.target.value + ' ' + lastName);//redundant code
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
   // setFullName(firstName + ' ' + e.target.value);//redundant code
  }

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}
