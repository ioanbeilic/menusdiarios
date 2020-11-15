import React, { createContext, useEffect, useState } from "react";

interface ModalStateType {
  state: boolean;
  component: any;
}

interface ContextProps {
  modalState: ModalStateType;
  setModalState: (modalState: ModalStateType) => void;
}

const initialState = {
  modalState: {
    state: false,
    component: null,
  },
  setModalState: () => console.log("modal state"),
};

export const ModalContext = createContext<ContextProps>(initialState);

const ModalContextProvider = (props: any) => {
  const [modalState, setModalState] = useState({
    state: false,
    component: null,
  });

  useEffect(() => console.log(modalState));

  return (
    <ModalContext.Provider value={{ modalState, setModalState }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
