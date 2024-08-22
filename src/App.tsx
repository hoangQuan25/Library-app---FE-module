import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { BookCheckoutPage } from './layouts/BookCheckoutPage/BookCheckoutPage';
import ManualLogin from './Auth/ManualLogin'; // Import the manual login component
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './Auth/AuthContext';
import PrivateRoute from './Auth/PrivateRoute'; // Import the private route component

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className='d-flex flex-column min-vh-100'>
          <Navbar />
          <div className='flex-grow-1'>
            <Routes>
              <Route path='/' element={<Navigate to='/home' />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/search' element={<SearchBooksPage />} />
              <Route path='/checkout/:bookId' element={<BookCheckoutPage />} />
              <Route path='/login' element={<ManualLogin />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
