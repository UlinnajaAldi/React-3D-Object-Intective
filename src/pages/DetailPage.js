import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/detail/Detail";
import itemsModule from "../utils/items";

const DetailPage = (props) => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  const getItem = itemsModule.getItem;

  useEffect(() => {
    setItem(getItem(Number(id)));
  }, [id, getItem]);

  if (item === null) {
    return <p>Kosong</p>;
  }

  return (
    <div>
      <Detail {...item} />
    </div>
  );
};

export default DetailPage;
