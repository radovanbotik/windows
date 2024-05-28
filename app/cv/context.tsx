"use client";
import { ReactNode, createContext, useContext, useReducer } from "react";
import { sizes, fonts } from "../lib/worddata";

type ActionTypes =
  | { type: "toggle_bold" }
  | { type: "toggle_italic" }
  | { type: "toggle_underline" }
  | { type: "set_size"; payload: typeof sizes[number] }
  | { type: "set_font"; payload: typeof fonts[number] };

export type StateType = {
  font: typeof fonts[number];
  size: typeof sizes[number];
  bold: boolean;
  italics: boolean;
  underlined: boolean;
};

type WordContextType = StateType & {
  toggleBold: () => void;
  toggleItalic: () => void;
  toggleUnderline: () => void;
  changeSize: (size: typeof sizes[number]) => void;
  changeFont: (font: typeof fonts[number]) => void;
};

const WordContext = createContext<WordContextType | null>(null);

const initialState: StateType = {
  font: "MS Sans Serif",
  size: 14,
  bold: false,
  italics: false,
  underlined: false,
};

function reducer(state: StateType, action: ActionTypes): StateType {
  console.log(action);
  if (action.type === "toggle_bold") {
    return { ...state, bold: !state.bold };
  }
  if (action.type === "toggle_italic") {
    return { ...state, italics: !state.italics };
  }
  if (action.type === "toggle_underline") {
    return { ...state, underlined: !state.underlined };
  }
  if (action.type === "set_size") {
    return { ...state, size: action.payload };
  }
  if (action.type === "set_font") {
    return { ...state, font: action.payload };
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
  function changeSize(size: typeof sizes[number]) {
    dispatch({ type: "set_size", payload: size });
  }
  function changeFont(font: typeof fonts[number]) {
    dispatch({ type: "set_font", payload: font });
  }

  return (
    <WordContext.Provider value={{ ...state, toggleBold, toggleItalic, toggleUnderline, changeSize, changeFont }}>
      {children}
    </WordContext.Provider>
  );
}

export function useDocContext() {
  const context = useContext(WordContext);
  if (!context) {
    throw new Error("useDocContext has to be used within Context");
  }
  return context;
}
