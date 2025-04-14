# Primeiros Passos com React Native & Expo - Modo Charge

## 📱 Sobre o Projeto

**Modo Charge** é um aplicativo simples desenvolvido em React Native que demonstra:
- Uso básico de componentes (`View`, `Image`, `TouchableOpacity`)
- Gerenciamento de estado com `useState`
- Alternância entre imagens com efeito de clique
- Mudança de tema (claro/escuro)

## ✨ Funcionalidades

- Toque na imagem para alternar entre os modos "Normal" e "Despertado"
- Fundo que muda de cor conforme o estado (preto/branco)
- Exemplo prático de componentes interativos

## 🛠️ Tecnologias Utilizadas

- React Native
- Expo (para desenvolvimento)
- TypeScript (opcional)

## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd modo-charge
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   # ou
   yarn start
   ```

4. Escaneie o QR code com o app Expo Go ou execute em um emulador.

## 📝 Estrutura do Código

```
modo-charge/
├── assets/
│   └── pictures/
│       ├── Sistermon_Ciel.png
│       └── Sistermon_Ciel_Despertar.png
├── App.tsx (ou App.js)
└── package.json
```

## 💡 Conceitos Aprendidos

- **Estado do componente**: Uso do `useState` para controlar a interface
- **Componentes básicos**:
  - `TouchableOpacity`: Cria áreas clicáveis
  - `Image`: Exibe imagens
- **Estilização**: Uso do `StyleSheet` para organizar os estilos
- **Renderização condicional**: Troca de imagens baseada no estado

## 📚 Próximos Passos

Sugestões para expandir o projeto:
1. Adicionar animações na transição
2. Implementar um sistema de temas mais completo
3. Adicionar mais Digimons e criar um seletor
4. Integrar com API Digimon

## 🎨 Preview

![Modo Normal](assets/pictures/Sistermon_Ciel.png) ![Modo Despertado](assets/pictures/Sistermon_Ciel_Despertar.png)

> Dica: Este projeto é perfeito para quem está começando com React Native e quer entender os conceitos básicos de estado e interação!

---

Feito com ❤️ por marcoscvlc - 2025  
Baseado no tutorial de primeiros passos com React Native
