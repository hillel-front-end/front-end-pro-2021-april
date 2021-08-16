<template>
  <div class="modal">
    <div class="modal__backdrop">
      <div class="modal__content">
        <div class="modal__header">
          <slot name="header"></slot>
        </div>
        <hr />
        <div class="modal__body">Body</div>
        <hr />
        <div class="modal__footer">
          <slot name="footer"></slot>
        </div>
        <div class="modal__close-button" @click="onClose">X</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClose() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  &__backdrop {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.53);

    display: flex;
    align-items: center;
  }

  &__content {
    position: relative;
    margin: auto;
    width: 50%;
    background-color: #fff;
    color: #000;
    padding: 40px;
  }

  &__close-button {
    position: absolute;
    right: 10px;
    top: 10px;
    color: black;
    cursor: pointer;
  }
}
</style>
