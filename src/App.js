import React, { useState, useEffect } from "react";
import "./App.css";
import moon from "./assets/moon.png";
import sun from "./assets/sun.png";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [theme, setTheme] = useState("light");
  function addItem() {
    if (!newItem) {
      alert("Lütfen Bir Öğe Giriniz");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);

    setNewItem("");
    console.log(items);
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }
  const toggleTheme = () => {
    var icon = document.getElementById("icon");
    var btn = document.getElementById("btn");
    var input = document.getElementById("input");

    if (theme === "light") {
      setTheme("dark");
      icon.src = sun;
      btn.style.backgroundColor = "#FFD56B";
      btn.style.color = "#333";
      input.style.backgroundColor = "#747474";
    } else {
      setTheme("light");
      icon.src = moon;
      btn.style.backgroundColor = "#333";
      btn.style.color = "#FFD56B";
      input.style.backgroundColor = "white";
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <img src={moon} id="icon" className="image" onClick={toggleTheme} />
      <h1>Yapılacaklar Listesi</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addItem();
        }}
      >
        <input
          id="input"
          className="input"
          type="text"
          placeholder="Bir Öğe Ekleyin.."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </form>
      <button id="btn" onClick={(e) => addItem()}>
        Ekle
      </button>

      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {" "}
              {item.value}{" "}
              <button onClick={(e) => deleteItem(item.id)}>Sil</button>{" "}
            </li>
          );
        })}
      </ul>
      <div class="footer">
        <p>© Copyright 2023 Serkan Varışlı</p>
      </div>
    </div>
  );
  // Import result is the URL of your image
}

export default App;
