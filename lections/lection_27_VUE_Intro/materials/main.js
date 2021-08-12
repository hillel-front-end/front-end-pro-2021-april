// console.log('Lection 23 __ VUE INTRO __');

/*
1. Instance
2. {{}} Interpolations (https://ru.vuejs.org/v2/guide/syntax.html)
3. Expression in nterpolations({{?:}})
3. directives: 
    * v-html="'String with html value'"
    * v-bind:disabled="boolean"
    * v-bind:href="url"
    * v-model
    * v-if="boolean" - v-else-if="boolean" - v-else
    * v-show="boolean"
    * v-for - loop (Work like  for-in), (value, name, index)

4. styles directives: ( HW )
   * v-bind:class="{ 'class-name as string': Boolean, 'another-class-name': Boolean variable, .., }"
   * v-bind:class="['activeClass', errorClassAsVar]"
   * v-bind:style="{ cssPropName: activeColorAsVar, fontSize: n + 'px', matgin: '10px' }"
5. v-on:click,mousenove .. (@click)

6. $set(vm.items, indexOfItem, newValue) // next lesson
*/
// console.log(Vue, 'vue');

var config = {
  el: "#app",
  data: {
    title: "Hello from vue magic",
    isMarried: false,
    isDissable: false,
    link: "https://roga.com",
    login: "",
    products: ["appley", "apple-2"],
    products2: [{ title: "apple" }, { title: "apple-2" }],
    productName: "",
    error: false,
    inlineSyles: {
        color: 'red',
        border: '1px solid blue'
    }
  },
  methods: {
    getTitle() {
      return this.title;
    },

    onClick() {
      if (this.productName) {
        this.products.push(this.productName);
      }
    },
  },
};

const vue = new Vue(config);
