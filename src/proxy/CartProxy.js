import { proxy } from "valtio";

const initialState = {
    Courses: true,
    Webinars: false,
}

const CartProxy = proxy(initialState);

export default CartProxy;