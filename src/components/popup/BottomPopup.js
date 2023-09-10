import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React from 'react'
import { windowHeight } from '../../utils/Dimension'

export class BottomPopup extends React.Component {
    constructor(props){
        super(props)
        this.state={
            show: false
        }
    }

    show = () => {
        this.setState({show: true})
    }
    close = ()=> {
        this.setState({show: false})
    }

    renderOutsideTouchable(onTouch){
        const view = <View 
            style={{
                flex: 1,
                width: "100%"
            }}    
        />
        if(!onTouch) return view
        return(
            <Pressable 
                onPress={onTouch}
                style={{
                    flex: 1, width: '100%'
                }}
            > 
                {view}
            </Pressable>
        )
        
    }

    render() {
        let {show} = this.state
        const {onTouchOutside} = this.props

        return(
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
                statusBarTranslucent={true}
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#000000AA',
                        justifyContent: 'flex-end'
                    }}
                >
                    {this.renderOutsideTouchable(onTouchOutside)}
                    <View style={{
                        backgroundColor: '#fff',
                        width: '100%',
                        height: windowHeight,
                        borderTopRightRadius: 15,
                        borderTopLeftRadius: 15,
                        paddingHorizontal: 10,
                        maxHeight: windowHeight * 0.4
                    }}>
                        <Text>Hello</Text>
                    </View>
                </View>
            </Modal>
        )
    }
}

export default BottomPopup

const styles = StyleSheet.create({

})