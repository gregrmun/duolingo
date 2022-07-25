import React, {useState} from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Button from '../Button'
import styles from './styles';
import mascot from '../../../assets/images/mascot.png';

const OpenEndedQuestion = ( {question, onCorrect, onWrong}) => {
    const [input, setInput] = useState('')

    const onButtonPress = () => {
        if (question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
            onCorrect();
        } else {
            onWrong();
        }
        setInput('')
    }
    return (
        <>
            <Text style={styles.title}>
                Translate this sentence
            </Text>
            <View style={styles.row}> 
                <Image 
                    source={mascot} 
                    style={styles.mascot} 
                    resizeMode="contain"
                />

                <View style={styles.sentenceContainer}>
                    <Text style={styles.sentence}>{question.text}</Text>
                </View>
            </View>

            <TextInput 
                value={input} 
                onChangeText={setInput}
                placeholder='Type in English' 
                style={styles.textInput}
                textAlignVertical='top'
                
            />
            <Button text="Check" onPress={onButtonPress} disabled={!input} />
        </>
    )
};

OpenEndedQuestion.propTypes = {
    question: PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        text: PropTypes.string,
        answer: PropTypes.bool,
        }).isRequired,
}

export default OpenEndedQuestion;