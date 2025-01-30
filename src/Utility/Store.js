
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";// Importation des fonctionspour la persistance
import storage from "redux-persist/lib/storage"; //Local Storage
import { thunk } from "redux-thunk"; // Une erreur react a demander l'installation de redux-thubkk pour le middleware
import { Redux } from './Redux';  

const persistConfig = {
  key: "employees",  // Clé du local storage
  storage,      
};

const persistedReducer = persistReducer(persistConfig, Redux); // Deux arguments, la configuration de la persistence et le reduceur

// Création du store Redux, en appliquant thunk 
export const store = createStore(
  persistedReducer,             // Appilcation du reduceur persistant. Avec donc la config et le reduceur REDUX
  applyMiddleware(thunk)        // Erreur react qui ma donner le package thunk
);

export const persistor = persistStore(store);  // Fait en sorte que les donnée soit toujours a jour et atteignable dans l'app -> Voire index.js
