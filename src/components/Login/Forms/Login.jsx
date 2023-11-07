/** @format */

import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
// import { DevTool } from "@hookform/devtools"
import { useAuth } from "../../../context/authContext"
import { useNavigate } from "react-router-dom"
// mui
import {
	TextField,
	Typography,
	Grid,
	Checkbox,
	Button,
	Stack,
	Box,
} from "@mui/material"

export default function LoginForm() {
	// state for authenication
	const { authenticate, isAuthenticated } = useAuth()
	const navigate = useNavigate()

	const form = useForm()

	const { register, control, handleSubmit, formState } = form

	// handling form submission
	const onSubmit = (data) => {
		authenticate(data)

		// console.log("form submited", data)
	}

	// handling errors
	const { errors } = formState

	// console.log(register)
	// to get authenicated!

	console.log("working!")

	// to check authenication
	useEffect(() => {
		if (isAuthenticated) {
			navigate("/dashboard")
		}
	}, [isAuthenticated])

	return (
		<>
			{!isAuthenticated && (
				<Box>
					<Typography
						variant="h4"
						sx={{ display: { xs: "block", md: "block" } }}
					>
						Log in
					</Typography>

					<form onSubmit={handleSubmit(onSubmit)} noValidate>
						<Stack spacing={2} width={400}>
							<Typography mb={2}>Username or email address</Typography>
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

							<Typography mb={2}>Password</Typography>
							<TextField
							size="small"
								type="password"
								id="password"
								{...register("password", {
									required: {
										value: /^[a-zA-Z0-9]+$/,
										message: "Please enter your password",
									},
								})}
							/>
							<Typography variant="body-3" sx={{ color: "red" }} mb={2}>
								{errors.password?.message}
							</Typography>

							<Grid
								mb-2
								sx={{
									alignItems: "center",
									justifyContent: "center",
									gap: "31px",
									width: "100%",
								}}
							>
								<Checkbox
									type="checkbox"
									id="checkbox"
									{...register("checkbox")}
								/>
								<Typography variant="body-2">Remember me</Typography>
							</Grid>

							<Grid
								container
								sx={{
									alignItems: "center",
									justifyContent: "center",
									gap: "31px",
									width: "100%",
								}}
							>
								<Button size="large" 
								type="submit" 
								sx={{color:"black" , border:"2px solid blue"}}  
								// variant="outlined"
								>
									Login
								</Button>
								<Typography variant="body-2" mt={2}>
									Lost Your Password?
								</Typography>
							</Grid>
						</Stack>
					</form>
					{/* <DevTool control={control} /> */}
				</Box>
			)}
		</>
	)
}
