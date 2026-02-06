# Exploring Basic Components in React Native

## Overview

React Native bridges the gap between JavaScript and native mobile development, allowing you to build truly native apps using React and JavaScript.

### The Core Concept

**Traditional Native Development:**

- **Android:** Write views in Kotlin or Java
- **iOS:** Write views in Swift or Objective-C

**React Native Approach:**

- Write components in JavaScript using React
- React Native automatically creates the corresponding native Android and iOS views at runtime
- Your app looks, feels, and performs like native apps because they **are** native apps under the hood

---

## Understanding Native Components

### What Are Native Components?

**Native Components** are React components that are backed by actual platform-specific views (Android and iOS). When you use a `<View>` or `<Text>` component in React Native, the framework creates real native UI elements, not web-based simulations.

### Core Components

React Native provides a set of **Core Components** - essential, ready-to-use Native Components that cover common UI needs:

- `<View>` - Container for layout (like `div` in web)
- `<Text>` - Display text content
- `<Image>` - Display images
- `<ScrollView>` - Scrollable container
- `<TextInput>` - Text input field
- And many more...

> **💡 Key Benefit:** These components work out of the box and automatically render the appropriate native UI for each platform.

---

## Building Custom Native Components

While Core Components cover most needs, you can also:

1. **Build your own Native Components** for Android and iOS when you need custom functionality
2. **Use community-contributed components** from the thriving React Native ecosystem

> **📦 Resource:** Check out [Native Directory](https://reactnativedirectory.com/) to explore community-created components.

---

## Code Example: Interactive Text Toggle

```jsx
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  // State to track whether to show "Hello" or "World"
  const [test, setTest] = useState(false);

  return (
    // View component acts as a container (like a div in web development)
    <View style={styles.container}>
      {/* Text component with onPress handler - toggles between Hello/World */}
      <Text onPress={() => setTest(!test)}>{test ? "Hello" : "World"}</Text>

      {/* StatusBar component controls the app's status bar appearance */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

### How This Code Works

1. **State Management:**
   - `useState(false)` creates a boolean state variable called `test`
   - `setTest` is the function to update this state

2. **Conditional Rendering:**
   - When `test` is `false`, displays "World"
   - When `test` is `true`, displays "Hello"

3. **User Interaction:**
   - The `onPress` handler on `<Text>` toggles the boolean value
   - `!test` flips the current value (false → true, or true → false)

4. **Native Components Used:**
   - `<View>`: Container that centers its children
   - `<Text>`: Tappable text element (note: Text is pressable in React Native!)
   - `<StatusBar>`: Controls the device status bar appearance

> **⚠️ Important Note:** In React Native, `<Text>` components can have `onPress` handlers directly - unlike web where you'd need a button or click handler on a div.

---

## Component Flow Explanation

Here's how this example works from start to finish:

```
App Loads
    ↓
State Initialized: test = false
    ↓
Renders "World" on screen
    ↓
User taps the text
    ↓
onPress handler triggered
    ↓
setTest(!test) called → test becomes true
    ↓
Component re-renders
    ↓
Now displays "Hello"
    ↓
User taps again → cycle repeats
```

### Key Concepts Demonstrated

1. **Component Structure:** How to organize a basic React Native component
2. **State Management:** Using hooks (`useState`) to manage interactive data
3. **Event Handling:** Responding to user interactions with `onPress`
4. **Conditional Rendering:** Displaying different content based on state
5. **Styling:** Using StyleSheet API for component styling

---

## Additional Resources

- [Official React Native Components Documentation](https://reactnative.dev/docs/intro-react-native-components)
- [Native Directory](https://reactnativedirectory.com/) - Community components

---

## Next Steps

Continue your learning journey: [Working with Components](./02-working-with-components.md)

---

## Quick Reference

| Component     | Purpose            | Example                    |
| ------------- | ------------------ | -------------------------- |
| `<View>`      | Container/Layout   | Grouping elements          |
| `<Text>`      | Display text       | Showing labels, paragraphs |
| `<StatusBar>` | Status bar control | Setting appearance         |

**Remember:** React Native components map directly to native platform views, giving you true native performance and behavior! 🚀
