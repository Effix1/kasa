import { createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Logement from './pages/Logement';
import Layout from './layouts/Layout';
import About from './pages/About';
import LayoutError from './layouts/LayoutError';

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <LayoutError />,

    children: [
      {
        path: '',
        element: <Homepage />,
        loader: async () => {
          return fetch(`/logements.json`);
        },
      },
      {
        path: 'logement/:id',
        element: <Logement />,
        loader: async ({ params }) => {
          return fetch(`/logements.json`)
            .then((res) => res.json())
            .then((logements) => {
              return logements.find((logement) => params.id === logement.id);
            });
        },
      },
      {
        path: 'a-propos',
        element: <About />,
      },
    ],
  },
]);
