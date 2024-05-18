import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";
import icons from "../../constants/icons";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.whiteText2}>Search</Text>
          <View style={styles.searchCtn}>
            <TextInput
              value={searchValue}
              onChangeText={(e) => setSearchValue({ ...searchValue, e })}
              style={styles.textField}
            />

            <TouchableOpacity style={styles.btn}>
              <Image
                source={icons.search}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 16,
    height: 16,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.darkGray,
  },
  btn: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: colors.red,
  },
  searchCtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 4,
  },
  whiteText2: {
    color: "white",
    fontSize: 24,
    fontFamily: fonts.regular,
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderBottomColor: colors.white,
    paddingBottom: 20,
  },
  scrollView: {
    padding: 10,
  },
  textField: {
    padding: 10,
    paddingLeft: 4,
    backgroundColor: colors.lightGray,
    width: "80%",
    borderRadius: 10,
  },
});

export default Search;
