/**
 * Storage封装
 */
const STORAGE_KEY = 'mall'
export default {
  // 存储值
  setItem (key, value, moduleName) {
    if (moduleName) {
      const val = this.getItem(moduleName)
      val[key] = value
      this.setItem(moduleName, val)
    } else {
      const val = this.getStorage()
      val[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },
  // 获取值
  getItem (key, moduleName) {
    if (moduleName) {
      const val = this.getItem(moduleName)
      if (val) return val[key]
    }
    return this.getStorage()[key]
  },
  // 获取整个对象
  getStorage () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  // 删除值
  clear (key, module) {
    const val = this.getStorage()
    if (module) {
      delete val[module][key]
    } else {
      delete val[key]
      console.log(val)
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }
}
