import { useState } from "react";

export interface Action {
  type: any;
  payload: any;
}

const useGlobalState = () => {
  const [state, setState] = useState({ showModal: false });

  const actions = (action: Action) => {
    const { type, payload } = action;

    switch (type) {
      case "setShowModal":
        return setState(payload);
      default:
        return state;
    }
  };

  return { state, actions };
};

export default useGlobalState;
