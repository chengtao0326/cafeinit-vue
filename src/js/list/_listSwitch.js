/**
 * @fileoverview switch list
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-15
 */

export default {
  name: 'ci-list-switch',

  props: {
    ns: String,
    title: String,
    titleWidth: String,
    name: String,

    value: {
      type: Array,
      default: function () {
        return []
      }
    },

    items: {
      type: Array,
      default: function () {
        return []
      },
      required: true
    }
  },

  data() {
    return {
      model: this.value
    }
  },

  watch: {
    value(val) {
      this.model = this.value
    }
  },

  methods: {
    onChange: function (evt) {
      this.$emit('input', this.model)
    }
  }
}