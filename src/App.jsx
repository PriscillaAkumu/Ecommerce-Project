import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Container } from '@mui/material';
import CustomRoute from './Routes/CustomRoute';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Container maxWidth='xl' elevation={0} disableGutters={true} sx={{ margin: '0 auto' }}>
      <Router>
        <CustomRoute />
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
