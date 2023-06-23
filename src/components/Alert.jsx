import React from 'react';
import Swal from 'sweetalert2';

const Alert = () => {
  const onAlert = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully',
    });
  };
  return (
    <>
      <button className="btn btn-success" onClick={onAlert}>
        run alert
      </button>
    </>
  );
};

export default Alert;
