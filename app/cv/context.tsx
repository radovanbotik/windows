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
  if (action.type === "toggle_bold") {
    return { ...state, bold: !state.bold };
  }
  if (action.type === "toggle_italic") {
    return { ...state, bold: !state.bold };
  }
  if (action.type === "toggle_underline") {
    return { ...state, bold: !state.bold };
  }
  return state;
}

export function Context({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function toggleBold() {
    dispatch({ type: "toggle_bold" });
  }
  function toggleItalic() {
    dispatch({ type: "toggle_italic" });
  }
  function toggleUnderline() {
    dispatch({ type: "toggle_underline" });
  }

  return (
    <WordContext.Provider value={{ ...state, toggleBold, toggleItalic, toggleUnderline }}>
      {children}
    </WordContext.Provider>
  );
}

export function useDocContext() {
  return useContext(WordContext);
}
