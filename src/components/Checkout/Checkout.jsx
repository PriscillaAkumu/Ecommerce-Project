import React from 'react'
import FormBill from './Form'
import Billing from './Billing'

import { Grid } from "@mui/material"
import classes from "./checkout.module.css"

export default function CheckoutSection() {
	return (
		<Grid
			container
			spacing={2}
			className={classes.container}
			
		>
			<Grid item xs={12} sm={12} md={6} lg={6}>
      <FormBill />
			</Grid>

			<Grid item xs={12} sm={12} md={6} lg={6}>
		<Billing />
			</Grid>
		</Grid>
	)
}

