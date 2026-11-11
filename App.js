import React, { useState } from 'react';
import { Text, View, Image, Button, Alert, ScrollView } from 'react-native';
import {Picker} from "@react-native-picker/picker";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const quizApp = () => {
  const [ans1, setAns1] = useState('');
  const [ans2, setAns2] = useState('');
  const [ans3, setAns3] = useState('');

  return (
      <ScrollView>
        <Text><FontAwesome6 name="skull" size={40} color="grey"/>Space Quiz</Text>

        // question 1
        <View>
          <Image
            source={{uri: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001435/GSFC_20171208_Archive_e001435~large.jpg"}}
            style={{ width: 400, height: 150 }}
          />

          <Text>What is the Sun?</Text>

          <Picker
            selectedValue={ans1}
            onValueChange={(value) => setAns1(value)}
            style={{backgroundColor:'white'}}
          >
            <Picker.Item label='A planet' value='A planet'/>
            <Picker.Item label='A star' value='A star'/>
            <Picker.Item label='A giant rock' value='A giant rock'/>
          </Picker>
        </View>

        // question 2
        <View>
          <Image
            source={{uri: "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638890167/EducationHub/photos/orbital-plane.jpg"}}
            style={{ width: 400, height: 150 }}
          />

          <Text>Which planet is closest to the Sun?</Text>

          <Picker
            selectedValue={ans2}
            onValueChange={(value) => setAns2(value)}
            style={{backgroundColor:'white'}}
          >
            <Picker.Item label='Earth' value='Earth'/>
            <Picker.Item label='Venus' value='Venus'/>
            <Picker.Item label='Mercury' value='Mercury'/>
          </Picker>
        </View>

        // question 3
        <View>
          <Image
            source={{uri: "https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/s/ssc2008-10b1.jpg"}}
            style={{ width: 400, height: 150 }}
          />

          <Text>What is the general shape of the Milky Way galaxy?</Text>

          <Picker
            selectedValue={ans3}
            onValueChange={(value) => setAns3(value)}
            style={{backgroundColor:'white'}}
          >
            <Picker.Item label='Elliptical' value='Elliptical'/>
            <Picker.Item label='Barred Spiral' value='Barred Spiral'/>
            <Picker.Item label='Sphere' value='Sphere'/>
          </Picker>
        </View>

        // calculating score
        <Button
          title="Submit Answers"
          onPress={() => {
            let score = 0;
            if (ans1 ==="A star") score++;
            if (ans2 ==="Mercury") score++;
            if (ans3 ==="Barred Spiral") score++;
            Alert.alert('Quiz Results', `You got ${score} out of 3 answers correct!`)
          }}
        />
      </ScrollView>
  );
};
export default quizApp;

