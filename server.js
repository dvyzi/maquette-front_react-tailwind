// server.js
import jsonServer from 'json-server';  // Utiliser import au lieu de require
import cors from 'cors';               // Utiliser import au lieu de require
import path from 'path';               // Utiliser import au lieu de require

const server = jsonServer.create();
const router = jsonServer.router(path.join(process.cwd(), 'db.json'));
const middlewares = jsonServer.defaults();

// Utiliser CORS pour permettre les requêtes cross-origin
server.use(cors());
server.use(middlewares);
server.use(router);

// Lancer le serveur sur le port 5000
server.listen(5000, () => {
    console.log('JSON Server is running on http://localhost:5000');
});
