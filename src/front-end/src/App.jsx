import './assets/css/index.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CommonLayout from "./layouts/CommonLayout";
import HomePage from "./pages/home";

function App() {
    return (
        <Router>
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <CommonLayout>
                            <HomePage />
                        </CommonLayout>
                    } />
            </Routes>
        </Router>
    );
}

export default App;
