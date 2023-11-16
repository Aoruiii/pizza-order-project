import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrderButton({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="patch" className="text-right">
      <Button type="primary">Set as Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrderButton;

export async function action({ request, params }) {
  const dataUpdate = { priority: true };
  await updateOrder(params.orderId, dataUpdate);
  return null;
}
