import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import ProductPage from "../pages/ProductsPage/ProductPage";
import SigninPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SingUpPage/SignUpPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";

export const routes =[
    {
        path : '/',
        page : HomePage,
        isShowHeader : true
    },
    {
        path : '/order',
        page : OrderPage,
        isShowHeader : true
    },
    {
        path : '/products',
        page : ProductPage,
        isShowHeader : true
    },
    {
        path : '/:type',
        page : TypeProductPage,
        isShowHeader : true
    },
    {
        path : '/sign-in',
        page : SigninPage,
        isShowHeader : false
    },
    {
        path : '/sign-up',
        page : SignUpPage,
        isShowHeader : false
    },
    {
        path : '/product-details',
        page : ProductDetailsPage,
        isShowHeader : true
    },
    {
        path : '*',
        page : NotFoundPage
    }
]

