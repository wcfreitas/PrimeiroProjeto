import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View, StyleSheet } from "react-native";
import axios from "axios";

const ListAPI = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    axios
      .get("http://universities.hipolabs.com/search?country=Brazil")
      .then((response) => {
        setPokemonData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const styles = StyleSheet.create({
    pokemonCard: {
      padding: 16,
      backgroundColor: '#fc8b3a',
      marginTop: 25,
      marginHorizontal: 16,
      borderRadius: 20,
      shadowColor: "#fc8b3a",
      shadowOffset: {
	    width: 0,
	    height: 5,
        },
shadowOpacity: 0.34,
shadowRadius: 6.27,
elevation: 10,
    },
    text: {
      color: '#ffffff',
      fontSize: 18,
    },
  });

  const PokemonItem = ({ data }) => {
    const { name, alpha_two_code } = data;

    return (
      <View style={styles.pokemonCard}>
        <Text style={styles.text}>University Name: {name}</Text>
        <Text style={styles.text}>Country Code: {alpha_two_code}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={pokemonData}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <PokemonItem data={item} />}
      />
    </SafeAreaView>
  );
};

export default ListAPI;