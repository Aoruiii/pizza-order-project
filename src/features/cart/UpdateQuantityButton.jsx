import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { increaseQuantity, decreaseQuantity } from "./cartSlice";

function UpdateQuantityButton({ pizzaId, currentQuantity }) {
  // get the quantity in cart

  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center gap-2 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseQuantity(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-semibold">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateQuantityButton;
