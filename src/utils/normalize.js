export const normalizeResult = result => {
  if (result === true) {
    return true
  } else if (result === false) {
    return false
  } else {
    return undefined
  }
}
