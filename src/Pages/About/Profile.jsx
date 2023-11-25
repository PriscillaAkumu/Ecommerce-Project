import React from 'react';
import { Container, Typography, Paper, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)({
  padding: '20px',
  marginTop: '20px',
});

const PersonImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  marginBottom: '8px',
});

const AboutPage = () => {
  return (
    <Container >
      <StyledPaper>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our About Us page. Here, you can provide information about your company,
          mission, vision, or any other relevant details.
        </Typography>
        <Typography variant="body1" paragraph>
          Meet our team:
        </Typography>
        <Grid container spacing={3}>
          {/* Person 1 */}
          <Grid item xs={12} sm={4}>
            <PersonImage
              src="https://placekitten.com/200/200" // Replace with the actual image URL
              alt="Person 1"
            />
            <Typography variant="subtitle1">John Doe</Typography>
            <Typography variant="body2">CEO</Typography>
          </Grid>

          {/* Person 2 */}
          <Grid item xs={12} sm={4}>
            <PersonImage
              src="https://placekitten.com/200/201" // Replace with the actual image URL
              alt="Person 2"
            />
            <Typography variant="subtitle1">Jane Smith</Typography>
            <Typography variant="body2">CTO</Typography>
          </Grid>

          {/* Person 3 */}
          <Grid item xs={12} sm={4}>
            <PersonImage
              src="https://placekitten.com/200/202" // Replace with the actual image URL
              alt="Person 3"
            />
            <Typography variant="subtitle1">Bob Johnson</Typography>
            <Typography variant="body2">Lead Developer</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Container>
  );
};

export default AboutPage;
