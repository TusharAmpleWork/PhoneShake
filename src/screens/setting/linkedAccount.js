import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { s, vs } from 'react-native-size-matters/extend';
import { ContinueBtn } from '../../components/button';
import HeaderComponent from '../../components/headerComp';
import ModalPicker from '../../components/modalPicker';
import { Heading, Section, SubSection } from '../../components/text';
import { themeDefault } from '../../themes';

const LinkedAccounts=({navigation})=>{
    const goBack=()=>navigation.goBack()
    return(
        <View style={styles.container } >
<ScrollView>
    <View>
        <HeaderComponent onBack={goBack} />
        <Heading title={"Linked Accounts"}
        headStyle={{marginTop:vs(-10)}}
        />
    </View>
    <View style={styles.border}></View>
    <Section text={"MOST POPULAR"} />
    <SubSection 
    source={require('../../assets/images/website.png')}
    text={'Website'}
    name={"www.phoneshake.me"}
    onPress={() => navigation.navigate('Profile', {id:9})}
    />
      <SubSection 
    source={require('../../assets/images/blog.png')}
    text={'Blog'}
    />
      <SubSection 
    source={require('../../assets/images/Linked.png')}
    text={'Linkedin'}
    name={"www.linkedin.com/stevenash..."}
    />
      <SubSection 
    source={require('../../assets/images/tweeter.png')}
    text={'Twitter'}
    name={"@stevenash"}
    onPress={() => navigation.navigate('Profile', {id:8})}
    />
      <SubSection 
    source={require('../../assets/images/facebook.png')}
    text={'Facebook'}
    />
      <SubSection 
    source={require('../../assets/images/instagram.png')}
    text={'Instagram'}
    />
      <SubSection 
    source={require('../../assets/images/snapchat.png')}
    text={'Snapchat'}
    name={"@stevenash"}
    />
      <SubSection 
    source={require('../../assets/images/skype.png')}
    text={'Skype'}
    />
     <Section text={"OTHERS"} />
     <SubSection 
    source={require('../../assets/images/behance.png')}
    text={'Behance'}
    name={"www.behance.net/stevenash"}
    />
       <SubSection 
    source={require('../../assets/images/Bitbucket.png')}
    text={'Bitbucket'}
    />
      <SubSection 
    source={require('../../assets/images/dribble.png')}
    text={'Dribble'}
    name={"www.dribble.com/stevenas.."}
    />
      <SubSection 
    source={require('../../assets/images/github.png')}
    text={'Github'}
    name={"www.github.com/stevenash"}
    />
     <SubSection 
    source={require('../../assets/images/google.png')}
    text={'Google+'}
    name={"www.github.com/stevenash"}
    />
     <SubSection 
    source={require('../../assets/images/Line.png')}
    text={'LINE'}
    />
     <SubSection 
    source={require('../../assets/images/medium.png')}
    text={'Medium'}
    />
     <SubSection 
    source={require('../../assets/images/pintrest.png')}
    text={'Pintrest'}
    name={"@stevenash"}
    />
      <SubSection 
    source={require('../../assets/images/reddit.png')}
    text={'Reddit'}
    />
        <SubSection 
    source={require('../../assets/images/Telegram.png')}
    text={'Telegram'}
    />
        <SubSection 
    source={require('../../assets/images/tumblr.png')}
    text={'Tumblr'}
    />
        <SubSection 
    source={require('../../assets/images/twitch.png')}
    text={'Twitch'}
    />
        <SubSection 
    source={require('../../assets/images/upwork.png')}
    text={'Upwork'}
    />
        <SubSection 
    source={require('../../assets/images/vk.png')}
    text={'VK'}
    />
        <SubSection 
    source={require('../../assets/images/WeChat.png')}
    text={'WeChat'}
    />
        <SubSection 
    source={require("../../assets/images/wattsapp.png")}
    text={'Whatsapp'}
    />
      <SubSection 
    source={require("../../assets/images/yelp.png")}
    text={'Yelp'}
    />
      <SubSection 
    source={require("../../assets/images/youtube.png")}
    text={'Youtube'}
    />
    <Heading title={"Request to add"} />
    <Heading title={"something you don't see here"}
    headStyle={{marginTop:0}}
    />
    <ContinueBtn title={"Request"} 
    textStyle={{marginTop:vs(20),marginBottom:vs(74)}}
    />
</ScrollView>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:themeDefault.colors.white
    },
    border:{
        borderBottomWidth: 0.7,
        borderColor: '#CCCCCC',
        marginTop: vs(10),
    }
})
export default LinkedAccounts;