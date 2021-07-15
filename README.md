# Movie App (RN + Expo) iOS

Project for learning purposes using React Native and Expo (iOS)

(Beware that I only styled this project for iOS devices. Some libraries or styling may not work on Android)

Link Demo: <exp://exp.host@toyama.rodrigo/rn-movieapp/>

![ExpoDemoQR](https://i.imgur.com/Iuh5pBH.png)

## What I used

* [React Native](https://reactnative.dev)
* [Expo](https://expo.io)
* [React Navigation](https://reactnavigation.org)
* [Lodash](https://lodash.com)
* [RN Paper](https://reactnativepaper.com)
* [RN Ratings](https://github.com/Monte9/react-native-ratings#readme)
* [RN Snap Carousel](https://github.com/meliorence/react-native-snap-carousel)
* [RN Webview](https://docs.expo.io/versions/latest/sdk/webview/)
* [RN Youtube iframe](https://lonelycpp.github.io/react-native-youtube-iframe/)

API: <https://www.themoviedb.org/>

## How to start locally

You'll need Node and Expo before starting the app and make an account in www.themoviedb.org to request your API KEY

```sh
> git clone https://github.com/toyamarodrigo/rn-movieapp.git

> cd rn-movieapp

> yarn install 
```

`src > utils > constants.js`

change API_KEY with your api key you requested from www.themoviedb.org

`export const API_KEY = "yourApiKey"`

finally

```sh
> yarn start
```

## Screenshot

|            | Light | Dark |
|------------|-------|------|
| Home       |  ![HomeMovieApp](https://i.imgur.com/tyBPNaF.png)     |   ![HomeMovieApp](https://i.imgur.com/nbWO00E.png)   |
| Popular    |   ![PopularMovieApp](https://i.imgur.com/uGATA5R.png)    |   ![PopularMovieApp](https://i.imgur.com/JCPdrmp.png)   |
| New Movies |   ![NewMoviesApp](https://i.imgur.com/n1qKXCQ.png)    |   ![NewMoviesApp](https://i.imgur.com/4lP8t8Z.png)   |
| Search     |   ![SearchMovieApp](https://i.imgur.com/67iX2Vo.png)    |   ![SearchMovieApp](https://i.imgur.com/x8KACOz.png)   |
