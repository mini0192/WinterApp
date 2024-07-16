import { StyleSheet } from 'react-native';

export const MainStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    header: {
        flex: 1,
        backgroundColor: '#B4D9D9',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    body: {
        flex: 7,
        backgroundColor: '#F2F2F2',
        width: '100%',
        alignItems: 'center',
        justifyContent: "center",
    },
    bottom: {
        flex: 0.8,
        backgroundColor: '#B4D9D9',
        width: '100%',
        alignItems: 'center',
        justifyContent: "center",
    },
  
    titleText: {
        fontSize: 25,
    },
  
    text: {
        fontSize: 15,
    },
});