import React, { useState } from 'react';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
      Name: ${name}
      Email: ${email}
      Gender: ${gender}
      Country: ${country}
      Subscribed: ${isSubscribed ? 'Yes' : 'No'}
    `;
    
    alert(message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <div>
        <label>Name:</label><br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Email:</label><br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Gender:</label><br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={(e) => setGender(e.target.value)}
            required
          /> Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={(e) => setGender(e.target.value)}
          /> Female
        </label>
      </div>

      <div>
        <label>Country:</label><br />
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        >
          <option value="">--Select--</option>
          <option value="in">India</option>
          <option value="us">USA</option>
          <option value="uk">UK</option>
        </select>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={isSubscribed}
            onChange={(e) => setIsSubscribed(e.target.checked)}
          />
          Subscribe to MyPage
        </label>
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
