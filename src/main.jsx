import { createRoot } from 'react-dom/client';
import './styles/Section.css';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';   
import Contact from './views/Contacts.jsx';
import AboutMe from './views/AboutMe.jsx';
import Resume from './views/Resume.jsx';
import Portfolio from './views/Portfolio.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,  // base component to store all the other components
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AboutMe />,   //1st page will be home page
      },
      {
        path: '/contact',
        element: <Contact />,  //alternative page with links...
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);