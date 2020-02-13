## flutter 高效开发原生应用踩点笔记

### 一、了解 flutter

1. flutter 

  Flutter是谷歌的移动UI框架，可以快速在iOS和Android上构建高质量的原生用户界面。 Flutter可以与现有的代码一起工作。在全世界，Flutter正在被越来越多的开发者和组织使用，并且Flutter是完全免费、开源的。flutter 采用了dart 语言。

2. flutter与rn 的区别

  React-Native、Weex核心是通过Javascript开发，执行时需要Javascript解释器，UI是通过原生控件渲染。Flutter与用于构建移动应用程序的其它大多数框架不同，因为Flutter既不使用WebView，也不使用操作系统的原生控件。 相反，Flutter使用自己的高性能渲染引擎来绘制widget。Flutter使用C、C ++、Dart和Skia（2D渲染引擎）构建。在IOS上，Flutter引擎的C/C ++代码使用LLVM编译，任何Dart代码都是AOT编译为本地代码的，Flutter应用程序使用本机指令集运行（不涉及解释器）。而在Android下，Flutter引擎的C/C ++代码是用Android的NDK编译的，任何Dart代码都是AOT编译成本地代码的，Flutter应用程序依然使用本机指令集运行（不涉及解释器）。因此，Flutter能达到原生应用一样的性能。

  同时，Flutter提供了一组自己的widget，由Flutter的framework和引擎管理和渲染。您可以浏览Flutter widget的目录。之所以不适用原生控件，是因为Flutter希望最终结果是更高质量的，如果Flutter使用原生系统widget，Flutter应用的质量和性能将受到这些widget本身质量的限制。例如，在Android中，有一组硬编码的手势和固定的规则来对它们进行手势冲突消歧。在Flutter中，您可以编写自己的手势识别器，该手势识别器是手势系统中的一级参与者 。此外，由不同人撰写的两个小工具可协调手势冲突消歧。

  ` 120fps 超高性能，游戏开发支持更好`

### 二、安装教程

* jdk 安装（安卓开发需要）

* Flutter SDK

Flutter SDK包括Flutter的引擎、框架、widgets、工具和Dart SDK。此示例需要v0.1.4或更高版本

* IDE

VScode 或者 Android Studio IDE

* Plugin for your IDE

你必须为您的IDE单独安装Flutter 和 Dart插件，我们也提供了 VS Code 和 IntelliJ 的插件. vscode 直接扩展搜索flutter

* 安卓虚拟机安装（mac 需要找其他参考教程）

可以通过安装as， 再安装虚拟机，不需要翻墙！！

* 执行 flutter docutor
 
 检查是否有问题，vscode （crtl+shift+p) 输入 flutter doctor 
 
### 三、 遇到问题
1. flutter doctor 缺少证书

  执行 flutter doctor --android-licenses

2. 启动时gradle卡住（翻墙或者使用阿里云国内镜像，gradle 版本换成3.1.2,android 开发常见问题）

  [VScode+Flutter 开发继续踩坑](https://www.cnblogs.com/dfsxh/p/10453801.html)

3. What went wrong:Execution failed for task ':app:compileDebugKotlin' 

  网上说把gradle clean build 一遍在执行[stackoverflow](https://stackoverflow.com/questions/33357507/execution-failed-for-task-appcompiledebugkotlin)

### flutter 参考教程

[flutter 中文网](https://flutterchina.club/get-started/editor/#vscode)
