import { useState, useEffect } from 'react';
import { Route, Routes} from 'react-router-dom';


// Percorso per il componente Test
// Test si trova in 'src/page/test.tsx'
import Test from './page/Menu';

// Un unico componente App che gestisce sia il routing che l'autenticazione
function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Effetto per controllare lo stato di autenticazione all'avvio
  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (token) {
      // Se il token esiste, l'utente è autenticato
      // Qui potresti fare una chiamata API per verificare la validità del token
      console.log('Utente autenticato');
    }
    setIsLoading(false);
  }, []);

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