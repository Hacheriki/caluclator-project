<script setup>
// import {watch} from "vue";
//

import {computed} from "vue";
import {EqualsButton, NumberButton, Backspace} from "@/features";

const props = defineProps(['value', 'keyPress'])
const cacheString = computed(() => {
  let str = ""

  props.value.slice(0,props.value.length === 2 ? props.value.length : -1).forEach((el) => {
    str += " " + el.value
  })

  return str
})

const displayString = computed(() => {
  let str = ""
  props.value.forEach((el) => {
    if (el.type === "number" || el.type === "result") {
      str = el.value
    }
  })
  return str
})

function onKeyDown(event) {
  event.target.scrollLeft = event.target.scrollWidth

  const ZERO_KEY = 48
  const COMMA_KEY = 190
  const ENTER_KEY = 13
  const BACKSPACE_KEY = 8

  if (event.which === BACKSPACE_KEY) {
    props.keyPress(new Backspace())
  }

  if (event.which >= ZERO_KEY && event.which <= ZERO_KEY + 10 || event.which === COMMA_KEY) {
    props.keyPress(new NumberButton(event.key))
  }

  if (event.which === ENTER_KEY) {
    props.keyPress(new EqualsButton())
  }
}

</script>

<template>
<div style="display: flex; flex-direction: column; margin-bottom: 30px; justify-content: center; margin-top: 20px; max-width: 100%">
  <div style="text-align: right; color: darkgray; font-size: 200%; min-height: 40px; margin-bottom: 10px; overflow: hidden">
    {{cacheString}}
  </div>
  <input autofocus @blur="(event) => event.target.focus()" @keydown.prevent="onKeyDown" style="text-align: right; color: white; background: none; border: none; font-size: 300%; font-weight: 500; overflow: hidden; caret-color: transparent; outline: none" :value="`${displayString}`"/>
</div>
</template>

<style scoped>

</style>