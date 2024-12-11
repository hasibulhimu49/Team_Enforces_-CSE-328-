import { Router } from "express";
import { UserRoutes } from "../app/modules/User/user.route";
import { CustomerRoutes } from "../app/modules/Ucustomer/ucustomer.route";
import { AdminRoutes } from "../app/modules/Admin/Admin.router";
import { ProductRoute } from "../app/modules/Product/Product.route";
import { OrderRoute } from "../app/modules/orders/order.route";
import { CartRoutes } from "../app/modules/Cart/cart.route";
import { ReviewRoutes } from "../app/modules/Review/Review.route";

const router = Router();

const moduleRoutes = [
    {
        path: '/users',
        route: UserRoutes
    },
    {
        path: '/customer',
        route: CustomerRoutes
    },
    {
        path: '/admin',
        route: AdminRoutes
    },
    {
        path: '/products',
        route: ProductRoute
    },
    {
        path: '/orders',
        route: OrderRoute
    },
    {
        path: '/cart',
        route: CartRoutes
    },
    {
        path: '/reviews',
        route: ReviewRoutes
    }

]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router  