import sandbox from './sandbox'

export default code => {
  // Check if browser supports the Worker API
  if (window.Worker) {
    let worker = null

    if (worker !== null) {
      worker.terminate()
    }
    worker = new Worker(sandbox)

    // Send code to worker
    worker.postMessage(code)

    // Receive result from worker
    worker.onmessage = function(e) {
      console.log(e.data)
    }

    // Kill worker to prevent unnecessary use of processing
    // setTimeout(function() {
    //   console.log('killing worker 🔪')
    //   worker.terminate()
    //   worker = null
    // }, 2000)
  }
}
