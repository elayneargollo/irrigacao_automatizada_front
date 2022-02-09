import React from 'react';
import Swal from 'sweetalert2'

function MontarAlert(props) {
  return Swal.fire({
    text: props.mensagem,
    icon: props.icon,
    showConfirmButton: false,
    timer: 1500
  })
}

export default function Alert(props) {
  return (
    <div>
      <MontarAlert mensagem={props.mensagem} icon={props.icon} />
    </div>
  );
}