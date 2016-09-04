export const truncate = (str, len) => str.length <= len ? str : (str.substr(0, len-3) + '...')
