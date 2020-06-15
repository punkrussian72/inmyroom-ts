import React, {useEffect, useState} from "react";
import Tumba, {ITumba} from "./TumbaItem";

const Catalog = () => {
  const [tumbas, setTumbas] = useState<ITumba[]>([]);
  let throttleTimeout: any = null;

  useEffect(() => {
    setTumbas(addTumbas([]));
  }, []);

  const addTumbas = (curTumbas: ITumba[]) => {
    for (let i=0; i < 10; i++) {
      curTumbas.push(generateTumbaItem());
    }
    return curTumbas;
  };

  const handleScroll = (element: any) => {
    // console.log('scrollWidth', element.scrollWidth);
    // console.log('clientWidth', element.clientWidth);
    // console.log('scrollLeft', element.scrollLeft);

    // scrollWidth - width of the whole element
    // clientWidth - width of the visible part
    // scrollLeft - width of the scrolled part
    if (element.clientWidth + element.scrollLeft === element.scrollWidth) {
      setTumbas(addTumbas(tumbas.slice()));
    }
    throttleTimeout = null;
  };

  const throttleScroll = (event: any) => {
    if (throttleTimeout === null) {
      throttleTimeout = setTimeout(handleScroll.bind(null, event.target), 350)
    }
  };

  return (
    <div className="catalog" onScroll={throttleScroll}>
      {tumbas.map((tumba, index) => <Tumba key={index} {...tumba} />)}
    </div>
  )
};

const generateTumbaItem = ():ITumba => {
  const sales = ['Огого', 'Laska Family', 'Garda', 'DG Home'];
  return {
    name: 'Тумба прикроватная Rubus с двумя ящиками',
    rating: Number((Math.random() * 4 + 1)).toFixed(1),
    price: {
      discount: !!Math.round(Math.random()),
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
