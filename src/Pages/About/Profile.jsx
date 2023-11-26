import React from 'react';
import { Container, Typography, Paper, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Priscilla from '../../assets/profile/priscilla.jpg';
import Sheila from '../../assets/profile/sheila.jpg';
import Conrad from '../../assets/profile/conrad.jpg';

const StyledPaper = styled(Paper)({
  padding: '20px',
  marginTop: '20px',
});

const PersonImage = styled('img')({
  width: '100%',
  height: '420px',
  borderRadius: '8px',
  marginBottom: '8px',
});

const AboutPage = () => {
  return (
    <Container>
      <StyledPaper elevation={0}>
        <Typography variant='h4' gutterBottom>
          About Us
        </Typography>
        <Typography variant='body1' paragraph textAlign='justify'>
          Welcome to our About Us page. Our team comprises skilled and experienced software
          developers, engineers, and designers who are experts in their respective fields. We bring
          a wealth of knowledge and technical proficiency to every project, ensuring that our
          clients receive solutions that are not only robust but also innovative.
        </Typography>
        <Typography variant='body1' paragraph>
          Meet our team:
        </Typography>
        <Grid container spacing={3}>
          {/* Person 1 */}
          <Grid item xs={12} sm={4}>
            <PersonImage
              src={Priscilla} // Replace with the actual image URL
              alt='Person 1'
            />
            <Typography
              variant='subtitle1'
              sx={{ fontSize: '18px', color: '#000', fontWeight: 500 }}
            >
              Priscilla Akumu
            </Typography>
            <Typography variant='body2'>Lead developer, UI/UX designer</Typography>
          </Grid>

          {/* Person 2 */}
          <Grid item xs={12} sm={4}>
            <PersonImage
              src={Sheila} // Replace with the actual image URL
              alt='Person 2'
            />
            <Typography
              variant='subtitle1'
              sx={{ fontSize: '18px', color: '#000', fontWeight: 500 }}
            >
              Sheila Arinaitwe
            </Typography>
            <Typography variant='body2'>Software Developer</Typography>
          </Grid>

          {/* Person 3 */}
          <Grid item xs={12} sm={4}>
            <PersonImage
              src={Conrad} // Replace with the actual image URL
              alt='Person 3'
            />
            <Typography
              variant='subtitle1'
              sx={{ fontSize: '18px', color: '#000', fontWeight: 500 }}
            >
              {' '}
              Conrad Obi
            </Typography>
            <Typography variant='body2'>Software Developer</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Container>
  );
};

export default AboutPage;
