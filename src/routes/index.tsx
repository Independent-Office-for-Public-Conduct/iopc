import {
	createBrowserRouter,
	RouteObject,
	RouterProvider,
} from "react-router-dom";
import { Landing } from "../features/Landing/Landing";
// import { Landing } from '@/features/misc';
// import { useAuth } from '@/lib/auth';

// import { protectedRoutes } from './protected';
// import { publicRoutes } from './public';

export const Routes = () => {
	//   const auth = useAuth();
	const commonRoutes: RouteObject[] = [{ path: "/", element: <Landing /> }];
	// //   const routes = auth.user ? protectedRoutes : publicRoutes;
	const browserRouter = createBrowserRouter([...commonRoutes]);
	return <RouterProvider router={browserRouter} />;
};
