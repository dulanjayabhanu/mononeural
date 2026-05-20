import {toast} from "sonner";

const triggerNotification = (
    messageType: "default" | "success" | "warning",
    message: string,
    position: "top-center" | "top-right" | "bottom-left" | "bottom-center"
): void => {

    const toastConfig = {
        position: position
    }

    switch (messageType) {
        case "default":
            toast(message, toastConfig)
            break
        case "success":
            toast.success(message, toastConfig)
            break
        case "warning":
            toast.warning(message, toastConfig)
            break
        default:
            toast(message, toastConfig)
            break
    }
}

export default triggerNotification