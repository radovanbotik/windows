"use client";
import { ReactNode, createContext, useContext, useReducer } from "react";

type ActionTypes = { type: "set-theme" };

type StateProps = {
  xpTheme: boolean;
};
type ContextProps = StateProps & { setXPTheme: () => void };

const GlobalContext = createContext<null | ContextProps>(null);
const initialState: StateProps = {
  xpTheme: false,
};

function reducer(state: StateProps, action: ActionTypes) {
  if (action.type === "set-theme") {
    return { ...state, xpTheme: !state.xpTheme };
  }
  return state;
}

export function Context({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setXPTheme() {
    dispatch({ type: "set-theme" });
  }

  return <GlobalContext.Provider value={{ ...state, setXPTheme }}>{children}</GlobalContext.Provider>;
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("useDocContext has to be used within Context");
  return context;
}
