import { Button } from "@mui/material"
import { useQuestionsStore } from "./store/questions"

export const Start = () => {
    const getQuestions = useQuestionsStore(state => state.getQuestions)

    const handleClick = () => {
        getQuestions(5)
    }
    return(
        <Button onClick={handleClick} variant="contained">
            ¡Empezar!
        </Button>
    )
}