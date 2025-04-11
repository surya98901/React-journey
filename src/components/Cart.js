import { useSelector } from "react-redux";
import CartListItems from "./CartListItems";

const Cart = () => {
    const ItemList = useSelector((store) => store.cart.items);

    // Group items by their unique identifiers and count occurrences
    const groupedItems = ItemList.reduce((acc, item) => {
        const id = item.id || item.defaultId; // Use a unique identifier
        if (!acc[id]) {
            acc[id] = { ...item, count: 1 };
        } else {
            acc[id].count += 1;
        }
        return acc;
    }, {});

    // Calculate the total price
    const total = Object.values(groupedItems).reduce(
        (sum, item) => sum + (item.price / 100 || item.defaultPrice / 100) * item.count,
        0
    );

    return (
        <div className="cart mx-auto w-6/10 justify-items-center">
            <h1 className="text-3xl font-bold text-center mt-10">Your Cart</h1>
            <div>
                {Object.values(groupedItems).map((item) => (
                    <CartListItems key={item.id || item.defaultId} item={item} count={item.count} />
                ))}
            </div>
            <h1 className="text-xl">Total: ₹{Math.floor(total)}</h1>
        </div>
    );
};

export default Cart;