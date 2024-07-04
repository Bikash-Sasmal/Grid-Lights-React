import { useState } from "react";
import "./App.css";
import Cell from "./components/Cell";
import Heading from "./components/Heading";

function App() {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const deactivateCells = () => {
    setIsDeactivating(true);

    const timer = setInterval(() => {
      setOrder((origOrder) => {
        const newOrder = origOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }
        return newOrder;
      });
    }, 300);
  };

  const activateCells = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);
    // console.log(newOrder);
    // deactivate
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      // filter(Boolean)  it remove the falsy value and only give the length for 8 items inside the array
      deactivateCells();
    }
  };

  return (
    
    <div className="wrapper">
    <Heading />
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${config[0].length}, 1fr)`,
        }}
      >
        {config.flat(1).map((value, index) => {
          return value ? (
            <Cell
              key={index}
              label={`cell ${index}`}
              filled={order.includes(index)}
              onClick={() => activateCells(index)}
              isDisabled={order.includes(index) || isDeactivating}
            />
          ) : (
            <span key={index} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
