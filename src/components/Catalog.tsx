import React, {useEffect, useState, useRef, useCallback} from "react";
import Tumba, {ITumba} from "./TumbaItem";
import {throttle} from 'lodash';

const Catalog = () => {
  const [tumbas, setTumbas] = useState<ITumba[]>([]);
  const catalogContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTumbas(addTumbas());
  }, []);

  const addTumbas = () => {
    const newTumbas = [];
    for (let i=0; i < 10; i++) {
      newTumbas.push(generateTumbaItem());
    }
    return newTumbas;
  };

  const handleScroll = useCallback((e: any) => {
    // scrollWidth - width of the whole element
    // clientWidth - width of the visible part
    // scrollLeft - width of the scrolled part

    const {scrollWidth, clientWidth, scrollLeft} = e.target;
    if (clientWidth + scrollLeft === scrollWidth) {
      setTumbas(tumbas => [...tumbas, ...addTumbas()]);
    }
  }, []);


  useEffect(() => {
    const wrapped = throttle(handleScroll, 350);
    if (catalogContainer && catalogContainer.current) {
      catalogContainer.current.addEventListener('scroll', wrapped)
    }
    return () => {
      catalogContainer?.current?.removeEventListener('scroll', wrapped)
    }
  }, [tumbas, handleScroll]);

  return (
    <div className="catalog" ref={catalogContainer}>
      {tumbas.map((tumba, index) => {
          return (<Tumba key={index} {...tumba} />)
      })}
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
