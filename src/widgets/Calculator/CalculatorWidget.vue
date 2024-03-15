<script setup>

import {CalculatorButton, CalculatorInput} from "@/features";
import {calculatorModel} from "./model/calculatorModel";

import {useCalculator} from "./lib/useCalculator";

const {currentCalculatorState, onCalculatorAction} = useCalculator()

</script>

<template>
  <CalculatorInput :value="currentCalculatorState" :keyPress="onCalculatorAction"/>
  <div class="button-container">
    <div class="button_group_style" v-for="(buttonRow,index) in calculatorModel" :key="index">
      <template v-for="button in buttonRow" :key="button.value">
        <CalculatorButton :style="button.style" :model="button" @buttonPressed="onCalculatorAction"/>
      </template>
    </div>
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
  height: 100%;
  flex-direction: column;
}

.button_group_style {
  display: flex;
  flex-direction: row;
  gap: 3px;
  margin-bottom: 3px;
  height: 100%;
}
</style>