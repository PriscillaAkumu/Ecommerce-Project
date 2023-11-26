import React, { useEffect } from 'react';
import location from '../../../assets/contact/location.png';
import phone from '../../../assets/contact/phone.png';
import clock from '../../../assets/contact/clock.png';

// mui
import { TextField, Typography, Button, Stack, Box } from '@mui/material';

export default function Socials() {
  return (
    <Box>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '20px',
        }}
      >
        <img
          src={location}
          alt='logo'
          style={{
            width: '22px',
            height: '28.18px',
          }}
        />
        <div>
          <h1
            style={{
              fontSize: '24px',
              fontWeight: '500',
            }}
          >
            {' '}
            Address
          </h1>
          <p
            style={{
              fontSize: '16px',
              fontWeight: '400',
            }}
          >
            236 5th SE Avenue, New <br />
            York NY10000, United <br />
            States
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <img
          src={phone}
          alt='logo'
          style={{
            width: '30px',
            height: '30px',
          }}
        />
        <div>
          <h1
            style={{
              fontSize: '24px',
              fontWeight: '500',
            }}
          >
            {' '}
            Phone
          </h1>
          <p
            style={{
              fontSize: '16px',
              fontWeight: '400',
            }}
          >
            Mobile: +(84) 546-6789 <br />
            Hotline: +(84) 456-6789
          </p>
        </div>
      </div>
      {/* Working hours  */}

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <img
          src={clock}
          alt='logo'
          style={{
            width: ' 23px',
            height: '23px',
          }}
        />
        <div>
          <h1
            style={{
              fontSize: '24px',
              fontWeight: '500',
              lineHeight: ' 36px',
            }}
          >
            {' '}
            Working Time
          </h1>
          <p
            style={{
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '24px',
            }}
          >
            Monday-Friday: 9:00 <br />
            - 22:00
            <br />
            Saturday-Sunday: 9:00 <br />- 21:00
          </p>
        </div>
      </div>
    </Box>
  );
}
