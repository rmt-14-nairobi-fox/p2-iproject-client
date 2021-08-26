import Swal from "sweetalert2";

function errorRes(err) {
  const errorM = err.response.data.message;

  if (Array.isArray(errorM)) {
    let errors = "";
    errorM.forEach((message) => (errors = errors + `${message}\n`));
    Swal.fire({
      position: "center",
      icon: "error",
      title: errors,
      showConfirmButton: false,
      timer: 2000,
    });

    return errors;
  } else {
    Swal.fire({
      position: "center",
      icon: "error",
      title: errorM,
      showConfirmButton: false,
      timer: 2000,
    });
    return errorM;
  }
}
export default errorRes;
