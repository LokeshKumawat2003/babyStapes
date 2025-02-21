import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DoctorsList } from '../pages/petecation/DoctorsList';
import { AppointmentForm } from './../pages/petecation/AppointmentForm';
import { AppointmentsList } from '../pages/docter/AppointmentsList';
import { DoctorAdd } from './../pages/docter/DocterAdd';
import { Navbar } from './../components/Navbar';
import Appointments from '../pages/petecation/Appointments';



export const AllRoutes = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<h2>Welcome to the Doctor Management System</h2>} />
                <Route path="/add-doctor" element={<DoctorAdd />} />
                <Route path="/appointments" element={<AppointmentsList />} />
                <Route path="/book-appointment/:doctorId" element={<AppointmentForm />} />
                <Route path="/doctors" element={<DoctorsList />} />
                <Route path="/appointmentspt" element={<Appointments />} />
            </Routes>

        </div>
    );
};
