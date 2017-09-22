---
title: "Navigation Turn-By-Turn UI"
description: "Mapbox Android Navigation SDK Drop-in UI"
sideNavSections:
  - title: "Install the Navigation UI SDK"
  - title: "Launch the UI"
---

Mapbox Navigation gives you all the tools you need to add turn-by-turn navigation to your apps.

Get up and running in a few minutes with our drop-in turn-by-turn navigation, or build a more custom turn-by-turn navigation app with our UI components.

![](src/img/src/turn-by-turn.gif)

## Install the Navigation UI SDK

Before developing your app with the Navigation UI components, you'll need to add the SDK as a dependency.  This dependency is different from the one used to compile the core Navigation SDK,
but will still include everything from the core library. Note that while we show how to insert the stable version of the SDK inside your project, you can also use the nightly
build/snapshot or the beta version if one is available. You can find the dependency given below in the MavenCentral repository.

```groovy
repositories {
  mavenCentral()
}

dependencies {
  compile ('com.mapbox.mapboxsdk:mapbox-android-navigation-ui:{{ NAVIGATION_VERSION }}') {
    transitive = true
  }
}
```

## Launch the UI
