const sandbox = () => {
  // eslint-disable-next-line
  let onmessage = e => {
    try {
      const result = eval(e.data) // eslint-disable-line
      try {
        postMessage(result)
      } catch (error) {
        console.log('It went wrong!', e)
      }
    } catch (error) {
      try {
        postMessage({
          error,
        })
      } catch (error) {
        console.log('It went wrong!', e)
      }
    }
  }
}

let parsedSandbox = sandbox.toString()
parsedSandbox = parsedSandbox.substring(
  parsedSandbox.indexOf('{') + 1,
  parsedSandbox.lastIndexOf('}'),
)

const blob = new Blob([parsedSandbox], { type: 'application/javascript' })

export default URL.createObjectURL(blob)
