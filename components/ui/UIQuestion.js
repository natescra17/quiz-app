import { View, FlatList, Text, StyleSheet } from "react-native";
import { MAIN_STYLES } from "../../constants/styles";
import UIOptionItem from "./UIOptionItem";
import { COLORS } from "./../../constants/colors";
import { useEffect, useState } from "react";
import {
    correct_responses,
    incorrect_responses
} from "./../../store/data/dummy-data";

export default function UIQuestion({
    question,
    questionNumber,
    total,
    handleOnOptionSelected
}) {
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        // reset every new question
        setSelectedOption(null);
        question.options.forEach((option) => {
            option.isSelected = false;
        });
    }, [question]);

    function renderOption(item) {
        function onPressItem() {
            setSelectedOption(item);
            question.options.forEach((option) => {
                option.isSelected = item.id === option.id;
            });
            const score = item.isCorrect ? 1 : 0;
            handleOnOptionSelected(score);
        }

        let extraStyles = {};
        let disabled = false;

        if (selectedOption !== null) {
            disabled = true;
            if (item.isCorrect && item.id !== selectedOption.id) {
                extraStyles = { backgroundColor: COLORS.correct };
            }
        }

        return (
            <UIOptionItem
                value={item.text}
                handleOnPress={onPressItem}
                isSelected={item.isSelected}
                disabled={disabled}
                extraStyles={extraStyles}
            />
        );
    }

    return (
        <View style={MAIN_STYLES.full}>
            <View>
                <Text style={[styles.infoText]}>
                    {questionNumber} of {total} - {question.category}
                </Text>
            </View>
            <Text style={[MAIN_STYLES.h1, styles.question]}>
                {question.question}
            </Text>
            <View style={styles.options}>
                <View style={styles.optionRow}>
                    {question.options[0] && renderOption(question.options[0])}
                    {question.options[1] && renderOption(question.options[1])}
                </View>
                <View style={styles.optionRow}>
                    {question.options[2] && renderOption(question.options[2])}
                    {question.options[3] && renderOption(question.options[3])}
                </View>
            </View>
            <View style={styles.resultContainer}>
                {selectedOption && selectedOption.isCorrect && (
                    <Text style={[styles.result, styles.correct]}>
                        {
                            correct_responses[
                                Math.floor(
                                    Math.random() * correct_responses.length
                                )
                            ]
                        }
                    </Text>
                )}
                {selectedOption && !selectedOption.isCorrect && (
                    <Text style={[styles.result, styles.wrong]}>
                        {
                            incorrect_responses[
                                Math.floor(
                                    Math.random() * incorrect_responses.length
                                )
                            ]
                        }
                    </Text>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    infoContainer: {
        flexDirection: "column"
    },
    infoText: {
        fontSize: 18,
        color: COLORS.secondary800,
        fontFamily: "hand",
        marginHorizontal: 10,
        marginVertical: 5,
        borderBottomColor: COLORS.secondary800,
        borderBottomWidth: 2
    },
    question: {
        marginVertical: 5,
        marginHorizontal: 10,
        fontSize: 22,
        fontFamily: "butler-bold"
    },
    options: {},
    optionRow: {
        flexDirection: "row"
    },
    resultContainer: {
        alignItems: "center",
        marginTop: 10
    },
    result: {
        fontFamily: "hand",
        fontSize: 29,
        fontWeight: "600",
        alignItems: "center"
    },
    correct: {
        color: COLORS.correct
    },
    wrong: {
        color: COLORS.error
    }
});
