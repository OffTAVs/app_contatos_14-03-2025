import React from "react";
import { Contato } from "../services/contatos";
import { View, Text } from "react-native";
import styles from "../estilos/main";

const Detalhes: React.FC<Contato> = (contato) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{contato.nome}</Text>
            <Text style={styles.text}>{contato.email}</Text>
            <Text style={styles.text}>{contato.telefone}</Text>
            <Text style={styles.text}>{contato.endereco}</Text>



        </View>
    )
}

