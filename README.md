# react-native-app-demo
React Native App 学习总结

##环境搭建(Mac OSX EI Capitan)
###安装Node.js
```
brew install nodejs
npm install -g n
n use 5.0.0
```

###安装React Native
```
brew install watchman
brew install flow

npm install -g react-native-cli
```

###创建项目
```
react-native init HelloWorld
```
###运行Hello
```
open /path/to/Hello/ios/Hello.xcodeproj
```

##真机调试HTTPs问题
```
#修改plist文件
NSAppTransportSecurity -> + Allow Arbitrary Loads = true
```

##内部发布
```
#修改AppDelegate.m文件
//  jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
```
