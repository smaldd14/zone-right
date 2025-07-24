// src/App.tsx
import { BrowserRouter } from 'react-router-dom'
import "./App.css";
import { ThemeProvider } from './components/theme-provider';
import { AppDataProvider } from './context/AppDataContext';
import { TooltipProvider } from './components/ui/tooltip';
import { Toaster } from './components/ui/sonner';
import Router from './router';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <AppDataProvider>
          <TooltipProvider>
            <div className="min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-1">
                <Router />
              </main>
            </div>
            <Toaster />
          </TooltipProvider>
        </AppDataProvider>
      </ThemeProvider>      
    </BrowserRouter>
  );
}

export default App;
