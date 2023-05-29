/**
 * @description 从url search中获取指定参数
 * @param {string} name 参数名
 */
export const getQueryParam = (name: string) => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
  const r = window.location.search.substring(1).match(reg)
  if (r !== null) {
    return decodeURIComponent(r[2])
  }
  return null
}