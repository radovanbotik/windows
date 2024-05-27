import { ReactNode, createContext, useContext, useReducer } from "react";
import { Email } from "../lib/inboxdata";

// type SectionTypes = 'inbox' | 'sent' | 'deleted' | 'contacts'
type ActionTypes = { type: "set-modal-open" } | { type: "set-modal-closed" } | { type: "set-content"; payload: Email };
type InitialState = {
  isModalOpen: boolean;
  content: Email | null;
};
type ContextType = InitialState & {
  openModal: (email: Email) => void;
  closeModal: () => void;
};

export const InboxContext = createContext<ContextType | null>(null);

const initialState = {
  isModalOpen: false,
  content: null,
};

function reducer(state: InitialState, action: ActionTypes): InitialState {
  console.log(action);
  if (action.type === "set-modal-open") {
    return { ...state, isModalOpen: true };
  }
  if (action.type === "set-modal-closed") {
    return { ...state, isModalOpen: false };
  }
  return state;
}

export function Context({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function openModal(email: Email) {
    dispatch({ type: "set-content", payload: email });
    dispatch({ type: "set-modal-open" });
  }

  function closeModal() {
    dispatch({ type: "set-modal-closed" });
  }

  return <InboxContext.Provider value={{ ...state, openModal, closeModal }}>{children}</InboxContext.Provider>;
}

export function useInboxContext() {
  const context = useContext(InboxContext);
  if (!context) throw new Error("useInboxContext has to be used within Context");
  return context;
}
