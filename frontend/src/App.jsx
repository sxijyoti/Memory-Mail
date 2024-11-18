// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Landing from './pages/Landing';
// import Dashboard from './pages/Dashboard';
// import CreateCapsule from './pages/CreateCapsule';
// import EditCapsule from './pages/EditCapsule';
// import Notifications from './pages/Notifications';
// import Settings from './pages/Settings';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import ProtectedRoute from './components/ProtectedRoute';
// import { AuthProvider } from './context/AuthContext';
// import './index.css';

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <div className="min-h-screen bg-gray-50">
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Landing />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/dashboard" element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             } />
//             <Route path="/create" element={
//               <ProtectedRoute>
//                 <CreateCapsule />
//               </ProtectedRoute>
//             } />
//             <Route path="/edit/:id" element={
//               <ProtectedRoute>
//                 <EditCapsule />
//               </ProtectedRoute>
//             } />
//             <Route path="/notifications" element={
//               <ProtectedRoute>
//                 <Notifications />
//               </ProtectedRoute>
//             } />
//             <Route path="/settings" element={
//               <ProtectedRoute>
//                 <Settings />
//               </ProtectedRoute>
//             } />
//           </Routes>
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import CreateCapsule from './pages/CreateCapsule';
import EditCapsule from './pages/EditCapsule';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute'; // Make sure this is imported
import { AuthProvider } from './context/AuthContext';
import AboutUs from './pages/AboutUs';
import './index.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/create" element={
              <ProtectedRoute>
                <CreateCapsule />
              </ProtectedRoute>
            } />
            <Route path="/edit/:id" element={
              <ProtectedRoute>
                <EditCapsule />
              </ProtectedRoute>
            } />
            <Route path="/notifications" element={
              <ProtectedRoute>
                <Notifications />
              </ProtectedRoute>
            } />
            <Route path="/settings" element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
