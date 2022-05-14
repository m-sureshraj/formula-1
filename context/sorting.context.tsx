import { createContext, useReducer, ReactNode, useContext } from 'react';

export enum SortOrder {
  latest = 'latest',
  old = 'old',
}

type State = SortOrder;
type Action = { type: SortOrder };
type Dispatch = (action: Action) => void;
type Context = { sortOrder: State; dispatch: Dispatch };

const SortingContext = createContext<Context | undefined>(undefined);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case SortOrder.latest: {
      return SortOrder.latest;
    }
    case SortOrder.old: {
      return SortOrder.old;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function SortingProvider({ children }: { children: ReactNode }) {
  const [sortOrder, dispatch] = useReducer(reducer, SortOrder.latest);
  const value = { sortOrder, dispatch };

  return <SortingContext.Provider value={value}>{children}</SortingContext.Provider>;
}

export function useSorting() {
  const context = useContext(SortingContext);
  if (context === undefined) {
    throw new Error('useSorting must be used within a SortingProvider');
  }

  return context;
}
