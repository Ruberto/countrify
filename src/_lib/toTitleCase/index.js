export default function toTitleCase(dirtyText) {
  if (arguments.length < 1) {
    throw new TypeError(
      '1 argument required, but only ' + arguments.length + ' present'
    )
  }

  var text = String(dirtyText)

  return text.toLowerCase()
             .split(' ')
             .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
             .join(' ');
}