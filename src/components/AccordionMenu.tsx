import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import colors from '../assets/themes/colors';

export default function AccordionMenu({ title, children }: any){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable style={styles.header} onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.title}>{title}</Text>
      </Pressable>
      {isOpen && <View>{children}</View>}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginHorizontal: '5%',
  },
  header: {
    backgroundColor: colors.light.gray_05,
    padding: 10,
    borderRadius: 8
  },
  title: {
    fontWeight: 'bold',
    color: colors.light.black,
    fontSize: 18,
  },
});
