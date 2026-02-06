# Working with components

```js
export default function App() {
  const [test, setTest] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>{test ? "Hello World" : "False"}</Text>
      <StatusBar style="auto" />
      <Button color="#328736" title="Click me" onPress={() => setTest(!test)} />
    </View>
  );
}
```

Next: [Styling react native apps](./03-styling-react-native-apps.md)
