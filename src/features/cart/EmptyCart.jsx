import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="pt-12 text-stone-800">
        Your cart is empty, start adding your first pizza.
      </p>
    </div>
  );
}

export default EmptyCart;
