'use strict';

var React = require('react-native');
var {
    AppRegistry,
    PropTypes,
    StyleSheet,
    Text,
    View,
} = React;

var Portal = require('react-native/Libraries/Portal/Portal.js');

var AndroidModal = React.createClass({

    portalTag: null,

    propTypes: {
        animated: PropTypes.bool,
        transparent: PropTypes.bool,
        visible: PropTypes.bool,
        onShow: PropTypes.func,
        onDismiss: PropTypes.func,
    },

    defaultProps: {
        animated: false,
        transparent: false,
        visible: false,
    },

    componentWillMount: function() {
        this.portalTag = Portal.allocateTag();
    },

    componentWillUnmount: function() {
        Portal.closeModal(this.portalTag);
        this.portalTag = null;
    },

    componentWillReceiveProps: function(newProps) {
        if (newProps.visible) {
            Portal.showModal(this.portalTag, this.renderModal(newProps));
        } else {
            Portal.closeModal(this.portalTag);
        }
    },

    componentDidUpdate: function(previousProps) {
        if (!previousProps.visible && this.props.visible) {
            if (this.props.onShow) {
                this.props.onShow();
            }
        } else if(previousProps.visible && !this.props.visible) {
            if (this.props.onDismiss) {
                this.props.onDismiss();
            }
        }
    },

    renderModal: function(newProps) {
        var modalBackgroundColorStyle = {
            backgroundColor: newProps.transparent ? 'transparent' : '#000000',
        };

        return (
            <View key={this.portalTag} style={[styles.container, modalBackgroundColorStyle]}>
                {this.props.children}
            </View>
        );
    },

    render: function() {
        return null;
    }
});

var styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }
});

AppRegistry.registerComponent('AndroidModal', () => AndroidModal);

module.exports = AndroidModal;
