/** @format */

import React from "react"
import ContactForm from "./Form"
import Socials from "./Socials"
import { Grid } from "@mui/material"
// import classes from "./login.module.css"

export default function FormSocials() {
	return (
		<Grid
			container
			// maxWidth="lg"
			sx={
				{
					// width: "1058px",
					// height: "923px",
					// top: "637px",
					// left: "191px",
					// backgroundColor:"pink"
				}
			}
		>
			<Grid item xs={12} sm={12} md={6} lg={6}>
				<Socials />
			</Grid>

			<Grid item xs={12} sm={12} md={6} lg={6}>
				<ContactForm />
			</Grid>
		</Grid>
	)
}
