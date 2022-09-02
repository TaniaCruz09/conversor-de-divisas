import React from "react";
import { View } from "react-native";
import { useState } from "react";
import ConversorScreen from "../ConversorScreen";

export default function Conversor() {
  const [form, setForm] = useState({
    national: "NIO",
    foreig: "USD",
    results: 0,
    exChangeRate: "1 NIO = 0.02757 USD",
    monto: 1,
  });

  const handleForm = (text: string, input: string) => {
    setForm({
      ...form,
      [input]: text,
    });
  };

  const calculate = () => {
    const national = form.national.toUpperCase();
    const foreig = form.foreig.toUpperCase();
    interface Price {
      cordobaADolar: number;
      cordobaAEuro: number;
      dolarACordoba: number;
      dolarAEuro: number;
      euroADolar: number;
      euroACordoba: number;
    }
    const price: Price = {
      cordobaADolar: 0.02757,
      cordobaAEuro: 0.0276,
      dolarACordoba: 35.483,
      dolarAEuro: 1.00111,
      euroADolar: 0.99873,
      euroACordoba: 35.4379,
    };

    if (isNaN(form.monto)) {
      alert("El monto no acepta letras");
      setForm({
        ...form,
        results: 0,
      });
    } else {
      if (national === "NIO" && foreig === "USD") {
        const results = form.monto * price.cordobaADolar;
        setForm({
          ...form,
          exChangeRate: `1 NIO = ${price.cordobaADolar} USD`,
          results,
        });
      } else if (national === "NIO" && foreig === "EUR") {
        const results = form.monto * price.cordobaAEuro;
        setForm({
          ...form,
          exChangeRate: `1 NIO = ${price.cordobaAEuro} EUR`,
          results,
        });
      } else if (national === "USD" && foreig === "NIO") {
        const results = form.monto * price.dolarACordoba;
        setForm({
          ...form,
          exChangeRate: `1 USD = ${price.dolarACordoba} NIO`,
          results,
        });
      } else if (national === "USD" && foreig === "EUR") {
        const results = form.monto * price.dolarAEuro;
        setForm({
          ...form,
          exChangeRate: `1 USD = ${price.dolarAEuro} EUR`,
          results,
        });
      } else if (national === "EUR" && foreig === "USD") {
        const results = form.monto * price.euroADolar;
        setForm({
          ...form,
          exChangeRate: `1 EUR = ${price.euroADolar} USD`,
          results,
        });
      } else if (national === "EUR" && foreig === "NIO") {
        const results = form.monto * price.euroACordoba;
        setForm({
          ...form,
          exChangeRate: `1 EUR = ${price.euroACordoba} NIO`,
          results,
        });
      } else {
        alert(
          "Algo anda mal!! por favor verifica que la conversion ingresada este disponible"
        );
      }
    }
  };

  return (
    <ConversorScreen
      handleForm={handleForm}
      form={form}
      calculate={calculate}
    ></ConversorScreen>
  );
}
