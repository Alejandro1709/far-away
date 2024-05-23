import { useEffect, useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items") || "[]");

    console.log(items);

    if (items) {
      setItems(items);
    }
  }, []);

  return (
    <div className="app">
      <Logo />
      <Form items={items} setItems={setItems} />
      <PackingList initialItems={items} onItemsChange={setItems} />
      <Stats initialItems={items} />
    </div>
  );
}

export default App;
