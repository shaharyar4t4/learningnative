import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import React, { useState } from 'react'

const ModelDailogy = () => {
    const [modelVisible, setModelVisible] = useState(false);
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.openButton}
                onPress={() => setModelVisible(true)}
            >
            <Text style={styles.buttonText}>Show Modal</Text>
            </TouchableOpacity>

            <Modal
             visible={modelVisible}
             animationType='fade'
            //  {/*basically it use background*/}
             transparent={true}
            >
                {/*external view*/}
                <View style={styles.modalOverlay}>
                    {/*inner view*/}
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>Great Modal</Text>
                        <Text style={styles.modalText}> this is Great Modal</Text>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModelVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    openButton: {
        backgroundColor: '#6200ea',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    modalView: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        elevation: 5,
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        color: '#555',
    },
    closeButton: {
        backgroundColor: '#03dace',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        elevation: 1,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
export default ModelDailogy;

