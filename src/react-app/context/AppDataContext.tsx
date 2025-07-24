// src/react-app/context/AppDataContext.tsx
import { createContext, useContext, ReactNode } from 'react';

// Define the shape of our context data - combining all entity states and actions
interface AppDataContextType {
  blogs: Record<string, any>; // Placeholder for blog data structure
  // We'll add shopping lists later as needed
  // This structure makes it easy to expand
}

// Create the context with undefined initial value
const AppDataContext = createContext<AppDataContextType | undefined>(undefined);

// Provider component
export function AppDataProvider({ children }: { children: ReactNode }) {
  // Get state and actions from each entity module

  // Combine all states and actions into a single object
  const value: AppDataContextType = {
    blogs: {}
    // When we add shopping lists, they'll follow the same pattern
  };

  return (
    <AppDataContext.Provider value={value}>
      {children}
    </AppDataContext.Provider>
  );
}

// Custom hook to use the context
export function useAppData() {
  const context = useContext(AppDataContext);
  
  if (context === undefined) {
    throw new Error('useAppData must be used within an AppDataProvider');
  }
  
  return context;
}