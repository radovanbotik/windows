"use client";
import { ReactNode, createContext, useContext, useReducer } from "react";

type ActionTypes = { type: "set-theme"; payload: "classic" | "xp" };

type StateProps = {
  theme: "classic" | "xp";
};
type ContextProps = StateProps & { setClassicTheme: () => void; setXPTheme: () => void };

const GlobalContext = createContext<null | ContextProps>(null);
const initialState: StateProps = {
  theme: "classic",
};

function reducer(state: StateProps, action: ActionTypes) {
  if (action.type === "set-theme") {
    return { ...state, theme: action.payload };
  }
  return state;
}

export function Context({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setClassicTheme() {
    dispatch({ type: "set-theme", payload: "classic" });
  }
  function setXPTheme() {
    dispatch({ type: "set-theme", payload: "xp" });
  }

  return <GlobalContext.Provider value={{ ...state, setClassicTheme, setXPTheme }}>{children}</GlobalContext.Provider>;
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("useDocContext has to be used within Context");
  return context;
}
