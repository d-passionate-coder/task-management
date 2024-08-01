import { toast, Zoom } from "react-toastify";

export const errorToast = (message) => {
  toast.error(message, {
    autoClose: 3000,
    position: "bottom-right",
    hideProgressBar: true,
    transition: Zoom,
  });
};

export const successToast = (message) => {
  toast.success(message);
};

export const infoToast = (message) => {
  toast(message, {
    autoClose: 3000,
    position: "bottom-right",
    hideProgressBar: true,
    transition: Zoom,
  });
};
