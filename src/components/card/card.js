import React, { useState, useEffect } from "react";
import "./card.css";

export function Cards(props) {
  const [group1, setGroup1] = useState([]);
  const [group2, setGroup2] = useState([]);

  useEffect(() => {
    let list1 = props.fruit.slice(0, 4);
    let list2 = props.fruit.slice(4, 8);
    setGroup1(list1);
    setGroup2(list2);
  }, []);

  const changeCardsList = (item) => {
    console.log(item);
    props.assignScore(item.id);
    props.handleClick();
    let list = props.fruit.slice(0, 4);
    let listy = props.fruit.slice(4, 8);
    setGroup1(list);
    setGroup2(listy);
  };

  let cards1 = group1.map((item) => (
    <div className="card" key={item.id}>
      <img src={item.fruit} alt={item.alt} onClick={changeCardsList.bind(this, item)} />
    </div>
  ));

  let cards2 = group2.map((item) => (
    <div className="card" onClick={changeCardsList.bind(this, item)} key={item.id}>
      <img src={item.fruit} alt={item.alt} />
    </div>
  ));

  return (
    <div>
      <div className="row">
        <div className="empty"></div>
        {cards1}
        <div className=" empty"></div>
      </div>
      <div className="row">
        <div className="empty"></div>
        {cards2}
        <div className=" empty"></div>
      </div>
    </div>
  );
}
