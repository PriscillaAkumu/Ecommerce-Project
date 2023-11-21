import React from 'react';
import classes from "./checkout.module.css";
import CheckoutForm from './Form';
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Elipse from "../../assets/contact/Ellipse 2.png"


import {
  TextField, RadioGroup,Radio,
  Typography,FormControl, 
  Grid,
  Button,
  Stack,
  MenuItem,
  Select,
  Box,
  Divider, 
  FormControlLabel
} from "@mui/material";
import Billing from './Billing';

export default function CheckoutSection() {
  const form = useForm();

   const { register, control, handleSubmit, formState } = form;

  // handling form submission
  const onSubmit = (data) => {
	e.preventDefault();
    console.log("form submitted", data);
    // Handle the submission logic for both forms here
  };

//    handling errors
   const { errors } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={12} sm={12} md={6} lg={6}>

{/* <CheckoutForm /> */}
          {/* Checkout Form */}
          <Box>

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
								required: {
									value:
										/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
									message: "Enter a valid Email Address",
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
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          {/* Billing Section */}

{/* <Billing  /> */}
           <Box>
           
 
			<div
				style={{ display: "flex", gap: "40px", marginBottom: "20px"}}
			>

				<Typography
					sx={{
						fontSize: "24px",
						fontWeight: "500",
						lineHeight: "36px",
						flex:"1"
					}}
				>
					Product
				</Typography>
				<Typography
					sx={{
						fontSize: " 24px",
						fontWeight: "500",
						lineHeight: "36px",
						flex:"1"
					}}
				>
					Subtotal
				</Typography>
			</div> 

			<div
				className="item"
				style={{ display: "flex", gap: "40px", marginBottom: "20px" }}
			>
				<p style={{flex:"1"}}>
					{" "}
					<span
						style={{
							color: "#9F9F9F",
							
						}}
					>
						Asgaard{" "}
					</span>{" "}
					x 1
				</p>
				<Typography
					sx={{ fontWeight: "300", FontSize: "16px", lineHeight: "24px",flex:"1" }}
				>
					Rs. 250,000.00
				</Typography>
			</div>

			 <div
				className="item"
				style={{ display: "flex", gap: "40px", marginBottom: "20px" }}
			>
				<Typography
					sx={{
						fontSize: "16px",
						fontWeight: "400",
						flex:"1",
						lineHeight: "24px",
					}}
				>
					Subtotal
				</Typography>
				<Typography
					sx={{ fontWeight: "300", fontSize: "16px", lineHeight: "24px",flex:"1" }}
				>
					Rs. 250,000.00
				</Typography>
			</div> 

			 <div
				className="item"
				style={{ display: "flex", gap: "40px", marginBottom: "20px" }}
			>
				<Typography
					sx={{
						fontSize: "16px",
						fontWeight: "400",
						lineHeight: "24px",
						flex:"1"
					}}
				>
					Total
				</Typography>
				<Typography
					sx={{
						color: "#B88E2F",
						fontSize: "24px",
						fontWeight: "700",
						lineHeight: "36px",
						flex:"1"
						// textAlign:"left"
					}}
				>
					Rs. 250,000.00
				</Typography>
			</div> 

			<Divider variant="middle"  />

		
			<div style={{ display: "flex", flexDirection: "row", gap: "10px", marginBottom: "10px", marginTop: "20px" }}>
  <img
    src={Elipse}
    alt="logo"
    style={{
      width: "18px",
      height: "18px",
    }}
  />
  <Typography
    variant="h4"
    style={{
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "24px",
    }}
  >
    Direct Bank Transfer
  </Typography>
</div>

<div style={{ color: "#9F9F9F" }}>
				<Typography variant="body-2" >
					{" "}
					Make your payment directly into our bank account. Please use <br />
					your Order ID as payment reference. Your order will not be <br />
					shipped until the funds have cleared in our account.
				</Typography>
				</div>

			<div >
		<FormControl>
		<RadioGroup
		aria-labelledby="payment-mode-group-label"
		sx={{ color: "#9F9F9F" }}
		// id="radiobtn"
		mb={2}
		name="radiobtn"
		{...register("radiobtn", {
			required: "Select a payment mode",
		})}

      >

        <FormControlLabel value="directBankTransfer" control={<Radio />} label="Direct Bank Transfer" />
       <FormControlLabel value="cash" control={<Radio />} label="Cash on Delivery"/>

      </RadioGroup>
	  <Typography variant="body-3" sx={{ color: "red" }} mb={2}>
							{errors.radiobtn?.message}
						</Typography>

			</FormControl>  
     
  
	  
		
			</div> 


		
			<div>
			 <Typography variant="body-2">
				Your personal data will be used to support your experience <br />
				throughout this website, to manage access to your account and for other
				purposes described in our <b>privacy policy.</b>
			</Typography> 
			</div>
 			
            <Stack
              direction="row"
              sx={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Button
                size="large"
                type="submit"
                sx={{
                  color: "black",
                  width: "318px",
                  height: "64px",
                  borderRadius: "15px",
                  border: "1px solid black",
                }}
              >
                Place Order
              </Button>
            </Stack> 
          </Box> 
        </Grid>
      </Grid>
  <DevTool control={control} /> 
   </form> 
  );
}
