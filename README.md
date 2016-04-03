# react-native-android-modal

React Native component to emulate Modal for Android. At the time of this release, the Modal component bundled with React Native only supports iOS.

## Installation instructions

### Install the package

`npm install --save react-native-android-modal`

## Example
```js
var Modal = require('react-native-android-modal');

<Modal
    transparent={true}
    visible={true}
    onShow={() => console.log("show")}
    onDismiss={() => console.log("dismiss")}
    >
    <Text>Check out this Modal on Android</Text>
</Modal>
```

## Todo

+ Implement animated prop
