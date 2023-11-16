import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteFromCart } from "./cartSlice";

function DeleteButton({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(deleteFromCart(pizzaId));
  }

  return (
    <Button type="small" onClick={handleDeleteItem}>
      Delete
    </Button>
  );
}

export default DeleteButton;
