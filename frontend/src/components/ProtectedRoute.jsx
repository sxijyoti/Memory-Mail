// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// export default function ProtectedRoute({ children }) {
//   const { user } = useAuth();

//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }

// components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // Assuming `user` holds the logged-in user's data

  if (!user) {
    // Redirect to login if no user is logged in
    return <Navigate to="/login" />;
  }

  return children; // Render the protected route if user is authenticated
};

export default ProtectedRoute;
