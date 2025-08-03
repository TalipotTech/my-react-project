
/*export default function EmailInput() {
  return (
    <div>
      <input placeholder="Your email" type="email" />
      <p></p>
    </div>
  );
};
*/

/*
export default  function EmailInput() {
  let errorMessage = '';
  function evaluateEmail(event) {
    const enteredEmail = event.target.value;
    if (enteredEmail.trim() === '' || !enteredEmail.includes('@')) {
      errorMessage = ' The entered email address is invalid.';
    } else {
      errorMessage = '';
    }
  };
  const input = document.querySelector('input');
  input.addEventListener('blur', evaluateEmail);
  return (
    <div>
      <input placeholder="Your email" type="email" />
      <p>{errorMessage}</p>
    </div>
  );
};
*/
/*

export default function EmailInput() {
  let errorMessage = '';
  function evaluateEmail(event) {
        console.log('Hello');
    const enteredEmail = event.target.value;
    if (enteredEmail.trim() === '' || !enteredEmail.includes('@')) {
      errorMessage = 'The entered email address is invalid.';
    } else {
      errorMessage = '';
    }
  };
  return (
    <div>
      <input 
        placeholder="Your email" 
        type="email" 
        onBlur={evaluateEmail} />
      <p>{errorMessage}</p>
    </div>
  );
};
*/


import { useState } from 'react';
function EmailInput() {
  const [errorMessage, setErrorMessage] = useState('');
  function evaluateEmail(event) {
    const enteredEmail = event.target.value;
    if (enteredEmail.trim() === '' || !enteredEmail.includes('@')) {
      setErrorMessage('The entered email address is invalid.');
    } else {
      setErrorMessage('');
    }
  };
  return (
    <div>
      <input 
        placeholder="Your email" 
        type="email" 
        onBlur={evaluateEmail} />
      <p>{errorMessage}</p>
    </div>
  );
};
export default function StateAndEvents() {
  return (
    <div>
      <h2>State and Events</h2>
      <EmailInput />
    </div>
  );
};