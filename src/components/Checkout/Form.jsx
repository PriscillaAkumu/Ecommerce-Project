/** @format */

import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

// mui
import {
	TextField,
	Typography,
	InputLabel,
	Grid,
	Button,
	Stack,
	MenuItem,
	Select,
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

	// console.log("working!")

	// to check authenication

	return (
		<>
			<Box>
				<form onSubmit={handleSubmit(onSubmit)} noValidate>
					<Stack
						direction="row"
						spacing={2}
					>
						<div  style={{flex:1}}>
							<Typography mb={2}>First name</Typography>
							<TextField
								size="small"
								sx={{width:"100%"}}
								mb={2}
								type="text"
								id="first name"
								{...register("firstname", {
									required: {
										value: /^[a-zA-Z]+$/,
										message: "Enter your First name",
									},
								})}
							/>

							<Typography variant="body-3" sx={{ color: "red" }} mb={2}>
								{errors.firstname?.message}
							</Typography>
						</div>

						<div style={{ flex: 1 }}>
							<Typography mb={2}>Last name</Typography>
							<TextField
								sx={{ width: "100%" }}
								size="small"
								mb={2}
								type="text"
								id="lastname"
								{...register("lastname", {
									required: {
										value: /^[a-zA-Z]+$/,
										message: "Enter your last name",
									},
								})}
							/>
							<Typography variant="body-3" sx={{ color: "red" }} mb={2}>
								{errors.lastname?.message}
							</Typography>
						</div>
					</Stack>

					<Stack>
						<Typography mb={2}>Company Name (optional)</Typography>
						<TextField
							size="small"
							mb={2}
							type="text"
							id="company"
							// placeholder="Abc@def.com"
							{...register(
								"company"
							)}
						/>
						
					</Stack>

					<Stack>
						<Typography mb={2}>Country / Region </Typography>
						<Select
							size="small"
							id="country"
							mb={2}
							name="country"
							{...register("country", {
								required: "Select a country",
							})}
						>
							{/* <MenuItem value="_none" selected>
								-None-
							</MenuItem> */}
							<MenuItem value="italy" selected>
								Italy
							</MenuItem>
							<MenuItem value="sri lanka">Sri Lanka</MenuItem>
							<MenuItem value="germany">Germany</MenuItem>
							<MenuItem value="uganda">Uganda</MenuItem>
							<MenuItem value="nigeria">Nigeria</MenuItem>
							<MenuItem value="other">Other</MenuItem>
						</Select>

						<Typography variant="body-3" sx={{ color: "red" }} mb={2}>
							{/* {errors.country && <span style={{color:"red"}}>{errors.country.message}</span>} */}
							{errors.country?.message}
						</Typography>
					</Stack>

					<Stack>
						<Typography mb={2}>Street Address</Typography>
						<TextField
							size="small"
							mb={2}
							type="text"
							id="street"
							placeholder="This is optional"
							{...register("street")}
						/>
					</Stack>

					<Stack>
						<Typography mb={2}>Town/City</Typography>
						<TextField
							size="small"
							mb={2}
							type="text"
							id="town"
							// placeholder="This is optional"
							{...register("town")}
						/>
					</Stack>

					<Stack>
						<Typography mb={2}>Province</Typography>
						<Select
							size="small"
							id="province"
							mb={2}
							name="province"
							{...register("province", {
								required: {
									message: "Select a pronvince",
								},
							})}
						>
							<MenuItem value="western province" selected>
								Western Province{" "}
							</MenuItem>
							<MenuItem value="eastern province">Eastern Province</MenuItem>
							<MenuItem value="northern province">Northern Province</MenuItem>
							<MenuItem value="southern province">Southern Province</MenuItem>
							<MenuItem value="other">Other</MenuItem>
						</Select>

						<Typography variant="body-3" sx={{ color: "red" }} mb={2}>
							{errors.province?.message}
						</Typography>
					</Stack>

					<Stack>
						<Typography mb={2}>ZIP code</Typography>
						<TextField
							size="small"
							mb={2}
							type="text"
							id="zipCode"
							// placeholder="This is optional"
							{...register("zipCode")}
						/>
					</Stack>

					<Stack>
						<Typography mb={2}>Phone</Typography>
						<TextField
							size="small"
							mb={2}
							type="number"
							id="phone"
							{...register("phone", {
								required: "Contact is required",
								minLength: {
									value: 12,
									message: "contact must be 12 characters long",
								},
								maxLength: {
									value: 12,
									message: "contact must be 12 characters long",
								},
							})}
						/>
						<Typography variant="body-3" sx={{ color: "red" }} mb={2}>
							{errors.phone?.message}
						</Typography>
					</Stack>

					<Stack>
						<Typography mb={2}>Email address</Typography>
						<TextField
							size="small"
							mb={2}
							type="email"
							id="email"
							{...register("email", {
								pattern: {
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
						<br />
						<TextField
							mb={2}
							size="small"
							type="text"
							id="message"
							placeholder="Additional Information"
							{...register("message", {
								required: {
									value: /^[a-zA-Z0-9]+$/,
									message: "Enter Additional Message",
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
						>
							Submit
						</Button>
					</Stack>
				</form>
				<DevTool control={control} />
			</Box>
		</>
	)
}
