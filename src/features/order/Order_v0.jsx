// Test ID: IIDSAT

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import SearchOrder from "./SearchOrder";
import { getOrder } from "../../services/apiRestaurant";
import { useLoaderData, useParams } from "react-router";
import { useEffect, useState } from "react";

// const order = {
//   id: "ABCDEF",
//   customer: "Jonas",
//   phone: "123456789",
//   address: "Arroios, Lisbon , Portugal",
//   priority: true,
//   estimatedDelivery: "2027-04-25T10:00:00",
//   cart: [
//     {
//       pizzaId: 7,
//       name: "Napoli",
//       quantity: 3,
//       unitPrice: 16,
//       totalPrice: 48,
//     },
//     {
//       pizzaId: 5,
//       name: "Diavola",
//       quantity: 2,
//       unitPrice: 16,
//       totalPrice: 32,
//     },
//     {
//       pizzaId: 3,
//       name: "Romana",
//       quantity: 1,
//       unitPrice: 15,
//       totalPrice: 15,
//     },
//   ],
//   position: "-9.000,38.000",
//   orderPrice: 95,
//   priorityPrice: 19,
// };

const initialState = {
  id: null,
  status: "",
  priority: "",
  priorityPrice: 0,
  orderPrice: 0,
  estimatedDelivery: "2027-04-25T10:00:00",
  cart: [],
};

function Order() {
  const [order, setOrder] = useState(initialState);
  const { orderId } = useParams();

  useEffect(
    function () {
      async function searchOrder() {
        try {
          const order = await getOrder(orderId);
          console.log(order);
          setOrder(order);
        } catch (error) {
          console.log(error.message);
        }
      }
      searchOrder();
    },
    [orderId]
  );

  // const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div>
      <SearchOrder />
      <div>
        <h2>Status</h2>

        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

// export async function loader() {
//   const orderId = useParams();
//   const order = await getOrder(orderId);
//   return order;
// }

export default Order;
