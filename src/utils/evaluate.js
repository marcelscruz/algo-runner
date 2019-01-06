import worker from '../web-worker/worker'

export default async (userCode, tests, setResult) => {
  let result = []

  await Promise.all(
    tests.map(async test => {
      try {
        // Check if user code + function call is iqual to expected result
        const userResult = await worker(userCode + test.test)
        const isCorrect = userResult === test.expectedResult
        result.push(isCorrect)
      } catch (error) {
        console.log(error)
        result.push(false)
      }
    }),
  )

  setResult(result)
}
