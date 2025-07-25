import { useState, useEffect } from 'react';
import { Route, Routes} from 'react-router-dom';


// Percorso per il componente Test
// Test si trova in 'src/page/test.tsx'
import Test from './page/Menu';

// Un unico componente App che gestisce sia il routing che l'autenticazione
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Effetto per controllare lo stato di autenticazione all'avvio
  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (token) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  // Funzione per gestire il login
  const handleLogin = (success: boolean) => {
    if (success) {
      localStorage.setItem('admin_token', 'admin_authenticated');
      setIsAuthenticated(true);
    }
  };

  // Funzione per gestire il logout
  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setIsAuthenticated(false);
  };

  // Mostra una schermata di caricamento mentre si verifica l'autenticazione
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Routes>
      
        <Route path="/" element={<Test />} />
        
      </Routes>
    </div>
  );
}

export default App;