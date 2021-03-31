import React from "react";
import { StyleSheet, Text, View, Button,TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Dimensions } from "react-native";
import { ScrollView} from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

function Home({ navigation }) {
  const date = new Date();
  const datas = [1,2,3,4,5,6,8,9]
  return (
    <ScrollView decelerationRate="normal" contentContainerStyle={{alignItems:'center',justifyContent: 'center',height: height * 2}} style={styles.container}>
      <StatusBar hidden style="auto" backgroundColor="gray" />
      <View style={styles.wrapper}>
        <Text style={styles.txtDate}>Fri, 13 May {date.getFullYear()}</Text>
        <Text style={styles.title}>Portofolio</Text>
        <Text style={styles.subtitle}>Choose your portfolio</Text>
      </View>
      <View  style={styles.wrapperMenu}>
        {datas.map(item => {
            return <View key={item} style={styles.cardMenu}>
            <Text>Test {item}</Text>
          </View>
        })}
      </View>
      {/* <TouchableOpacity onPress={() => navigation.push("About")}>
        <View style={styles.wrapperBtn}>
          <Text style={styles.txtAbout}>About</Text>
        </View>
      </TouchableOpacity> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height,
    backgroundColor: 'pink',
  },
  wrapper: {
    position: "absolute",
    padding: 20,
    left: 0,
    top: 30,
  },
  txtDate: {
    marginVertical: 20,
    fontSize: 16,
    opacity: 0.2,
  },
  title: {
    fontSize: 42,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.2,
  },
  wrapperMenu: {
    position: 'absolute',
    top: height/3.5,
    backgroundColor: "blue",
    width,
    flex:1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardMenu: {
      height: 100,
      backgroundColor: 'green',
      width: width * .85 /2,
      margin: 10,
      borderRadius: 10,
  },
  wrapperBtn: {
    paddingHorizontal: 50,
    backgroundColor: "red",
    marginHorizontal: 50,
    borderRadius: 50,
  },
  txtAbout: {
    textAlign: "center",
    marginVertical: 20,
  },
});

export default Home;
