import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import FalseIcon from '../../../assets/images/circle.png';

const navStyle = {
    navBarTextFontSize:20,
    navBarTextColor:'#ffffff',
    navBarTextFontFamily: 'RobotoCondensed-Bold',
    navBarTitleTextCentered: true,
    navBarBackgroundColor: '#F2784B'
}

const navLeftButton = (sources) => {
    return {
        title: 'Drawer',
        id: 'DrawerButton',
        icon: sources[0],
        disableIconTint: true,
        buttonColor: 'white'
    }
}

const LoadTabs = () => {

    Promise.all([
        Icon.getImageSource('bars',20,'white'),
        Icon.getImageSource('signing',20,'white'),
        Icon.getImageSource('home',20,'white')
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs:[
                {
                    screen:"sellitApp.Home",
                    label:"Home",
                    title:"Home",
                    icon: sources[2],
                    navigatorStyle: navStyle,
                    navigatorButtons:{
                        leftButtons: [navLeftButton(sources)]
                    }
                },
                {
                    screen:"sellitApp.AddPost",
                    label:"Cambiar",
                    title:"Cambiar",
                    icon: sources[1],
                    navigatorStyle: navStyle,
                    navigatorButtons:{
                        leftButtons: [navLeftButton(sources)]
                    }
                }
            ],
            tabsStyle:{
                tabBarButtonColor:'grey',
                tabBarSelectedButtonColor: '#F2784B',
                tabBarTextFontFamily: 'RobotoCondensed-Bold',
                tabBarBackgroundColor: 'white',
                tabBarTranslucent: false
            },
            appStyle:{
                tabBarButtonColor:'grey',
                tabBarSelectedButtonColor: '#F2784B',
                tabBarTextFontFamily: 'RobotoCondensed-Bold',
                tabBarBackgroundColor: 'white',
                navBarButtonColor: '#ffffff',
                keepStyleAcrossPush: true
            },
            drawer:{
                left:{
                    screen: "sellitApp.SidedrawerComponent",
                    fixedWidth: 600
                }
            }
        })
    })

}

export default LoadTabs;