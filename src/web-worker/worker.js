import sandbox from './sandbox'

export default code => {
  // Check if browser supports the Worker API
  if (window.Worker) {
    let worker = null

    if (worker !== null) {
      worker.terminate()
    }
    worker = new Worker(sandbox)

    worker.postMessage(code)

    worker.onmessage = function(e) {
      console.log(e.data)
    }
  }
}
