import Swal from "sweetalert2";

function succesRes(success) {
  Swal.fire({
    position: "center",
    icon: "success",
    title: success,
    showConfirmButton: false,
    timer: 2000,
  });
  return success;
}
export default succesRes;
