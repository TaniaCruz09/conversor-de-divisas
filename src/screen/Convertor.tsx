import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { number } from "yup/lib/locale";

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
      [input]: text.toUpperCase(),
    });
  };

  const calculate = () => {
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
      if (form.national === "NIO" && form.foreig === "USD") {
        const results = form.monto * price.cordobaADolar;
        setForm({
          ...form,
          exChangeRate: `1 NIO = ${price.cordobaADolar} USD`,
          results,
        });
      } else if (form.national === "NIO" && form.foreig === "EUR") {
        const results = form.monto * price.cordobaAEuro;
        setForm({
          ...form,
          exChangeRate: `1 NIO = ${price.cordobaAEuro} EUR`,
          results,
        });
      } else if (form.national === "USD" && form.foreig === "NIO") {
        const results = form.monto * price.dolarACordoba;
        setForm({
          ...form,
          exChangeRate: `1 USD = ${price.dolarACordoba} NIO`,
          results,
        });
      } else if (form.national === "USD" && form.foreig === "EUR") {
        const results = form.monto * price.dolarAEuro;
        setForm({
          ...form,
          exChangeRate: `1 USD = ${price.dolarAEuro} EUR`,
          results,
        });
      } else if (form.national === "EUR" && form.foreig === "USD") {
        const results = form.monto * price.euroADolar;
        setForm({
          ...form,
          exChangeRate: `1 EUR = ${price.euroADolar} USD`,
          results,
        });
      } else if (form.national === "EUR" && form.foreig === "NIO") {
        const results = form.monto * price.euroACordoba;
        setForm({
          ...form,
          exChangeRate: `1 EUR = ${price.euroACordoba} NIO`,
          results,
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <Text style={styles.text}>Conversiones disponibles:</Text>
        <Text style={styles.text}>NIO - USD</Text>
        <Text style={styles.text}>NIO - EUR</Text>
        <Text style={styles.text}>USD - NIO</Text>
        <Text style={styles.text}>USD - EUR</Text>
        <Text style={styles.text}>EUR - USD</Text>
        <Text style={styles.text}>EUR - NIO</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Moneda Origen</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleForm(text, "national")}
          value={String(form.national)}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Moneda Destino</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleForm(text, "foreig")}
          value={String(form.foreig)}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Tasa de cambio</Text>
        <TextInput
          style={styles.input}
          value={String(form.exChangeRate)}
          editable={false}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Monto</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleForm(text, "monto")}
          value={String(form.monto)}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Resultados</Text>
        <TextInput
          editable={false}
          style={styles.input}
          value={String(form.results)}
        />
      </View>
      <View>
        <Button title="Calcular" onPress={() => calculate()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6798D0",
    alignItems: "center",
    justifyContent: "center",
  },
  topBox: {
    backgroundColor: "#6798D0",
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    textAlign: "center",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: "white",
    width: 350,
    margin: 10,
  },
  box: {
    borderBottomWidth: 1,
    width: 350,
    marginBottom: 15,
  },
  input: {
    height: 35,
    width: "100%",
    backgroundColor: "#f4f4f4",
    marginBottom: 5,
    fontSize: 15,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 2,
    borderWidth: 1,
    textAlign: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#17000",
  },
});
