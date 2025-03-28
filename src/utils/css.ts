export const classes = (
  ...classList: (string | undefined | false)[]
) => {
  const generateClassString = (
    list: string,
    myClass: string | undefined | false
  ) => {
    let output = list
    if (output) {
      output += ' ' // appends a space if list is not empty
    }
    if (Array.isArray(myClass)) {
      output += myClass.reduce(generateClassString, '') // recursion to deal with Arrays
    } else if (typeof myClass === 'string') {
      output += myClass // append 'myClass' directly to the list
    }

    return output
  }
  return classList.reduce(generateClassString, '')
}
