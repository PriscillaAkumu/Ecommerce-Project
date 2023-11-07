import React from "react"
import LoginForm from "./Forms/Login"
import RegisterForm from "./Forms/Register"
import { Grid } from "@mui/material"

export default function AuthLogin() {
	return (
		<Grid
			container
			maxWidth="lg"
			// spacing={2}
			sx={{ padding: "63px 100px", alignItems: "center", margin: "0 auto" }}
		>

<Grid item xs={12} sm={12} md={6} lg={6}>
				<LoginForm />
	</Grid>

	<Grid item xs={12} sm={12} md={6} lg={6}>
				<RegisterForm />
				</Grid>
			
		</Grid>
	)
}
