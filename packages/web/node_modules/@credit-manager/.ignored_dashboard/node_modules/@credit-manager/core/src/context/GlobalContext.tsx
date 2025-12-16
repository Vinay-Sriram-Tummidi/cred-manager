import React, { createContext, useContext, useReducer, type ReactNode } from "react";

///////Type and Interfaces////////////
export interface Account {
  id: string;
  type: "Gold" | "Silver";
  balance: number;
  isActive: boolean;
}

interface State {
  accounts: Account[];
  user: string | null;
}

type Action =
  | { type: "ACTIVATE_ACCOUNT"; payload: string }
  | { type: "DEACTIVATE_ACCOUNT"; payload: string }
  | { type: "SET_USER"; payload: string }
  | { type: "LOGOUT" };

const initialState: State = {
  user: null,
  accounts: [
    { id: "1", type: "Gold", balance: 5000, isActive: true },
    { id: "2", type: "Silver", balance: 2500, isActive: false },
  ],
};

/////////////////////////

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ACTIVATE_ACCOUNT":
      return {
        ...state,
        accounts: state.accounts.map((acc) =>
          acc.id === action.payload ? { ...acc, isActive: true } : acc,
        ),
      };
    case "DEACTIVATE_ACCOUNT":
      return {
        ...state,
        accounts: state.accounts.map((acc) =>
          acc.id === action.payload ? { ...acc, isActive: false } : acc,
        ),
      };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
}

//creating a context
export const GlobalContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

//provider
export function GlobalProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within GlobalProvider");
  }
  return context;
}
