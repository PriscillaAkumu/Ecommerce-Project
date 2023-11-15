import React from 'react'
import Divider from '@mui/material/Divider';
import Elipse from "../../assets/contact/Ellipse 2.png";
import Elipse2 from "../../assets/contact/Ellipse 1.png";
 import{Stack,Button,Typography, Box} from '@mui/material';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Billing() {
  return (
    <Box>  
            <div className="item" style={{display:"flex", gap: "40px", marginBottom:"20px"}}>
                 <Typography variant='h5'>Product</Typography>
                 <Typography variant='h5'>Subtotal</Typography>
             </div>
             <div className="item" style={{display:"flex", gap: "40px", marginBottom: "20px"}}>
                 <p> <span>Asgaard </span> x 1</p>
                 <Typography variant='body-2'>Rs. 250,000.00</Typography>
             </div>
             <div className="item" style={{display:"flex", gap: "40px", marginBottom: "20px"}}>
                 <Typography variant='h5'>Subtotal</Typography>
                 <Typography variant='body-2'>Rs. 250,000.00</Typography>
             </div>
             <div className="item" style={{display:"flex", gap: "40px", marginBottom: "20px"}}>
                 <Typography variant='h5'>Total</Typography>
                 <Typography variant='body-2'>Rs. 250,000.00</Typography>
             </div>
             <Divider />
             <div style={{ display: "flex", gap: "10px",marginBottom: "20px" }}>
 				<img
 					src={Elipse}
 					alt="logo"
 					style={{
 						width:"14px",
 						height:"14px",
 					}}
 				/>
 					<Typography variant='body-1'
 						style={{
 							fontSize: "16px",
 							fontWeight: "400",
 							lineHeight: " 24px",
                            }}>
 						{" "}
 					Direct Bank Transfer
 					</Typography>
			
			</div>

             <p> Make your payment directly into our bank account. Please use <br/>
             your Order ID as payment reference. Your order will not be <br/>
             shipped until the funds have cleared in our account.
             </p>


             <div style={{ display: "flex", gap: "10px",marginBottom: "20px" }}>
 				<img
 					src={Elipse2}
 					alt="logo"
 					style={{
 						width:"14px",
 						height:"14px",
 					}}
 				/>
 				<div>
 					<h1
 						style={{
 							// fontSize: "24px",
 							// fontWeight: "500",
 							// lineHeight: " 36px",
                            }}>
 						{" "}
 					Direct Bank Transfer
 					</h1>
			
				</div>
 			</div>

             <div style={{ display: "flex", gap: "10px",marginBottom: "20px" }}>
 				<img
 					src={Elipse2}
 					alt="logo"
 					style={{
 						width: " 14px",
 						height: "14px",
 					}}
 				/>
 				<div>
 					<h1
 						style={{
 							// fontSize: "24px",
 							// fontWeight: "500",
 							// lineHeight: " 36px",
                            }}>
 						{" "}
 					Cash on Delivery
 					</h1>
			
 				</div>
 			</div>
            
             <p>Your personal data will be used to support your experience <br/>
             throughout this website, to manage access to your account and for other purposes described in our <b>privacy policy.</b>
              </p>

              <Stack direction="row" sx={{ justifyContent: 'center', alignItems: 'center', marginTop:"20px" }}>
 							<Button
 								// size="large"
 								type="submit"
 								sx={{ color: "black", 
                                 width: "318px",
                                 height: "64px",
                                 borderRadius:"15px",
                                border: "1px solid black"
                             }}
 							>
 								Place holder
 							</Button>
 						</Stack>
    </Box>
    

  )
}






