import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import URL from "../route";
import Subject from "../utility/Utility";

// const historyTab = [
//   {
//     id: "123",
//     image: "https://static.thenounproject.com/png/82129-200.png",
//     month: "January 2021",
//     place: "Colombo - Horana",
//   },
//   {
//     id: "456",
//     image: "https://static.thenounproject.com/png/82129-200.png",
//     month: "March 2021",
//     place: "Gampaha - Colombo",
//   },
//   {
//     id: "789",
//     image: "https://static.thenounproject.com/png/82129-200.png",
//     month: "June 2021",
//     place: "Mathara - Colombo",
//   },
// ];

const HistoryScreen = ({ route }) => {

  // console.log(route.params);

  const [history, setHistory] = useState();
  const [balance, setBalance] = useState('');

// create object in here
  const subject = new Subject();

  // observer function 1
  function Observer1()
  {
    fetch(URL + "/foreign-history", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        passport: route.params.ForeignuserID,
      }),
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        setHistory(resData);
        setSearchFilter(resData);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  // observer function 2
  function Observer2()
  {
    fetch(URL + "/get-balance-foreign", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        passport: route.params.ForeignuserID,
      }),
    })
      .then((res) => res.json())
      .then((balanceData) => {
        // console.log(balanceData.balance);
        setBalance(balanceData.balance);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // start history part

  // observer function 3
  function Observer3() 
  {
    fetch(URL + "/local-history", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nic: route.params.LocalUserID,
      }),
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        setHistory(resData);
        setSearchFilter(resData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // observer function 4
  function Observer4()
  {
    fetch(URL + "/get-balance-local", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nic: route.params.LocalUserID,
      }),
    })
      .then((res) => res.json())
      .then((balanceData) => {
        // console.log(balanceData.balance);
        setBalance(balanceData.balance);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const getUserHistory = () => {
    if(route.params.num === "1"){
      subject.subscribe(Observer1)
      subject.subscribe(Observer2)
      // fires
      subject.fire() 
      // after work it will removed
      subject.unsubscribe(Observer1)
      subject.unsubscribe(Observer2)
    }
    else{
      subject.subscribe(Observer3)
      subject.subscribe(Observer4)
      subject.fire() 
      subject.unsubscribe(Observer3)
      subject.unsubscribe(Observer4)
    }
  };

  const [searchFilter, setSearchFilter] = useState();

  const searchTimeTable = (textToSearch) => {
    setSearchFilter(
      history.filter((i) =>
        i.start_des.toLowerCase().includes(textToSearch.toLowerCase())
      )
    );
  };

  useEffect(() => {
    getUserHistory();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleMain}>Your</Text>
        <Text style={styles.titleSub}>History</Text>
        <Text style={styles.titleBalance}>Balance : Rs.{balance}</Text>
      </View>

      <View style={styles.searchbar}>
        <View style={styles.searchContainer}>
          {/* can add icon here */}
          <Icon
            style={tw`rounded-full p-4`}
            name="search"
            type="ionicon"
            color="black"
            size={18}
          />
          <TextInput
            placeholder="Search"
            size={25}
            style={styles.searchinput}
            onChangeText={(text) => searchTimeTable(text)}
          />
        </View>
      </View>

      <FlatList
        data={searchFilter}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { start_des, end_des, amount } }) => (
          <TouchableOpacity
            style={tw`flex-row items-center p-5 rounded-3xl
                border-4 border-black border-opacity-10 m-2
                `}
            // onPress={() => navigation.navigate(screen)}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: "https://static.thenounproject.com/png/82129-200.png" }}
            />
            <View>
              <Text style={tw`font-semibold text-sm ml-10`}>
                From : {start_des}
              </Text>
              <Text style={tw`font-semibold text-black text-sm ml-10`}>
                To : {end_des}
              </Text>
              <Text style={tw`text-gray-600 text-sm ml-10`}>
                Amount : Rs.{amount}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 40,
    backgroundColor: "#FFF",
  },
  titleWrapper: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  titleMain: {
    fontSize: 30,
    color: "black",
    fontWeight: "normal",
  },
  titleSub: {
    fontSize: 45,
    color: "black",
    marginTop: 4,
    fontWeight: "bold",
  },
  titleBalance: {
    fontSize: 20,
    color: 'gray',
    marginTop: 10,
  },
  searchbar: {
    marginTop: 30,
    flexDirection: "row",
    paddingHorizontal: 10,
  },

  searchContainer: {
    height: 50,
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  searchinput: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    flex: 1,
  },
});
