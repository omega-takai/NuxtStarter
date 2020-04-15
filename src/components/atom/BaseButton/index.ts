import Vue from 'vue'

export default Vue.extend({
  props: {
    buttonText: {
      type: String,
      default: '',
    },
    colorType: {
      type: String,
      default: 'green',
    },
    linkUrl: {
      type: String,
      default: 'https://nuxtjs.org/',
    },
  },
  computed: {
    className(): string {
      return `button--${this.colorType}`
    },
  },
})
