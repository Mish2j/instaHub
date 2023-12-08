import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";

const STATS = [
  {
    displayName: "",
    stat: "",
    date: "",
  },
];

const HubStats = () => {
  const openModalHandler = () => {};

  //   const voiceList = voiceData.map((audioData) => {
  //     return (
  //       <Pressable
  //         // key={}
  //         onPress={openModalHandler}
  //         // style={({ pressed }) => [styles.audioItem]}
  //       >
  //         {/* <Text style={styles.displayName}>{audioData.displayName}</Text>
  //         <Text style={styles.duration}>{audioData.duration}</Text> */}
  //       </Pressable>
  //     );
  //   });

  return (
    <View style={styles.hubStats}>
      <View style={{ marginBottom: 20, marginTop: 10 }}>
        <Text style={{ color: "white", fontSize: 16 }}>Date</Text>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
          InstaHub Office
        </Text>
      </View>
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
        >
          <Pressable
            // key={}
            onPress={openModalHandler}
            style={({ pressed }) => [styles.hubData]}
          >
            <Text>Rooms Occupied</Text>
            <Text>12/50</Text>
            <Text>64%</Text>
            <Text>as of 3:12 PM</Text>
          </Pressable>

          <Pressable
            // key={}
            onPress={openModalHandler}
            style={({ pressed }) => [styles.hubData]}
          >
            <Text>Rooms Occupied</Text>
            <Text>12/50</Text>
            <Text>64%</Text>
            <Text>as of 3:12 PM</Text>
          </Pressable>

          <Pressable
            // key={}
            onPress={openModalHandler}
            style={({ pressed }) => [styles.hubData]}
          >
            <Text>Rooms Occupied</Text>
            <Text>12/50</Text>
            <Text>64%</Text>
            <Text>as of 3:12 PM</Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
};

export default HubStats;

const styles = StyleSheet.create({
  hubStats: {
    backgroundColor: "#0c0c64",
    padding: 15,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
  },
  scrollView: {},
  hubData: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 100,
    width: 110,
    backgroundColor: "#ededed",
    borderRadius: 10,
    marginRight: 10,
    padding: 10,
    gap: 5,

    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});
