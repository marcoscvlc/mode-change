// Importação das bibliotecas necessárias
import React, { useState } from 'react';  // useState é um hook do React para gerenciar estado
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";  // Componentes do React Native

// Importação dos arquivos de imagem
// Observação: Os caminhos devem corresponder à localização real dos arquivos no seu projeto
import digimonCommon from './assets/pictures/Sistermon_Ciel.png';        // Imagem normal
import digimonAwaked from './assets/pictures/Sistermon_Ciel_Despertar.png';  // Imagem "despertada"

// Componente principal do aplicativo
export default function App() {
  // Estado que controla qual imagem será exibida
  // isActive começa como false (imagem comum) e alterna quando clicado
  const [isActive, setIsActive] = useState(false);

  // Função que inverte o estado atual quando chamada
  function modeCharge() {
    // Atualiza o estado para o valor contrário do atual
    setIsActive(oldValue => !oldValue);  // Se era true vira false e vice-versa
  }

  // Retorna a estrutura visual do componente
  return (
    // View principal - container que ocupa toda a tela
    // O estilo muda de acordo com o estado (fundo preto ou preto)
    <View style={[styles.container, isActive ? styles.containerOff : styles.containerOn]}>
      
      {/* TouchableOpacity - área clicável que responde ao toque */}
      <TouchableOpacity onPress={modeCharge}>  // Chama modeCharge quando pressionado
        
        {/* Image - exibe a imagem atual baseada no estado */}
        <Image 
          source={isActive ? digimonAwaked : digimonCommon}  // Seleciona a imagem baseada no estado
          style={styles.image}  // Aplica o estilo de dimensionamento
        />
      </TouchableOpacity>
    </View>
  );
}

// Definição dos estilos usando StyleSheet
const styles = StyleSheet.create({
  // Estilo base do container (compartilhado)
  container: {
    flex: 1,                   // Ocupa todo o espaço disponível
    alignItems: 'center',      // Centraliza horizontalmente
    justifyContent: 'center',  // Centraliza verticalmente
  },
  
  // Estilo quando ativo (fundo branco)
  containerOn: {
    backgroundColor: '#fff',   // Cor de fundo branca
  },
  
  // Estilo quando inativo (fundo preto)
  containerOff: {
    backgroundColor: '#000',   // Cor de fundo preta
  },
  
  // Estilo da imagem
  image: {
    width: 300,               // Largura fixa
    height: 300,              // Altura fixa
    resizeMode: 'contain'     // Mantém proporção sem cortar a imagem
  }
});