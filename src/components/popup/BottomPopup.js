import { Modal, StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";

import { windowHeight, windowWidth } from "../../utils/Dimension";
import AppText from "../text/AppText";


export class BottomPopup extends React.Component{
    constructor(props){
        super(props)
        this.state={
            show: false
        }
    }
    show = () => {
        this.setState({show: true})
    }
    close = () => {
        this.setState({show: false})
    }

    renderOutsideTouchable(onTouch){
        const view = <View style={{flex: 1, width: '100%'}} />
        if(!onTouch) return view
        return (
            <Modal
                animationType="fade"
                transparent={true}
            >
                <Pressable onPress={onTouch}>
                    <View
                        style={{
                            height: windowHeight,
                            backgroundColor: '#333333AA',
                            justifyContent: 'flex-start'
                        }}
                    />
                    {view}
                </Pressable>
            </Modal>
        )
    }

    render(){
        let {show} = this.state
        const {onTouchOutside, renderContent, bottom, borderradius} = this.props
        
        return(
            <Modal
                animationType="slide"
                transparent={true}
                visible={show}
                onRequestClose={this.close}
                statusBarTranslucent={true}
            >
                    {this.renderOutsideTouchable(onTouchOutside)}
                    <View
                        style={{
                            position: 'absolute',
                            backgroundColor: '#fff',
                            width: windowWidth,
                            borderTopRightRadius: borderradius ? borderradius : 10,
                            borderTopLeftRadius: borderradius ? borderradius : 10,
                            borderBottomLeftRadius: borderradius,
                            borderBottomRightRadius: borderradius,
                            paddingHorizontal: 10,
                            bottom: bottom,
                        }}
                    >
                        {renderContent()}
                    </View>
                {/* </View> */}
            </Modal>
        )
    }
}