import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { addContato } from "../services/contatos";
import { router } from "expo-router";

export default function NovoContato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");

  const handleSubmit = async () => {
    if (!nome || !email || !telefone || !endereco) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    try {
      await addContato({ nome, email, telefone, endereco, foto: "#" });
      Alert.alert("Sucesso", "Contato adicionado!");
      router.back();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível adicionar o contato.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Telefone" value={telefone} onChangeText={setTelefone} />
      <TextInput style={styles.input} placeholder="Endereço" value={endereco} onChangeText={setEndereco} />
      <Button title="Salvar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 16,
    },
    input:{
    height:40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    
    
    },
})