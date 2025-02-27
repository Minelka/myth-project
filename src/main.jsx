import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { DataProvider } from './context/DataContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
    <DataProvider>
        <AuthProvider>
            <App />
        </AuthProvider>
    </DataProvider>

);
