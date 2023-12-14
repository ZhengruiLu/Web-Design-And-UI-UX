import {useId, useState} from 'react';
import './register.css';
function usernameIsValid(name) {
  return !!name && /^[a-zA-Z0-9]+$/.test(name);
}

function RegisterForm({
    // eslint-disable-next-line react/prop-types
    onRegister
    }) {
        const [username, setUsername] = useState('');
        const id = useId();
        const [usernameIsMissing, setUsernameIsMissing] = useState(false);
        
        const [selectedPackage, setSelectedPackage] = useState('');
        const [selectedActivity, setSelectedActivity] = useState('');

        // Define birthday package options
        const packageOptions = [
          { value: 'basic', label: 'Basic Birthday' },
          { value: 'deluxe', label: 'Deluxe Celebration' },
          { value: 'premium', label: 'Premium Paw-ty' },
          { value: 'other', label: 'Other (Custom Package)' },
        ];

        // Define activity options based on birthday package
        const activityOptions = {
          basic: ['Ball Ball Battle', 'Feather Chase'],
          deluxe: ['Sing', 'KTV'],
          premium: ['Catnip Party', 'Treat Buffet'],
        };
      
    return (
        <form 
        className="register-form" 
        onSubmit={(e) => {
            e.preventDefault();
            setUsernameIsMissing(!usernameIsValid(username));
            if (usernameIsValid(username)) {
              onRegister(username);
              setUsername('');
            }  
        }}
        >
          <h2>Register Form</h2>
        <span>* = required</span>

        {/* name */}
          <div className="register__name">
            <label htmlFor={`${id}-username`}>
                Name: <span className="form-reminder">*</span>
            </label>
            {usernameIsMissing && <div className='register-name__error'>
              Name is required. Only letters and numbers are allowed.
            </div>}
            <input 
            className = "register-name__input" 
            id={`${id}-username`} 
            onInput={(e) => {
              setUsername(e.target.value);
              setUsernameIsMissing(!usernameIsValid(e.target.value));
            }}
            value={username}
            type="text" name="name" 
            />
          </div>
 
        <div className="register__email register-email">
          <label htmlFor={`${id}-email`}>Email: </label>
          <div className="register-email__error"></div>
          <input name="email" className="register-email__input" id={`${id}-email`} type="text" />
        </div>

        {/* First Dropdown for Birthday Package */}
        <div className="register__dropdown">
        <label htmlFor="package-dropdown">Select Birthday Package: </label>
        <select
          id="package-dropdown"
          value={selectedPackage}
          onChange={(e) => {
            setSelectedPackage(e.target.value);
            setSelectedActivity(''); 
          }}
        >
          <option value="">Select Package</option>
          {packageOptions.map((packageOption) => (
            <option key={packageOption.value} value={packageOption.value}>
              {packageOption.label}
            </option>
          ))}
        </select>
      </div>

      {/* Second Dropdown for Specific Activity */}
      {selectedPackage && (
        <div className="register__dropdown">
          <label htmlFor="activity-dropdown">Select Activity: </label>
          <select
            id="activity-dropdown"
            value={selectedActivity}
            onChange={(e) => setSelectedActivity(e.target.value)}
          >
            <option value="">Select Activity</option>
            {activityOptions[selectedPackage].map((activity) => (
              <option key={activity} value={activity}>
                {activity}
              </option>
            ))}
          </select>
        </div>
      )}
        <button type="submit" className="register__submit" >Register</button>
      </form>
    );
}

export default RegisterForm;