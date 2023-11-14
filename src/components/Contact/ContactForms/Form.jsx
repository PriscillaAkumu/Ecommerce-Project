/** @format */

import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
// import { DevTool } from "@hookform/devtools"

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

export default function ContactForm() {
	const form = useForm()

	const { register, control, handleSubmit, formState } = form

	// handling form submission
	const onSubmit = (data) => {
		console.log("form submited", data)
	}

	// handling errors
	const { errors } = formState

	console.log("working!")

	// to check authenication

	return (
		<>
			<Box
				style={{
					// backgroundColor: "red",
				}}
			>
				<form onSubmit={handleSubmit(onSubmit)} noValidate>
					<div
						
					>
						<Stack>
							<Typography mb={2}>Your name</Typography>
							<TextField
								size="small"
								mb={2}
								type="text"
								id="username"
								placeholder="Abc"
								{...register("username", {
									required: {
										value:
											/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
										message: "Enter your name",
									},
								})}
							/>
							<Typography variant="body-3" sx={{ color: "red" }} mb={2}>
								{errors.username?.message}
							</Typography>
						</Stack>

						<Stack>
							<Typography mb={2}>Email address</Typography>
							<TextField
								size="small"
								mb={2}
								type="email"
								id="email"
								placeholder="Abc@def.com"
								{...register("email", {
									required: {
										value:
											/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
										message: "Enter your Email Address",
									},
								})}
							/>
							<Typography variant="body-3" sx={{ color: "red" }} mb={2}>
								{errors.email?.message}
							</Typography>
						</Stack>

						<Stack>
							<Typography mb={2}>Subject</Typography>
							<TextField
								size="small"
								mb={2}
								type="text"
								id="subject"
								placeholder="This is optional"
								{...register("subject")}
							/>
						</Stack>

						<Stack style={{}}>
							<Typography
								mb={2}
								sx={{
									// width: "75.96px",
									// height: "24px",
									// top: "1227px",
									// left: "688px",
									// fontFamily: "Poppins",
									fontSize: "16px",
									// fontWeight: "500",
									// lineHeight: "24px",
									// letter-spacing: 0em;
					
									color:"#000"
								}}
							>
								Message
							</Typography>
							<TextField
								size="small"
								type="text"
								id="message"
								// sx={{
								// 	width: "527px",
								// 	height: "120px",
								// 	// top: "1273px",
								// 	left:" 689px",
								// 	borderRadius: "10px",
								// 	border: "1px solid black"

								// }}
							
								placeholder= "Hi i'd like to ask about"
								
								// 								sx={{
								// 									width: "177px",
								// height: "24px",
								// top: "1299px",
								// left: "719px",
								// fontFamily:"Poppins",
								// fontSize:" 16px",
								// fontWeight:" 400",
								// lineHeight: "24px",
								// // letter-spacing: 0em;
								// textAlign: "left",
								// color:"#9F9F9F"}}

								{...register("message", {
									required: {
										value: /^[a-zA-Z0-9]+$/,
										message: "Required field. ENter Message",
									},
								})}
							/>
							<Typography variant="body-3" sx={{ color: "red" }} mb={2}>
								{errors.message?.message}
							</Typography>
						</Stack>

						<Stack direction="row">
							<Button
								size="large"
								type="submit"
								sx={{ color: "black", border: "1px solid black" }}
								// variant="outlined"
							>
								Submit
							</Button>
						</Stack>
					</div>
				</form>
			</Box>
		</>
	)
}
