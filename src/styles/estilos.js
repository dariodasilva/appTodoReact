import StyleSheet from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        backgroudColor: '#E91E63',
        alignItens: 'center',
        justifyContent: 'center',
        borderBottonWidth: 10,
        borderBottomColor: '#ddd',
    },
    headerText: {
        color: 'white',
        fontsize: 18,
        padding: 26,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    texInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroudColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroudColor: '#E91E63',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItens: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontsize: 24,
    },
});

export default Styles;

