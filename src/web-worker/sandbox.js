const sandbox = () => {
  // eslint-disable-next-line
  let onmessage = e => {
    try {
      const result = JSON.stringify(eval(e.data)) // eslint-disable-line
      postMessage(result)
    } catch (error) {
      postMessage({
        error,
      })
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
