import React, { Component } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common";
import * as actions from "../actions";

class ListItem extends Component {
  render() {
    const { title } = this.props.library;

    console.log(this.props)
    
    return (
      <View>
        <CardSection>
          <Text>{title}</Text>
        </CardSection>
      </View>
    );
  }
}

export default connect(null, actions)(ListItem);
