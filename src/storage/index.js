const STORAGE_KEY = 'test'
export default {
  // 存储数据
  setItem(key, value, module_name) {
    if (module_name) {
      let val = this.getStorage(module_name)
      val[key] = value
      this.setItem(module_name, val)
    } else {
      let val = this.getStorage(module_name)
      val[key] = value
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },
  /**
   * 
   * @param {string} key 模塊中的key
   * @param {string} module_name 模塊名稱
   * @returns 
   */
  getItem(key, module_name) {
    if (module_name) {
      let val = this.getStorage(module_name)
      if (val) {
        return val[key]
      }
    }
    return this.getStorage()[key]
  },
  getStorage() {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}')
  },
  clear(key, module_name) {
    let val = this.getStorage()
    if (module_name) {
      if (val[module_name]) {
        delete val[module_name][key]
      }
    } else {
      delete val[key]
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }
}