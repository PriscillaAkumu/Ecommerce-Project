/** @format */

import React, { useEffect } from "react";
import location from "../../../assets/contact/location.png";
import phone from "../../../assets/contact/phone.png";
import clock from "../../../assets/contact/clock.png";

// mui
import { TextField, Typography, Button, Stack, Box } from "@mui/material";

export default function Socials() {
	return (
		<Box
			
			
		>
			<div
				style={{
					display: "flex",
					gap: "10px",
					marginBottom: "20px"
					// marginLeft: "10px",
					// marginRight: "50px",
				}}
			>
				<img
					src={location}
					alt="logo"
					style={{
						width: "22px",
						height: "28.18px",
						// marginLeft: "8px",
					}}
				/>
				<div>
					<h1
						style={{
							fontSize: "24px",
							fontWeight: "500",
							// lineHeight: "36px",
							// textAlign: "left",
							// width: "99px",
							// Height: "36px",
						}}
					>
						{" "}
						Address
					</h1>
					<p
						style={{
							fontSize: "16px",
							fontWeight: "400",
							// lineHeight: "24px",
						}}
					>
						236 5th SE Avenue, New <br />
						York NY10000, United <br />
						States
					</p>
				</div>
			</div>

			{/* telephone */}

			<div style={{ display: "flex",gap: "10px", marginBottom: "20px" }}>
				<img
					src={phone}
					alt="logo"
					style={{
						width: "30px",
						height: "30px",
						// top: "916px",
						// left: "237px",
						// padding: " 3.98px, 3.98px, 3.75px, 3.75px",
					}}
				/>
				<div>
					<h1
						style={{
							fontSize: "24px",
							fontWeight: "500",
							// lineHeight: "36px",
							// textAlign: "left",
						}}
					>
						{" "}
						Phone
					</h1>
					<p
						style={{
							fontSize: "16px",
							fontWeight: "400",
							// lineHeight: "24px",

							// letterSpacing: 0em;
							// textAlign: "left",
							// width: "212px",
							// height: "48px",
							// top: "949px",
							// left: "297px",
						}}
					>
						Mobile: +(84) 546-6789 <br/>
						Hotline: +(84) 456-6789
					</p>
				</div>
			</div>
			{/* Working hours  */}

			<div style={{ display: "flex", gap: "10px",marginBottom: "20px" }}>
				<img
					src={clock}
					alt="logo"
					style={{
						width: " 23px",
						height: "23px",
					}}
				/>
				<div>
					<h1
						style={{
							// width: "166px",
							// height: " 36px",
							// top: " 1039px",
							// left: "297px",
							// fontFamily: " Poppins",
							fontSize: "24px",
							fontWeight: "500",
							lineHeight: " 36px",
							// letter-spacing: 0em;
							// textAlign: " left",
						}}
					>
						{" "}
						Working Time
					</h1>
					<p
						style={{
							// width: "212px",
							// height: "96px",
							// top: "1075px",
							// left: "297px",
							fontSize: "16px",
							fontWeight: "400",
							lineHeight: "24px",
							// letterSpacing: 0em;
							// textAlign: " left", 
						}}
					>
						Monday-Friday: 9:00 - 22:00
						<br />
						Saturday-Sunday: 9:00 - 21:00
					</p>
				</div>
			</div>
		</Box>
	)
}
