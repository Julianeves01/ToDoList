# 🎬 Lista de Filmes

Um aplicativo mobile elegante e intuitivo para gerenciar sua lista pessoal de filmes para assistir, desenvolvido com React Native e Expo.

## 📱 Sobre o App

O **Lista de Filmes** é um aplicativo que permite aos usuários criar e gerenciar uma lista personalizada de filmes que desejam assistir. Com uma interface moderna e funcional, você pode:

- ✅ Adicionar filmes à sua lista
- 🎯 Marcar filmes como assistidos
- 📊 Acompanhar seu progresso de filmes assistidos
- 🗑️ Remover filmes da lista
- 💾 Salvar automaticamente seus dados localmente

## 🚀 Funcionalidades

### ⭐ Principais Recursos

- **Adicionar Filmes**: Interface simples para adicionar novos filmes à lista
- **Marcar como Assistido**: Sistema de checkbox para marcar filmes já assistidos
- **Persistência de Dados**: Os dados são salvos automaticamente no dispositivo usando AsyncStorage
- **Estatísticas**: Visualize quantos filmes você já assistiu do total
- **Design Responsivo**: Interface que se adapta a diferentes tamanhos de tela
- **Visual Moderno**: Design com cores vibrantes e elementos visuais atraentes

### 🎨 Interface

- **Banner Visual**: Imagem de fundo com overlay para o título
- **Cards Elegantes**: Cada filme é exibido em um card com visual diferenciado
- **Estados Visuais**: Filmes assistidos têm aparência diferente (texto riscado, opacidade reduzida)
- **Feedback Visual**: Emojis e ícones para melhor experiência do usuário

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento React Native
- **AsyncStorage** - Armazenamento local de dados
- **React Hooks** (useState, useEffect) - Gerenciamento de estado
- **FlatList** - Lista otimizada para performance

## 📦 Dependências

```json
{
  "expo": "~53.0.22",
  "react": "19.0.0",
  "react-native": "0.79.6",
  "@react-native-async-storage/async-storage": "2.1.2",
  "react-native-web": "^0.20.0"
}
```

## 🏗️ Instalação e Execução

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Expo CLI instalado globalmente
- Dispositivo mobile ou emulador para teste

### Passo a passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Julianeves01/ToDoList.git
   cd ToDoList
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o projeto**
   ```bash
   npm start
   # ou
   yarn start
   # ou
   expo start
   ```

4. **Execute no dispositivo**
   - **Android**: `npm run android` ou use o QR Code no app Expo Go
   - **iOS**: `npm run ios` ou use o QR Code no app Expo Go
   - **Web**: `npm run web`

## 📱 Como Usar

1. **Adicionar Filme**: Digite o nome do filme no campo de entrada e toque em "Adicionar"
2. **Marcar como Assistido**: Toque no checkbox ao lado do nome do filme
3. **Remover Filme**: Toque no botão "X" vermelho no card do filme
4. **Limpar Tudo**: Use o botão "Limpar Tudo" para remover todos os filmes da lista
5. **Visualizar Progresso**: Veja suas estatísticas na barra de progresso

## 🎯 Estrutura do Projeto

```
ToDoList/
├── App.js              # Componente principal da aplicação
├── app.json            # Configurações do Expo
├── package.json        # Dependências e scripts
├── index.js            # Ponto de entrada da aplicação
└── assets/             # Imagens e recursos estáticos
    ├── icon.png
    ├── splash-icon.png
    └── adaptive-icon.png
```

## 🎨 Design System

### Paleta de Cores
- **Primary**: `#d81b60` (Rosa vibrante)
- **Secondary**: `#ad1457` (Rosa escuro)
- **Background**: `#e9e4e4ff` (Cinza claro)
- **Cards**: `#ffffff` (Branco)
- **Text**: `#4a148c` (Roxo escuro)

### Tipografia
- **Título**: 20px, bold
- **Texto dos filmes**: 14px, weight 600
- **Subtextos**: 12px, regular

## 🔄 Funcionalidades Técnicas

- **Persistência**: Usa AsyncStorage para salvar dados localmente
- **Performance**: Implementa FlatList para listas longas otimizadas
- **Estado**: Gerenciamento de estado com React Hooks
- **Responsividade**: Layout adaptável para diferentes telas

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👤 Autor

**Julianeves01**
- GitHub: [@Julianeves01](https://github.com/Julianeves01)

## 🙏 Agradecimentos

- Expo team pelo framework incrível
- React Native community pelas bibliotecas e suporte
- Unsplash pelas imagens utilizadas no banner

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
