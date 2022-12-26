import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/detail/Detail";
import itemsModule from "../utils/items";
import Toner from "../assets/objects/Toner";
import Switch from "../assets/objects/Switch";

const DetailPage = (props) => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const getItem = itemsModule.getItem;

  const itemData = useMemo(() => getItem(Number(id)), [id, getItem]);

  useEffect(() => {
    setItem(itemData);
  }, [itemData]);

  if (item === null) {
    return <p>Kosong</p>;
  }

  if (id === "1") {
    return <Toner />;
  } else if (id === "2") {
    return <Switch />;
  } else {
    return <Detail {...item} />;
  }
};

export default DetailPage;
