/** @format */

import React from "react"
import ContactForm from "./Form";
import Socials from "./Socials";
import { Grid } from "@mui/material";

export default function FormSocials() {
	return (
		<Grid
			container>
			<Grid item xs={12} sm={12} md={6} lg={6}>
				<Socials />
			</Grid>

			<Grid item xs={12} sm={12} md={6} lg={6}>
				<ContactForm />
			</Grid>
		</Grid>
	)
}
