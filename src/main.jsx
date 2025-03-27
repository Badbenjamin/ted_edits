
import { StrictMode } from 'react'
import { ReactDOM, createRoot} from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ErrorElement from './ErrorElement.jsx'
import WorkPage from './WorkPage.jsx'
import About from './About.jsx'
import EditInfoPage from './EditInfoPage.jsx'

const router = createBrowserRouter([
  {
    path: "/ted_edits",
    element: <App />,
    errorElement: <ErrorElement />,
    children: []
  },
  {
    path: "/work",
    element: <WorkPage/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: '/edits/:id',
    element: <EditInfoPage/>
  }
])

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);