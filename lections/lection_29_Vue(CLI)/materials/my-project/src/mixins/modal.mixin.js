const ModalMixin = {
  data() {
    return {
      visibility: false,
    };
  },
  methods: {
    onShow() {
      this.visibility = !this.visibility;
    },
  },
};

export default ModalMixin;
