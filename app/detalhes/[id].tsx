import React, { useEffect, useState } from "react";
import { Contato, getContatosById } from "../../services/contatos";
import { View, Text, ActivityIndicator, Image } from "react-native";
import {styles} from "../../estilos/main";
import { useLocalSearchParams } from "expo-router";
import { getContatos } from "../../services/contatos";

export default function Detalhes(){
const Detalhes: React.FC = () =>{
    const { id } = useLocalSearchParams();
    const [contato, setContato] = useState<Contato | null>(null);

    useEffect(() => {
        const carregarContato = async ()=> {

const meucontato = await getContatosById(id.toString());
setContato(meucontato);
}
   carregarContato() }, []);
    return(
        <View style={styles.container}>
            {contato ? 
            <>
            <Text style={styles.text}>{contato.nome}</Text>
            <Text style={styles.text}>{contato.email}</Text>
            <Text style={styles.text}>{contato.telefone}</Text>
            <Text style={styles.text}>{contato.endereco}</Text>
            <Image source={{uri: contato! .foto }} style={styles.foto}/>

            </>
        :  <ActivityIndicator size="large" color="#0000ff"/>}


        </View>
    )
}
}