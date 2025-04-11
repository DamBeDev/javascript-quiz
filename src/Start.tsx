import { Button } from "@mui/material"
import { useQuestionsStore } from "./store/questions"

const LIMIT_QUESTIONS = 10

export const Start = () => {
    const getQuestions = useQuestionsStore(state => state.getQuestions)

    const handleClick = () => {
        getQuestions(LIMIT_QUESTIONS)
    }
    return(
        <Button onClick={handleClick} variant="contained">
            ¡Empezar!
        </Button>
    )
}