const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: [
        'vuetify'
    ],
    lintOnSave: false,
    pages: {
        index: {
            entry: 'src/main.js',
            title: 'XYS612'
        }
    }
})