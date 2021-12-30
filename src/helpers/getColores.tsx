import ImageColors from 'react-native-image-colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export const getImageColor = async (uri: string) => {

    const colors = await ImageColors.getColors(uri, {});

    let primary;
    let secundary;

    switch (colors.platform) {
        case 'android':
            // android result properties
            primary = colors.vibrant
            secundary = colors.dominant
            break
        case 'ios':
            // iOS result properties
            primary = colors.primary
            secundary = colors.secondary
            break
        default:
            throw new Error('Unexpected platform key')
    }



    return [primary, secundary]

}