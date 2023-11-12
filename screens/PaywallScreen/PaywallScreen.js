import {View, Text, Pressable} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native'; 
const PaywallScreen = () => {
  const navigation = useNavigation();
  const close = () => {
    navigation.pop();
  };

  const Footer = () => {
    return (
      <Text style={styles.Footer}>
        Don't forget to add your subscription terms and conditions. Read more
        about this here:
        https://www.revenuecat.com/blog/schedule-2-section-3-8-b
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.close} onPress={close}>
        <AntDesign name="close" color={'white'} size={24} />
      </Pressable>
      <Text style={styles.title}>Try Medium membership free for 1 month.</Text>
      <Text style={styles.subTitle}>
        Read unlimited, ad-free stories across all of your devices. Cancel
        anytime.
      </Text>

      <View style={styles.blackBox}>
        <Text style={styles.offerTitle}>
          <Text style={styles.bold}>$5,49/month</Text> after trial ends.
        </Text>
        <Pressable style={styles.buttonPrimary}>
          <Text>Start free trial</Text>
        </Pressable>
      </View>

      <Text style={styles.offerTitle}>
        <Text style={styles.bold}>$5,49/month</Text> after trial ends.
      </Text>
      <Pressable style={styles.buttonSecondary}>
        <Text style={styles.buttonSecondaryText}>Start free trial</Text>
      </Pressable>

      <Footer />
    </View>
  );
};

export default PaywallScreen;



const styles =  StyleSheet.create({
  container: {
    backgroundColor: '#121211',
    flex: 1,
    padding: 20,
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginVertical: 15,
  },
  subTitle: {
    color: '#dedede',
    textAlign: 'center',
    marginVertical: 15,
    fontSize: 16,
    lineHeight: 24,
  },
  blackBox: {
    backgroundColor: 'black',
    width: '90%',
    alignItems: 'center',
    padding: 10,
    marginVertical: 20,
  },
  offerTitle: {
    color: 'white',
    fontSize: 20,
    marginVertical: 15,
  },
  bold: {
    fontWeight: 'bold',
  },
  buttonPrimary: {
    backgroundColor: 'white',
    width: '90%',
    alignItems: 'center',
    borderRadius: 5,
    padding: 15,
    margin: 10,
  },
  buttonSecondary: {
    borderColor: 'white',
    borderWidth: 3,
    width: '90%',
    alignItems: 'center',
    borderRadius: 5,
    padding: 15,
    margin: 10,
  },
  buttonSecondaryText: {
    color: 'white',
  },
  Footer: {
    color: '#dedede',
    marginTop: 'auto',
  },

  close: {
    position: 'absolute',
    left: 5,
    top: 5,
  },
});
