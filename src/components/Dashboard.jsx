import { useAuth } from '../context/authContext';
import { testRequest } from '../services/authServices';

export default function Dashboard() {
  const { signout } = useAuth();

  const handleTestRequest = async () => {
    await testRequest();
  };

  return (
    <>
      <h1>Welcome to the Dashboard ! </h1>

      <button
        style={{ color: 'white', backgroundColor: 'blue', marginRight: '20px' }}
        onClick={handleTestRequest}
      >
        Test Request
      </button>

      <button style={{ color: 'white', backgroundColor: 'blue' }} onClick={() => signout()}>
        Log out
      </button>
    </>
  );
}
