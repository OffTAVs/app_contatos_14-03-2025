import { useEffect, useState } from "react";
import { useLocalSearchParams, router } from "expo-router";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { Contato, getContatos } from "../../services/contatos";
import { api } from "../../services/api";

export default function EditarContato() {
  const { id } = useLocalSearchParams();
  const [contato, setContato] = useState<Omit<Contato, "_id"> | null>(null);

  useEffect(() => {
    const carregarContato = async () => {
      try {
        const lista= await getContatos();
        const encontrado = lista.find((c:Contato) => c._id === id);
        if (encontrado) {
          const { _id, ...resto } = encontrado;
          setContato(resto);
        }
      } catch (error) {
        Alert.alert("Erro", "Não foi possível carregar o contato");
      }
    };
    carregarContato();
  }, []);

  const handleSubmit = async () => {
    if (!contato?.nome || !contato.email || !contato.telefone || !contato.endereco || !contato.foto) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    try {
      await api.put(`/contatos/${id}`, contato);
      Alert.alert("Sucesso", "Contato atualizado!");
      router.back();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível atualizar o contato");
    }
  };

  if (!contato) return null;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={contato.nome}
        onChangeText={(v) => setContato({ ...contato, nome: v })}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={contato.email}
        onChangeText={(v) => setContato({ ...contato, email: v })}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={contato.telefone}
        onChangeText={(v) => setContato({ ...contato, telefone: v })}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={contato.endereco}
        onChangeText={(v) => setContato({ ...contato, endereco: v })}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço da Foto (URL)"
        value={contato.foto}
        onChangeText={(v) => setContato({ ...contato, foto: v })}
      />
      <Button title="Atualizar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
