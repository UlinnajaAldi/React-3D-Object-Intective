import React, { useState } from "react";
import Card from "../components/card/Card";
import itemsModule from "../utils/items";
import { Link } from "react-router-dom";

const ItemsPage = (props) => {
  const items = itemsModule.items;

  const [objectItems, setObjectItems] = useState(items.slice(0, 3));

  const shouldShowOrLess = () => objectItems.length < items.length;

  const toggleShowMoreLess = () => {
    if (shouldShowOrLess()) {
      setObjectItems((prevObjectItems) => [
        ...prevObjectItems,
        ...items.slice(prevObjectItems.length, prevObjectItems.length + 3),
      ]);
    } else {
      setObjectItems(items.slice(0, 3));
    }
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-6 place-content-center mx-32 my-6">
        {objectItems.map((item) => (
          <Link
            to={`/detail/${item.id}`}
            className="flex items-center justify-center"
            key={item.id}
          >
            <Card image={item.image} name={item.name} desc={item.desc} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center p-10">
        <button
          className="bg-rose-400 hover:bg-rose-500 text-white font-semibold py-2 px-4 rounded-md"
          onClick={toggleShowMoreLess}
        >
          {shouldShowOrLess() ? "Show More ✦" : "Show Less ✦"}
        </button>
      </div>
    </>
  );
};

export default ItemsPage;

// import React, { useState } from "react";
// import Card from "../components/card/Card";
// import items from "../utils/items";

// const ItemsPage = (props) => {
//   const [objectItems, setObjectItems] = useState(items.slice(0, 3));
//   const [isLoading, setIsLoading] = useState(false); // tambahkan variabel isLoading

//   const shouldShowOrLess = () => objectItems.length < items.length;

//   const toggleShowMoreLess = () => {
//     setIsLoading(true); // ubah isLoading menjadi true

//     // simulasikan loading selama 2 detik
//     setTimeout(() => {
//       if (shouldShowOrLess()) {
//         setObjectItems((prevObjectItems) => [
//           ...prevObjectItems,
//           ...items.slice(prevObjectItems.length, prevObjectItems.length + 3),
//         ]);
//       } else {
//         setObjectItems(items.slice(0, 3));
//       }

//       setIsLoading(false); // ubah isLoading menjadi false
//     }, 2000);
//   };

//   return (
//     <>
//       <div className="grid grid-cols-3 gap-6 place-content-center mx-32 my-6">
//         {objectItems.map((item) => (
//           <Card
//             key={item.id}
//             image={item.image}
//             name={item.name}
//             desc={item.desc}
//           />
//         ))}
//       </div>
//       <div className="flex justify-center p-10">
//         <button
//           className="bg-rose-400 hover:bg-rose-500 text-white font-semibold py-2 px-4 rounded-md"
//           onClick={toggleShowMoreLess}
//         >
//           {isLoading ? "Loading..." : shouldShowOrLess() ? "Show More ✦" : "Show Less ✦"}
//         </button>
//       </div>
//     </>
//   );
// };

// export default ItemsPage;
