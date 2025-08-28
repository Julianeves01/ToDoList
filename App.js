import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
  Image
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@filmes';

export default function App() {
  const [filme, setFilme] = useState('');
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    carregarFilmes();
  }, []);

  const carregarFilmes = async () => {
    try {
      const filmesSalvos = await AsyncStorage.getItem(STORAGE_KEY);
      if (filmesSalvos) {
        setFilmes(JSON.parse(filmesSalvos));
      }
    } catch (error) {
      console.log('Erro ao carregar filmes:', error);
    }
  };

  const salvarFilmes = async (novosFilmes) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(novosFilmes));
    } catch (error) {
      console.log('Erro ao salvar filmes:', error);
    }
  };

  const adicionarFilme = () => {
    if (!filme.trim()) return;

    const novoFilme = { 
      id: Date.now().toString(), 
      nome: filme.trim(),
      assistido: false 
    };
    
    const novaLista = [...filmes, novoFilme];
    setFilmes(novaLista);
    salvarFilmes(novaLista);
    setFilme('');
  };

  const marcarComoAssistido = (id) => {
    const novaLista = filmes.map(item => 
      item.id === id ? { ...item, assistido: !item.assistido } : item
    );
    setFilmes(novaLista);
    salvarFilmes(novaLista);
  };

  const removerFilme = (id) => {
    const novaLista = filmes.filter(item => item.id !== id);
    setFilmes(novaLista);
    salvarFilmes(novaLista);
  };

  const limparTudo = () => {
    setFilmes([]);
    salvarFilmes([]);
  };

  const renderItem = ({ item }) => (
    <View style={[styles.card, item.assistido && styles.cardAssistido]}>
      <View style={styles.cardContent}>
        <TouchableOpacity 
          onPress={() => marcarComoAssistido(item.id)}
          style={styles.checkboxContainer}
        >
          <View style={[styles.checkbox, item.assistido && styles.checkboxMarcado]}>
            {item.assistido && <Text style={styles.checkmark}>✓</Text>}
          </View>
        </TouchableOpacity>
        
        <View style={styles.filmeInfo}>
          <Text style={[styles.filmeTexto, item.assistido && styles.filmeTextoAssistido]}>
            {item.nome}
          </Text>
          <Text style={styles.statusTexto}>
            {item.assistido ? '🎬 Assistido' : '⏳ Para assistir'}
          </Text>
        </View>
        
        <TouchableOpacity onPress={() => removerFilme(item.id)} style={styles.botaoRemover}>
          <Text style={styles.botaoRemoverTexto}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardPrincipal}>
        <View style={styles.bannerContainer}>
          <Image 
            source={{
              uri: 'https://images.unsplash.com/photo-1489599904386-4b7e9b9b9a8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
            }}
            style={styles.bannerImage}
          />
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerTitulo}>🎬 Minha Lista de Filmes</Text>
            <Text style={styles.bannerSubtitulo}>Filmes para assistir</Text>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Adicionar novo filme..."
            placeholderTextColor="#ad1457"
            value={filme}
            onChangeText={setFilme}
            onSubmitEditing={adicionarFilme}
            returnKeyType="done"
          />
          <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarFilme}>
            <Text style={styles.botaoAdicionarTexto}>Adicionar</Text>
          </TouchableOpacity>
        </View>

        {filmes.length === 0 ? (
          <View style={styles.mensagemVaziaContainer}>
            <Text style={styles.mensagemVaziaTexto}>🍿 Nenhum filme na lista ainda!</Text>
            <Text style={styles.mensagemVaziaSubtexto}>Adicione filmes para assistir</Text>
          </View>
        ) : (
          <>
            <View style={styles.estatisticas}>
              <Text style={styles.estatisticasTexto}>
                📊 {filmes.filter(f => f.assistido).length} de {filmes.length} filmes assistidos
              </Text>
            </View>
            <FlatList
              data={filmes}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              style={styles.lista}
              showsVerticalScrollIndicator={false}
            />
          </>
        )}

        {filmes.length > 0 && (
          <TouchableOpacity style={styles.botaoLimpar} onPress={limparTudo}>
            <Text style={styles.botaoLimparTexto}>Limpar Tudo</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e4e4ff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  cardPrincipal: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
    maxWidth: 500,
    width: '100%',
    maxHeight: '90%',
  },
  bannerContainer: {
    height: 140,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 15,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bannerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(216, 27, 96, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  bannerSubtitulo: {
    fontSize: 12,
    color: '#fce4ec',
    textAlign: 'center',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    backgroundColor: '#fce4ec',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#880e4f',
    height: 40,
  },
  botaoAdicionar: {
    backgroundColor: '#d81b60',
    borderRadius: 8,
    marginLeft: 10,
    paddingHorizontal: 12,
    justifyContent: 'center',
    height: 40,
  },
  botaoAdicionarTexto: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  estatisticas: {
    backgroundColor: '#f8bbd0',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  estatisticasTexto: {
    color: '#4a148c',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
  },
  lista: {
    flex: 1,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: '#d81b60',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#fce4ec',
  },
  cardAssistido: {
    backgroundColor: '#f8f9fa',
    borderColor: '#e1bee7',
    opacity: 0.8,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  checkboxContainer: {
    marginRight: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#ad1457',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  checkboxMarcado: {
    backgroundColor: '#d81b60',
    borderColor: '#d81b60',
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  filmeInfo: {
    flex: 1,
    marginRight: 10,
  },
  filmeTexto: {
    color: '#4a148c', 
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  filmeTextoAssistido: {
    color: '#7b1fa2',
    textDecorationLine: 'line-through',
  },
  statusTexto: {
    fontSize: 10,
    color: '#ad1457',
    fontStyle: 'italic',
  },
  botaoRemover: {
    backgroundColor: '#880e4f',
    borderRadius: 15,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoRemoverTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  botaoLimpar: {
    backgroundColor: '#d81b60',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  botaoLimparTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  mensagemVaziaContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  mensagemVaziaTexto: {
    fontSize: 16,
    color: '#d81b60',
    fontStyle: 'italic',
    marginBottom: 8,
    textAlign: 'center',
  },
  mensagemVaziaSubtexto: {
    fontSize: 12,
    color: '#ad1457',
    textAlign: 'center',
  },
});
