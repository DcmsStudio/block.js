export default {
  methods: {
    getAttrValue(key) {
      const bindKey = this.data.binds && this.data.binds[key]
      console.log(key, bindKey)
      if (bindKey !== undefined) {
        return this.blockJS.data[bindKey]
      }
      return this.data.attrs[key]
    },
  },
}
