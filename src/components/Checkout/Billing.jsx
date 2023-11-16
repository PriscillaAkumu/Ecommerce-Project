import React from "react"
import Divider from "@mui/material/Divider"
import Elipse from "../../assets/contact/Ellipse 2.png"
import Elipse2 from "../../assets/contact/Ellipse 1.png"
import { Stack, Button, Typography, Box } from "@mui/material"
import Radio from "@mui/material/Radio"
import FormControlLabel from "@mui/material/FormControlLabel"
import { useForm } from "react-hook-form"

export default function Billing(){
	// const form = useForm()
	// const { register, control, formState } = form

	return (
		<Box>
			<form>
			<div
				style={{ display: "flex", gap: "40px", marginBottom: "20px" }}
			>

				<Typography
					sx={{
						fontSize: "24px",
						fontWeight: "500",
						lineHeight: "36px",
					}}
				>
					Product
				</Typography>
				<Typography
					sx={{
						fontSize: " 24px",
						fontWeight: "500",
						lineHeight: "36px",
					}}
				>
					Subtotal
				</Typography>
			</div>
			<div
				className="item"
				style={{ display: "flex", gap: "40px", marginBottom: "20px" }}
			>
				<p>
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
					sx={{ fontWeight: "300", FontSize: "16px", lineHeight: "24px" }}
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
					}}
				>
					Subtotal
				</Typography>
				<Typography
					sx={{ fontWeight: "300", fontSize: "16px", lineHeight: "24px" }}
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
						// textAlign:"left"
					}}
				>
					Rs. 250,000.00
				</Typography>
			</div>
			<Divider />

			<div style={{ marginTop: "20px" }}>
				<div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
					<img
						src={Elipse}
						alt="logo"
						style={{
							width: "12px",
							height: "12px",
						}}
					/>
					<Typography
						variant="h4"
						style={{
							fontSize: "16px",
							fontWeight: "400",
							lineHeight: " 24px",
						}}
					>
						{" "}
						Direct Bank Transfer
					</Typography>
				</div>

				<p style={{ color: "#9F9F9F" }}>
					{" "}
					Make your payment directly into our bank account. Please use <br />
					your Order ID as payment reference. Your order will not be <br />
					shipped until the funds have cleared in our account.
				</p>
			</div>

			{/* <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
				<img
					src={Elipse2}
					alt="logo"
					style={{
						width: "14px",
						height: "14px",
					}}
				/>
				<div>
					<h1
						style={{
							// fontSize: "24px",
							// fontWeight: "500",
							// lineHeight: " 36px",
							color: "#9F9F9F",
						}}
					>
						{" "}
						Direct Bank Transfer
					</h1>
				</div>
			</div> */}
			<div>
				<FormControlLabel
					value="other"
					control={<Radio />}
					label="Direct Bank Transfer"
					sx={{ color: "#9F9F9F" }}
				/>
			</div>

			<div>
				<FormControlLabel
					value="other"
					control={<Radio />}
					label="Cash On Delivery"
					sx={{ color: "#9F9F9F" }}
				/>
			</div>

			<p>
				Your personal data will be used to support your experience <br />
				throughout this website, to manage access to your account and for other
				purposes described in our <b>privacy policy.</b>
			</p>

			<Stack
				direction="row"
				sx={{
					justifyContent: "center",
					alignItems: "center",
					marginTop: "20px",
				}}
			>
				<Button
					// size="large"
					type="submit"
					sx={{
						color: "black",
						width: "318px",
						height: "64px",
						borderRadius: "15px",
						border: "1px solid black",
					}}
				>
					Place holder
				</Button>
			</Stack>

			</form>
		</Box>
	)
}
