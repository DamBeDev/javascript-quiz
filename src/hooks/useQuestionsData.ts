import { useQuestionsStore } from "../store/questions"
import confetti from "canvas-confetti"

export const useQuestionsData = () => {
    const questions = useQuestionsStore(state => state.questions)

    let correct = 0
    let incorrect = 0
    let unanswered = 0

    questions.forEach(question => {
        const { userSelectedAnswer, correctAnswer } = question
        if (userSelectedAnswer == null) unanswered++
        if (userSelectedAnswer === correctAnswer) correct++
        if (userSelectedAnswer !== correctAnswer) incorrect++
    })

    if (incorrect === 0 && unanswered === 0) confetti({
        colors: ['#ecac0e', '#d3d0c8', '#fc8221'],
        scalar: 1.5,
        shapes: ['star']
    })

    return { correct, incorrect, unanswered }
}