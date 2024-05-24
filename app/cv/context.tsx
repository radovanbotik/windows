import { ReactNode, createContext, useContext, useReducer } from "react";

const WordContext = createContext(null);

const initialState = {
  font: "ms-sans-serif",
  size: 14,
  bold: false,
  italics: false,
  underlined: false,
};

function reducer(state, action) {
  if (action.type === "something") {
    return { ...state, value: 1 };
  }
  return state;
}

export function Context({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <WordContext.Provider value={{ greeting: "hi" }}>{children}</WordContext.Provider>;
}

export function useDocContext() {
  return useContext(WordContext);
}
