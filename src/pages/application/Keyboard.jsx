import React, { useState, useEffect } from 'react';
import './Keyboard.scss'; // Import the SCSS file

// Define the keyboard layout (full keyboard with F1-F12, Shift, Ctrl, etc.)
const KEY_LAYOUT = [
  ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'Pr', 'Sr', 'Ps'],
  ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Ba.'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
  ['Cap', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'En.'],
  ['Sh.', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Sh.'],
  ['Ct.', 'Alt', 'Sp.', 'Alt', 'Ct.'],
//   ['Num Lock', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '+'],
  ['Up', 'Lt', 'Dn', 'Rt'],
];

const Keyword = () => {
  const [pressedKey, setPressedKey] = useState(null);

  // Handle keydown event
  const handleKeyDown = (e) => {
    setPressedKey(e.key);
  };

  // Reset key press state on keyup
  const handleKeyUp = () => {
    setPressedKey(null);
  };

  // Add event listeners for keydown and keyup
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="keyboard-container">
      <h2 className="keyboard-title">Full Keyboard Mapping</h2>
      <div className="keyboard-layout">
        {KEY_LAYOUT.map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row">
            {row.map((key, index) => (
              <div
                key={index}
                // className={`keyboard-key ${pressedKey === key.toLowerCase() ? 'pressed' : ''} ${
                //   key === 'Shift' || key === 'Ctrl' || key === 'Caps Lock' ? 'large-key' : ''
                // }`}
                className='keyboard-key'
              >
                <span>{key}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* {pressedKey && (
        <div className="pressed-key-display">
          <p>You pressed: <span>{pressedKey}</span></p>
        </div>
      )} */}
    </div>
  );
};

export default Keyword;
