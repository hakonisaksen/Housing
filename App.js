import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [interestRate, setInterestRate] = useState("");
  const [equity, setEquity] = useState("");
  const [price, setPrice] = useState("");
  const [repaymentPeriod, setRepaymentPeriod] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalCost, setTotalCost] = useState(null);
  const [bedrooms, setBedrooms] = useState("");
  const [monthlyIncomePerRoom, setMonthlyIncomePerRoom] = useState("");
  const [totalIncomeRental, setTotalIncomeRental] = useState(null);
  
  const calculateLoan = () => {
    const principal  = parseFloat(price) - parseFloat(equity);
    const r = parseFloat(interestRate) / 12 / 100;
    const n = parseFloat(repaymentPeriod) * 12;
    const A = principal * (r*Math.pow(1+r,n)) / (Math.pow(1+r,n)-1);
    const total = A * n + parseFloat(equity);

    setMonthlyPayment(A);
    setTotalCost(total);
  };

  const calculateRentalIncome = () => {
    const totalMonthlyIncome = parseFloat(monthlyIncomePerRoom) * parseFloat(bedrooms);

    setTotalIncomeRental(totalMonthlyIncome);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boliglån</Text>
      <StatusBar style="auto" />
      <TextInput
        placeholder='Egenkapital'
        keyboardType="numeric"
        style={styles.input}
        value={equity}
        onChangeText={setEquity}
      />
      <TextInput
        placeholder='Kjøpesum'
        keyboardType="numeric"
        style={styles.input}
        value={price}
        onChangeText={setPrice}
      />
      <TextInput
        placeholder='Nedbetalingstid'
        keyboardType="numeric"
        style={styles.input}
        value={repaymentPeriod}
        onChangeText={setRepaymentPeriod}
      />
      <TextInput
        placeholder='Rente (%)'
        keyboardType="numeric"
        style={styles.input}
        value={interestRate}
        onChangeText={setInterestRate}
      />
      <Button title="Beregn lån" onPress={calculateLoan} />
      {monthlyPayment !== null && (
        <Text>Månedlig betaling: {monthlyPayment.toFixed(2)}</Text>
      )}
      {totalCost !== null && (
        <Text>Total kostnad: {totalCost.toFixed(2)}</Text>
      )}
      <Text style={styles.title}>Utleie</Text>
      <TextInput
        placeholder='Antall soverom'
        keyboardType="numeric"
        style={styles.input}
        value={bedrooms}
        onChangeText={setBedrooms}
      />
      <TextInput
        placeholder='Leieinntekt pr. rom'
        keyboardType="numeric"
        style={styles.input}
        value={monthlyIncomePerRoom}
        onChangeText={setMonthlyIncomePerRoom}
      />
      <Button title="Beregn leieinntekter" onPress={calculateRentalIncome} />
      {totalIncomeRental !== null && (
        <Text>Månedlig leieinntekter: {totalIncomeRental.toFixed(2)}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    borderWidth:1,
    borderColor: "#ccc",
    padding:10,
    marginBottom: 10, 
  }
});
