import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs'

createStackNavigator({
  Detail: Detail
})

export default createAppContainer(
  createSwitchNavigator({
    Init: createStackNavigator({
      Welcome: Welcome
    }),
    Main: createBottomTabNavigator({
      Home: createStackNavigator({
        Home: createMaterialTopTabNavigator({
          React: React,
          Vue: Vue,
          TypeScript: TypeScript,
          JavaScript: JavaScript
        })
      }),
      Company: createStackNavigator({
        Company: Company
      }),
      Info: createStackNavigator({
        Info: Info
      }),
      About: createStackNavigator({
        About: About
      })
    })
  })
)
