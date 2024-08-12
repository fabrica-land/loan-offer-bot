export const titleCase = (value: string): string =>
  value.replace(
    /\w[^\s-]*/g,
    (word) =>
      `${word.charAt(0).toLocaleUpperCase()}${word
        .substring(1)
        .toLocaleLowerCase()}`,
  )
