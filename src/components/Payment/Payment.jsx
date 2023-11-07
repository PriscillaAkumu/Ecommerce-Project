import React from 'react'
import './Payment.css'
import { Typography ,Grid,  } from '@mui/material'

export default function PaymentPlan(){
  return (
    <div className='info-section'>
      <div className="content">
        <Grid item  sx={{width: "376px" }} >
            <Typography variant='h4'>Free Delivery</Typography>
            <Typography  sx={{ fontSize: "clamp(1rem, 0.867rem + 0.4255vw, 1.25rem)",
    fontWeight: "400",
    lineHeight: "clamp(1.5rem, 1.3005rem + 0.6383vw, 1.875rem)",
    color: "#9F9F9F" }}>   For all oders over $50, consectetur adipim scing elit.</Typography>
        </Grid>
        <Grid item  sx={{width: "376px" }} >
            <Typography variant='h4'>90 Days Return</Typography>
            <Typography  sx={{ fontSize: "clamp(1rem, 0.867rem + 0.4255vw, 1.25rem)",
    fontWeight: "400",
    lineHeight: "clamp(1.5rem, 1.3005rem + 0.6383vw, 1.875rem)",
    color: "#9F9F9F" }}> If goods have problems, consectetur adipim scing elit. </Typography>
        </Grid>
        <Grid item  sx={{width: "376px" }} >
              <Typography variant='h4'>Secure Payment</Typography>
              <Typography  sx={{ fontSize: "clamp(1rem, 0.867rem + 0.4255vw, 1.25rem)",
    fontWeight: "400",
    lineHeight: "clamp(1.5rem, 1.3005rem + 0.6383vw, 1.875rem)",
    color: "#9F9F9F" }}>100% secure payment, consectetur adipim scing elit.</Typography>
          </Grid>
      </div>
        
    </div>
  )
}

