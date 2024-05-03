import React, { useState } from 'react';
import './static/style.css';
import SettingIcon from './../assets/images/main/settings-icon.png'

export default function PanelHome() {
  // State to hold the URL of the uploaded image
  const [imageUrl, setImageUrl] = useState(null);
  const [showRemoveButton, setShowRemoveButton] = useState(false);

  // Function to handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
        setShowRemoveButton(true);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle removing the image
  const handleRemoveImage = () => {
    setImageUrl(null);
    setShowRemoveButton(false);
  };

  return (
    <div id='home'>
      <header style={{ backgroundImage: `url(${imageUrl})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}>
        <ul>
          <li>
            <h1>Home</h1>
            <p>Signed in as <span>Medicity Ernakulam</span></p>
            {showRemoveButton && <button onClick={handleRemoveImage}>Remove Image</button>}
          </li>
          <li style={{ display: showRemoveButton ? 'none' : 'block' }}>
            <label htmlFor="input-file">+ Image</label>
            <input type="file" accept='image/jpeg, image/png, image/jpg, image/svg' id='input-file' onChange={handleFileChange} />
          </li>
          <li><a href="#"><img src={SettingIcon} alt="icon" /></a></li>
        </ul>
      </header>
    </div>
  );
}
