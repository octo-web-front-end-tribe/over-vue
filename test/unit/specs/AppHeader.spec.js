import Vue from 'vue'
import AppHeader from 'src/components/AppHeader'

describe('AppHeader.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(AppHeader)
    })
    expect(vm.$el.textContent)
      .to.contains('application title')
  })
})
