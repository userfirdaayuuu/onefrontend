import { toast } from 'react-toastify';

const useNotify = () => {
    const notifySuccess = (message) => toast.success(message);
    const notifyError = (message) => toast.error(message);
    const notifyInfo = (message) => toast.info(message);
    const notifyWarn = (message) => toast.warn(message);

    return { 
        notifySuccess, 
        notifyError, 
        notifyInfo, 
        notifyWarn };
};

export default useNotify;