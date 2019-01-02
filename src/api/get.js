import axios from '../model/axios'

export default async query => {
  try {
    const result = await axios.get(query)

    // Return fetched list to be rendered
    return result.data
  } catch (error) {
    console.log(error)

    // 'error' is used to render error message
    return 'error'
  }
}
