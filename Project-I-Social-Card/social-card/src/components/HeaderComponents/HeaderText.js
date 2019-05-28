import React from 'react';
function headerText({ children}) {
  return (
    <div className="header-text">
      <p>Let’s learn React by building simple interfaces with components. Don’t to overthink it, just keep it simple and have fun. Once you are comfortable using components you are well on your way mastering React.</p>
      { children}
    </div>
  )
}

export default headerText;