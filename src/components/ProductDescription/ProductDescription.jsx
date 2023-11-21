import React from 'react';
import { Grid, Stack, Typography, Box } from '@mui/material';
import CloudSofa1 from '../../assets/cloudsofa1.png';
import CloudSofa2 from '../../assets/cloudsofa2.png';


const imageStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: '#FBEBB5',
    borderRadius: '8px',
    overflow: 'hidden',
    objectFit: 'contain',
    objectPosition: 'center'

}
const ProductDescription = () => {
    return (
        <Box className='desc-container'>
            <Grid container sx={{ padding: '40px' }}>
                <Grid item xs={12}>
                    <Stack className='subtitle1' direction='row'  spacing={3} alignItems='center' justifyContent="center" >
                        <Typography className='title' variant='subtitle1'   color= '#000'>Description</Typography >
                        <Typography className='title' variant='subtitle1' color= '#9F9F9F' >Additional Information</Typography>
                        <Typography className='title' color= '#9F9F9F'>Reviews [5]</Typography>
                    </Stack>
                </Grid>

                <Grid item xs={12} marginTop='15px'>
                    <Stack direction='column' className='subtitle2' spacing={2} >
                        <Typography variant='subtitle2'  >Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</Typography>
                        <Typography variant='subtitle2' >Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</Typography>
                    </Stack>
                </Grid>

            </Grid>
            <Grid container spacing={2} sx={{ padding: '10px 40px' }} direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }}>
                <Grid item xs={12} xm={12} md={6} lg={6} >
                    <img src={CloudSofa1} alt='sofa' style={imageStyle} />
                </Grid>
                <Grid item xs={12} xm={12} md={6} lg={6} > 
                    <img src={CloudSofa2} alt='sofa' style={imageStyle} />
                </Grid>
            </Grid>
        </Box>

    );
}

export default ProductDescription;
