import React, { useState, useEffect } from 'react';
import {View, Alert } from 'react-native';
import styles from "./styles";
import questions from './assets/data/allQuestions';
import ImageMultipleChoiceQuestion from './src/components/ImageMultipleChoiceQuestion/ImageMultipleChoiceQuestion';
import OpenEndedQuestion from './src/components/OpenEndedQuestion/OpenEndedQuestion';
import Header from './src/components/Header';

const App = () => {

  const [ currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [ currentQuestion, setCurrentQuestion ] = useState(questions[currentQuestionIndex]);

  const [ lives, setLives ] = useState(5);

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("You won");
      setCurrentQuestionIndex(0);
    } else {
    setCurrentQuestion(questions[currentQuestionIndex])
    }
  }, [currentQuestionIndex])

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  const restart = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
  }

  const onWrong = () => {
    if (lives <= 1) {
      Alert.alert('Game Over', 'Try again', [
        {
          text: 'Try again',
          onPress: restart
        }
      ])
    } else {
      Alert.alert("Wrong!");
    }
    setLives(lives -1)
  }

    return (

        <View style={styles.root}>
          <Header progress={currentQuestionIndex / questions.length} lives={lives}/>
          { currentQuestion.type === 'IMAGE_MULTIPLE_CHOICE' && (
          <ImageMultipleChoiceQuestion 
            question={currentQuestion}
            onCorrect={onCorrect}
            onWrong={onWrong}
          />)}
          { currentQuestion.type === 'OPEN_ENDED' && (
          <OpenEndedQuestion
            question={currentQuestion}
            onCorrect={onCorrect}
            onWrong={onWrong}
          />)}
        </View>
    );
  };

export default App; 