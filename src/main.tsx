import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Verifique se o caminho está correto

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app') // Certifique-se de que esse ID está no seu index.html
);
