import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";
import { FlatList, View , Image} from "react-native";

export default function Home(){
    let [products,setProducts] = useState([])

    useEffect(()=>{
       (async()=>{
         try {
            let data = await fetch('https://dummyjson.com/products') 
            data = await data.json()
            setProducts([...data?.products])
            console.log(products)
        } catch (error) {
            console.error(error)
        }
       })()
    },[])

    return(
       <ThemedView>
        <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => 
            (
            <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
                <Image style={{ width: 200, height: 200, marginBottom: 10 }}
                source={{ uri: item.thumbnail }}
                />
                <ThemedText type="title">{item.title}</ThemedText>
                <ThemedText type="body">{item.description}</ThemedText>
            </View>
        )}
        />
       </ThemedView>
    )


}