import React from 'react';

function icon({ iconName, children }) {
  return (
    <li onClick={() => { alert('you clicked me') }}><i className={iconName}></i> {children}</li>
  );
}

export default icon;