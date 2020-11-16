import React, { createContext, useEffect, useState } from "react";

interface ToastStateType {
  isOpen?: boolean;
  message?: string;
  position?: string;
  duration?: number;
  color: string;
}

interface ContextProps {
  toastState: ToastStateType;
  setToastState: (toastState: ToastStateType) => void;
}

// const initialState = {
//   toastState: {
//     isOpen: false,
//     message: "",
//     position: "bottom",
//     duration: 200,
//   },
//   setToastState: () => console.log("modal state"),
// };

export const ToastContext = createContext({} as ContextProps);

const ToastContextProvider = (props: any) => {
  const [toastState, setToastState] = useState({
    isOpen: false,
    message: "",
    position: "bottom",
    duration: 1000,
    color: "dark",
  });

  useEffect(() => console.log(toastState));

  return (
    // @ts-ignore
    <ToastContext.Provider value={{ toastState, setToastState }}>
      {props.children}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
