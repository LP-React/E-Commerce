import { ItemsCartProvider } from './contexts/ItemsCartProvider'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage'
import { CartPage } from './pages/CartPage';

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/cart",
            element: <CartPage />,
        },
    ]);

    return (

        <ItemsCartProvider>
            <RouterProvider router={router} />
        </ItemsCartProvider>

    )
}

export default App
