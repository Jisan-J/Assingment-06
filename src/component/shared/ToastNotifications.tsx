'use client';

import { ToastContainer } from 'react-toastify';

const ToastNotifications = () => (
    <ToastContainer
        position="top-right"
        autoClose={2500}
        theme="dark"
    />
);

export default ToastNotifications;
