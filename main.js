import { render, router } from "./lib";
import Addproduct from "./page/Addproduct";
import EditProduct from "./page/EditProduct";
import ListProduct from "./page/ListProduct";

router.on("/", () => render(ListProduct, app))
router.on("/page/add", () => render(Addproduct, app))
router.on("/page/:id/edit", ({ data }) => render(() => EditProduct(data), app))
router.resolve()