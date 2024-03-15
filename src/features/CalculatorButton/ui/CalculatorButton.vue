<script setup>

const props = defineProps(["model"])
defineEmits(['buttonPressed'])
</script>

<template>
  <div @click="$emit('buttonPressed', props.model)" class="button">
    {{ props.model.value }}
  </div>
</template>

<style scoped>
.button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 50px;
  min-width: 70px;
  height: 100%;
  color: white;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  font-size: 200%;
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;
  border: 3px solid transparent;
}

.button:hover {
  border: white 3px solid;
}
.button:active {
  filter: opacity(0.3);
}

</style>