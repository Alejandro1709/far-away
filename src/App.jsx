import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { initialItems } from "./data/items";

function App() {
  const [items, setItems] = useState(initialItems);
  const [description, setDescription] = useState("");
  const [qty, setQty] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: items.length + 1,
      description,
      qty,
      packed: false,
    };

    setItems([...items, newItem]);
  };

  return (
    <div className="app">
      <Logo />
      <Form
        description={description}
        qty={qty}
        setQty={setQty}
        setDescription={setDescription}
        onSubmit={handleSubmit}
      />
      <PackingList initialItems={items} />
      <Stats initialItems={items} />
    </div>
  );
}

export default App;
