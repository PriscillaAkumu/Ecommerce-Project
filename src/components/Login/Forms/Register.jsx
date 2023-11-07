/** @format */

import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
// import { DevTool } from "@hookform/devtools"

// mui
import { TextField, Typography, Grid, Button, Stack, Box } from "@mui/material"

export default function LoginForm() {
	const form = useForm()

	const { register, control, handleSubmit, formState } = form

	// handling form submission
	const onSubmit = (data) => {
		// console.log("form submited", data)
	}
	// handling errors
	const { errors } = formState

	// console.log(register)

	console.log("working!")

	return (
		<Box>
			<Typography variant="h4">Register</Typography>

			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<Stack spacing={2} >
					<Typography mb={2}>Email address</Typography>
					<TextField
					size="small"
						mb={2}
						type="email"
						id="email"
						{...register("email", {
							required: {
								value:
									/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
								message: "Enter your email address",
							},
						})}
					/>
					<Typography variant="body-3" sx={{ color: "red" }} mb={2}>
						{errors.email?.message}
					</Typography>

					<Typography variant="body-3">
						{" "}
						A link to set your new password will be sent to your email address{" "}
					</Typography>
					<Typography variant="body-3">
						Your personal data will be used to support your experience
						throughout this website, to manage access to your account, and for
						other purposes described in our <b>privacy policy.</b>
					</Typography>

					{/* <Grid
								container
								sx={{
									alignItems: "center",
									justifyContent: "center",
									gap: "31px",
									width: "100%",
								}}
							> */}
					<Button size="large" 
					type="submit" 
					sx={{color:"black" , border:"2px solid blue"}} 
					// variant="outlined"
					>
						Register
					</Button>

					{/* </Grid> */}
				</Stack>
			</form>
			{/* <DevTool control={control} /> */}
		</Box>
	)
}
