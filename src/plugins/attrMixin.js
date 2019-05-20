export default {
  methods: {
    getAttrValue(key) {
      const bindKey = this.data.binds && this.data.binds[key]
      if (bindKey !== undefined) {
        return this.blockJS.data[bindKey]
      }
      return this.data.attrs[key]
    },
  },
}
