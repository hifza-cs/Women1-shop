import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Shop from './Pages/Shop';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import MissionDetail from './Pages/MissionDetail';
import WebsitePurposeDetail from './Pages/WebsitePurposeDetail';
import GetStartedDetail from './Pages/GetStartedDetail';
import FAQ from './components/FAQ';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: '80px', minHeight: 'calc(100vh - 140px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/shop"
            element={
              <ProtectedRoute>
                <Shop />
              </ProtectedRoute>
            }
          />
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mission-detail" element={<MissionDetail />} />
          <Route path="/website-purpose-detail" element={<WebsitePurposeDetail />} />
          <Route path="/get-started-detail" element={<GetStartedDetail />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;