/**
 * @fileoverview ci-alert
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-28
 */

export default {
  name: 'ci-alert',

  props: {
    ns: {
      type: String,
      default: 'ci-'
    },

    size: String,     // lg
    title: String,
    content: String,

    okText: {
      type: String,
      default: '确认'
    },

    isCloseViaDimmer: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    onCloseModal(type, sender) {
      this.$emit('close', type, sender)
    },

    onClickButton() {
      this.$emit('close', 'button', this)
    }
  }
}
