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
						direction="column"
						sx={{ display: "flex", flexDirection: "column" }}
					>
						<Typography mb={2}>First name</Typography>
						<TextField
							size="small"
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

						<Typography mb={2}>Second name</Typography>
						<TextField
							size="small"
							mb={2}
							type="text"
							id="secondname"
							{...register("secondname", {
								required: {
									value: /^[a-zA-Z]+$/,
									message: "Enter your second name",
								},
							})}
						/>
						<Typography variant="body-3" sx={{ color: "red" }} mb={2}>
							{errors.secondname?.message}
						</Typography>
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
								// required: {
								// 	value:
								// 		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
								// 	message: "Enter your Email Address",
								// },
							)}
						/>
						{/* <Typography variant="body-3" sx={{ color: "red" }} mb={2}>
								{errors.email?.message}
							</Typography> */}
					</Stack>

					<Stack>
						<Typography mb={2}>Country / Region </Typography>

						{/* <InputLabel  mb={2}>Country /Region </InputLabel> */}
						<Select
							size="small"
							id="country"
							mb={2}
							name="country"
							{...register("country", {
								required: "Select a country"
									
								
							})}
						>
							<MenuItem value="_none" selected>
								-None-
							</MenuItem>
							<MenuItem value="italy">Italy</MenuItem>
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
							// placeholder="This is optional"
							{...register("street")}
						/>

						{/* <Typography variant="body-3" sx={{ color: "red" }} mb={2}>
								{errors.email?.message}
							</Typography> */}
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

						{/* <InputLabel  mb={2}>Country /Region </InputLabel> */}
						<Select
							size="small"
							id="province"
							mb={2}
							name="province"
							{...register("province", {
								required: {
									// 	value:
									// 		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
									message: "Select a pronvince",
								},
							})}
						>
							{/* <MenuItem  value="_none" selected>
                    -None-
                  </MenuItem> */}
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
						{/* <Typography variant="body-3" sx={{ color: "red" }} mb={2}>
								{errors.email?.message}
							</Typography> */}
					</Stack>

					<Stack>
						<Typography mb={2}>Phone</Typography>
						<TextField
							size="small"
							mb={2}
							type="number"
							id="phone"
							// placeholder="This is optional"
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
							// placeholder="This is optional"
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
