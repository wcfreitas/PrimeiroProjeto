import { FlatList, SafeAreaView, Text, View, StyleSheet } from "react-native";

const pokemonData = [
    {
        name: 'Pikachu',
        type: 'Elétrico',
    },
    {
        name: 'Charmander',
        type: 'Fogo',
    },
    {
        name: 'Psyduck',
        type: 'Psíquico',
    }
]
const styles = StyleSheet.create({
    pokemonCard:{
        padding: 16,
        backgroundColor: '#fc8b3a',
        marginTop: 30,
        margin: 20,
        borderRadius: 20
    },
    text:{
        color: '#ffffff',
        fontSize: 24
    }
})

const PokemonItem = ({pokemon}) => {
    const {name, type} = pokemon
    return(
        <View style={styles.pokemonCard}>
            <Text style={styles.text}>Pokemon: {name}</Text>
            <Text style={styles.text}>Tipo: {type}</Text>
        </View>
    )
}

const ListPage = () => {
    return(
        <SafeAreaView>
            <FlatList
                data={pokemonData}
                renderItem={({item}) => <PokemonItem pokemon = {item}/>}
            />
        </SafeAreaView>
    );
}

export default ListPage;