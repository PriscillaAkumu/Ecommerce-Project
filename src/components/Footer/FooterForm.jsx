import React from 'react';

export default function FooterForm() {
  return (
    <div className='newsletter-component'>
      <form method='post'>
        <input
          id='member[email]'
          className='revue-form-field'
          placeholder='Enter Your Email Address'
          required
        />
      </form>
      <button type="submit">Subscribe</button>
    </div>
  );
}
