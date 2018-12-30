import sandbox from './sandbox'

export default code => {
  return new Promise((res, rej) => {
    // Check if browser supports the Worker API
    if (window.Worker) {
      let worker = new Worker(sandbox)

      // Kill worker if timeout occurs
      const workerTimeout = setTimeout(() => {
        worker.terminate()
        worker = null
        rej('Timeout')
      }, 5000)

      // Send code to worker
      worker.postMessage(code)

      // Receive result from worker
      worker.onmessage = e => {
        clearTimeout(workerTimeout)

        // Kill Worker
        worker.terminate()
        worker = null

        // Handle result
        if (e.data) {
          if (e.data.hasOwnProperty('error')) {
            rej(e.data.error)
          } else {
            res(e.data)
          }
        } else {
          rej(e.data.error)
        }
      }
    } else {
      rej(
        "Your browser doesn't support this app. Try updating it to a newer version.",
      )
    }
  })
}
