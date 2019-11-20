import React, {Component} from 'react';
import {getUserProfile} from '../../redux/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export class Profile extends Component {
  componentDidMount() {
    const {userId} = this.props.navigation.state.params;
    console.log('navigatenavigatenavigate');
    console.log(userId);
    console.log('navigatenavigatenavigate');

    this.props.getUserProfile(userId);
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <>
        {this.props.loading ? (
          <View>
            <Image
              source={{uri: 'https://i.ibb.co/2K4XYvf/Rectangle.png'}}
              style={{height: '40%', position: 'relative', zIndex: 0}}
            />
            <View style={styles.listUserInfo}>
              <View
                style={{
                  position: 'absolute',
                  top: -60,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 1,
                }}>
                <Image
                  source={{
                    uri: `${this.props.userInformation.img}`,
                  }}
                  style={{
                    height: 120,
                    width: 120,
                    borderRadius: 85,
                    borderWidth: 5,
                    borderColor: '#FFF',
                    alignSelf: 'center',
                  }}
                />
              </View>
              <View style={{marginTop: 70}}>
                <Text style={styles.name}>
                  {this.props.userInformation.name}
                </Text>
                <Text style={styles.email}>
                  {this.props.userInformation.email}
                </Text>
                <Text style={styles.password}>CHANGE PASSWORD</Text>
              </View>
            </View>
          </View>
        ) : null}
      </>
    );
  }
}
var styles = {
  listUserInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  name: {
    marginTop: 3,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  email: {
    marginTop: 15,
    fontSize: 15,
    textAlign: 'center',
  },

  password: {
    marginTop: 15,
    fontSize: 13,
    textAlign: 'center',
    color: 'blue',
  },
};

const mapStateToProps = state => {
  return {
    userInformation: state.userProfileReducer.userInformation,
    loading: state.userProfileReducer.loading,
  };
};

// allows you to specify which actions your component might need to dispatch.It lets you provide action dispatching functions as props.
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getUserProfile,
    },
    dispatch,
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
