import { formatCurrency } from "../../utils/helpers";
import Loader from "../../ui/Loader";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="flex flex-col flex-wrap space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>

        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>

      <p className="text-xs capitalize italic text-stone-500">
        {isLoadingIngredients ? "Loading" : ingredients?.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
