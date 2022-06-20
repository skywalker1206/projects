import React,{useState,useEffect} from 'react';
import * as Font from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import { Icon } from 'galio-framework';

import GalioConfig from '../assets/fonts/galioExtra';

const GalioExtra = require('../assets/fonts/galioExtra.ttf');
const IconGalioExtra = createIconSetFromIcoMoon(GalioConfig, 'GalioExtra');

// export default class IconExtra extends React.Component {
//   state = {
//     fontLoaded: false,
//   }

//   async componentDidMount() {
//     await Font.loadAsync({ GalioExtra: GalioExtra });
//     this.setState({ fontLoaded: true });
//   }

//   render() {
//     const { name, family, ...rest } = this.props;

//     if (name && family && this.state.fontLoaded) {
//       if (family === 'GalioExtra') {
//         return <IconGalioExtra name={name} family={family} {...rest} />;
//       }
//       return <Icon name={name} family={family} {...rest} />;
//     }

//     return null;
//   }
// }
export  function IconExtra(props) {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(async () => {
    await Font.loadAsync({ GalioExtra: GalioExtra });
    setFontLoaded(true);
  }, []);

  
  const { name, family, ...rest } = props;

  if (name && family && fontLoaded) {
    if (family === 'GalioExtra') {
      return <IconGalioExtra name={name} family={family} {...rest} />;
    }
    return <Icon name={name} family={family} {...rest} />;
  }
  else {
    return null;
  }
}