import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/features/cart/cartSlice";
import { IProduct } from "../types/globalTypes";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {
  const dispatch = useDispatch();
  const handleAddProduct = (product: IProduct) => {
    dispatch(addToCart(product));
    toast({
      description: `${product.name} added`,
    });
  };
  return (
    <div>
      <div className="rounded-2xl h-[480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link to={`/product-details/${product._id}`} className="w-full">
          <img src={product?.image} alt="product" />
          <h1 className="text-xl font-semibold">{product?.name}</h1>
        </Link>
        <p>Rating: {product?.rating}</p>
        <p className="text-sm">
          Availability: {product?.status ? "In stock" : "Out of stock"}
        </p>
        <p className="text-sm">Price: {product?.price}</p>
        <Button
          className="bg-violet-900 text-white"
          variant="default"
          onClick={() => handleAddProduct(product)}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}
