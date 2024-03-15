const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "Calculator",
        appId: 'calculator.com',
        buildVersion: "1.0.0",
        compression: "maximum",
        win: {
          icon: 'src/assets/icons8-calculator-310.ico',
        }
      }
    }
  }
}