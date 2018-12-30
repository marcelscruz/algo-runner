const workercode = () => {
  // eslint-disable-next-line
  let onmessage = e => {
    console.log('Message received from main script %s ', e.data)
    postMessage('sandbox: message from worker')
    postMessage({
      code: e.data,
      result: JSON.stringify(eval(e.data)), // eslint-disable-line
    })
  }
}

let code = workercode.toString()
code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'))

const blob = new Blob([code], { type: 'application/javascript' })

export default URL.createObjectURL(blob)
