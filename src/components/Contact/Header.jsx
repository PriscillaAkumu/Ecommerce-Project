/** @format */

import React from "react";
import { Grid, Typography, Stack } from "@mui/material";

export default function Header() {
	return (
		<>
			<Grid item xs={12}>
				<Stack
					direction="column"
					alignItems="center"
					justifyContent="center"
					textAlign="center"
				>
					<Typography
						style={{
							fontSize: "36px",
							fontWeight: " 600",
							lineHeight: "54px",
						}}
					>
						Get In Touch With Us
					</Typography>
					<Typography
						style={{
							fontSize: "16px",
							fontWeight: "400",
							lineHeight: "24px",
							color: "#9F9F9F",
						}}
					>
						For More Information About Our Product & Services. Please Feel Free
						To Drop Us <br /> An Email. Our Staff Always Be There To Help You
						Out. Do Not Hesitate!
					</Typography>
				</Stack>
			</Grid>
		</>
	)
}
