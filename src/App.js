import './App.css';
import './styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/about" element={<div className="container"><h1>About Page</h1></div>} />
        <Route path="/menu" element={<div className="container"><h1>Menu Page</h1></div>} />
        <Route path="/order-online" element={<div className="container"><h1>Order Online Page</h1></div>} />
        <Route path="/login" element={<div className="container"><h1>Login Page</h1></div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;