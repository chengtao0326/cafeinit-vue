/**
 * @fileoverview text
 * @author: burning <www.cafeinit.com>
 * @version: 2016-12-06
 */

export default {
  name: 'ci-text',

  props: {
    ns: String,
    name: String,
    value: [String, Number],

    type: {
      type: String,
      default: 'text'
    },

    maxlength: [Number, String],
    placeholder: String,

    disabled: {
      type: Boolean,
      default: false
    },

    autocomplete: {
      type: String,
      default: 'off'
    }
  },

  methods: {
    onChange: function (evt) {
      this.$emit('change', evt.target.value)
    },

    onInput: function (evt) {
      this.$emit('input', evt.target.value)
    }
  }
}
