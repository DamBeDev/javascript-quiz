import './App.css'
import { Container, Stack, Typography } from '@mui/material'
import { JavaScriptLogo } from './JavaScriptLogo'
import { useQuestionsStore } from './store/questions'
import { Start } from './Start'
import { Game } from './Game'


function App() {
  const questions = useQuestionsStore(state => state.questions)

  return (
    <>
      <Container maxWidth='sm'>

        <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
          <JavaScriptLogo />
          <Typography variant='h2' component='h1'>
            JavaScript Quizz
          </Typography>
        </Stack>

        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game />}

      </Container>
    </>
  )
}

export default App
