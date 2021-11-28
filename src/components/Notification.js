import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export default function Notification() {
  const Notify = () => {
    toast('hello!');
  };
  return (
    <div>
      <h1>Notification</h1>
    </div>
  );
}
