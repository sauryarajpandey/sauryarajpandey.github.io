import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const config = {
  position: "top-center",
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const successToast = (text) => toast.success(text, config);

export const errorToast = (text) => toast.error(text, config);

export const warningToast = (text) => toast.warning(text, config);
