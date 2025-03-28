import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import "./assets/styles/index.scss";

const router = createBrowserRouter([
	{
	  path: "/",
	  element: <MainLayout/>,
	  children: [
		 {
			path: "/",
			element: <div>Home</div>,
		 },
		 {
			path: "/pizza",
			element: <div>Pizza</div>,
		 },
	  ],
	},
 ]);

createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
)
