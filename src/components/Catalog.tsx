import React, {useEffect, useState} from "react";
import Tumba, {ITumba} from "./TumbaItem";

const Catalog = () => {
  const [tumbas, setTumbas] = useState<ITumba[]>([]);

  useEffect(() => {
    const newTumbas = [];
    for (let i=0; i < 10; i++) {
      newTumbas.push(generateTumbaItem());
    }
    setTumbas(newTumbas);
  }, []);

  return (
    <div className="catalog">
      {tumbas.map((tumba, index) => <Tumba key={index} {...tumba} />)}
    </div>
  )
};

const generateTumbaItem = ():ITumba => {
  const sales = ['Огого', 'Laska Family', 'Garda', 'DG Home'];
  return {
    name: 'Тумба прикроватная Rubus с двумя ящиками',
    rating: Number(Math.floor(Math.random() * 5)).toFixed(1),
    price: {
      discount: Math.floor(Math.random() * 2) > 0,
      current_price: '56 720 P',
      old_price: '67 736 Р'
    },
    color: 'Черный',
    material: 'Ткань',
    size: 'ш. 349 х в. 234 х г. 323',
    mechanism: 'Французская раскладушка',
    seller: sales[Math.floor(Math.random() * sales.length)]
  }
};

export default Catalog;
