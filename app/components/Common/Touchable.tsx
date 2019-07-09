import React, { Component, ReactNode } from 'react'
import { View, TouchableWithoutFeedback, StyleProp, ViewStyle } from 'react-native'

interface Props {
    style: StyleProp<ViewStyle>
    pressedStyle: StyleProp<ViewStyle>
    disabledStyle: StyleProp<ViewStyle>
    disabled?: boolean
    onPress: () => void
    children?: (pressed: boolean) => ReactNode
}

interface State {
    pressed: boolean
}

export class Touchable extends Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            pressed: false
        }
    }

    render() {
        const { 
            style,
            pressedStyle,
            disabledStyle,
            disabled,
            onPress,
            children 
        } = this.props
        const { pressed } = this.state
        let buttonStyle: StyleProp<ViewStyle>[] = [style]
        if (disabled) {
            buttonStyle.push(disabledStyle)
        }
        if(pressed) {
            buttonStyle.push(pressedStyle)
        }
        return (
            <TouchableWithoutFeedback
                disabled={disabled}
                onPressIn={() => this.setState({ pressed: true })}
                onPressOut={() => this.setState({ pressed: false })}
                onPress={onPress}
            >
                <View style={buttonStyle}>{children && children(pressed)}</View>
            </TouchableWithoutFeedback>
        )
    }

}