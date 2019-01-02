import worker from '../web-worker/worker'

export default async (code, solution, setResult) => {
  try {
    const userResult = await worker(code)
    const solutionResult = await worker(solution)

    if (userResult === solutionResult) {
      setResult(`Correct! The solutionResult is '${solutionResult}'.`)
    } else {
      setResult(
        `Nop! Expected result is ${solutionResult} but you got ${userResult}.`,
      )
    }
  } catch (error) {
    console.log(error)
    setResult(error)
  }
}
