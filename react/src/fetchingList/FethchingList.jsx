import React from "react";
import { useEffect } from "react";

const FetchingList = () => {
  const items = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

  const [name, setName] = React.useState("");
  //   const [filteredItems, setFilteredItems] = React.useState(items);

  //    one way to to do this filter
  //   useEffect(() => {
  //     setFilteredItems(
  //       items.filter((item) => item.toLowerCase().includes(name.toLowerCase())),
  //     );
  //     console.log("Filtering items...", filteredItems);
  //   }, [name]);

  // second way to do this filter without useEffect
  //   const hangleChange = (e) => {
  //     setName(e.target.value);
  //     setFilteredItems(
  //       items.filter((item) => item.toLowerCase().includes(name.toLowerCase())),
  //     );
  //   };

  //  3rd way  filter is depeneding on name and items so we do not need the new state for filteredItems and we can directly filter items in the render method
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(name.toLowerCase()),
  );
  return (
    <div>
      <h1>Fetching List</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        // onChange={hangleChange}
        placeholder="Search items"
      />
      <ul>
        {/* for 1st and 2nd way to do this filter */}
        {/* {filteredItems.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
        {filteredItems.length === 0 && <li>No items found</li>} */}

        {/* for 3rd way to do this filter */}
        {filteredItems.length > 0 ? (
          filteredItems.map((item, key) => <li key={key}>{item}</li>)
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  );
};

export default FetchingList;
