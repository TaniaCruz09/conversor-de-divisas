import { View, Text, TextInput, StyleSheet, Button } from "react-native";

interface Props {
  handleForm: (text: string, input: string) => void;
  form: {
    national: string;
    foreig: string;
    results: number;
    exChangeRate: string;
    monto: number;
  };
  calculate: () => void;
}

export default function ConversorScreen({
  handleForm,
  form,
  calculate,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <Text style={styles.topBoxText}>
          Conversiones disponibles: {"\n"} NIO - USD {"\n"} NIO - EUR {"\n"} USD
          - NIO {"\n"} USD - EUR {"\n"} EUR - USD {"\n"}EUR - NIO
        </Text>
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
    marginBottom: 60,
  },
  topBoxText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#17000",
    margin: 5,
  },
  box: {
    borderBottomWidth: 1,
    width: 350,
    marginBottom: 15,
  },
  input: {
    height: 50,
    width: "100%",
    backgroundColor: "#f4f4f4",
    marginBottom: 10,
    fontSize: 15,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 5,
    borderWidth: 1,
    textAlign: "center",
    color: "#7C7C7C",
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#17000",
  },
});
