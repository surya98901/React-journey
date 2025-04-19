import ItemCard from "./ItemCard";

const MenuCategory = (props) => {
  const { data, showItems, setindexState } = props;
  const { title } = data.card.card;
  const itemCards = data.card.card.itemCards;

  return (
    <div
      className="w-full bg-green-100"
      onClick={() => setindexState((prevState) => !prevState)} // Reverting to toggle showItems state
    >
      <div className=" bg-white mb-2 rounded-lg shadow-lg">
        <div className=" flex justify-between  cursor-pointer hover:shadow-2xl transition-all duration-300 ease-in-out">
          <h2 className="text-2xl p-2 m-1 font-bold">
            {title} {"(" + data.card.card.itemCards.length + ")"}
          </h2>
          <p className="p-2 m-1">{showItems ? "▲" : "▼"}</p>
        </div>
        {itemCards.map((item) => {
          return showItems && <ItemCard key={item.card.info.id} items={item} />;
        })}
      </div>
    </div>
  );
};

export default MenuCategory;
// data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.title
