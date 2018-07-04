<template>
   <div class="Vlt-dropdown" :class="{ 'Vlt-dropdown--expanded' : expanded }">
    <button class="Vlt-dropdown__btn" @click="toggleDropdown($event)">
      {{label}}<span v-if="showSelection">:</span> 
      <span v-if="showSelection" class="Vlt-dropdown__selection">
        {{selectedOption}}
      </span>
    </button>
    <div class="Vlt-dropdown__panel">
      <div class="Vlt-dropdown__panel__content">
        <ul>
          <li v-for="option in options">
            <a class="Vlt-dropdown__link" @click="selectOption(option)">
              <span class="Vlt-dropdown__label">{{property ? option[property] : option}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "vlt-dropdown",

      props: {
        label: String,
        options: Array,
        property: String,
        selected: {
          type: String,
          required: false
        },
        showSelection: Boolean
      },

      data() {
        return {
          expanded: false,
          selectedOption: this.selected
        }
      },

      methods: {
        bodyListener(event) {
         
          this.expanded = false;
          document.removeEventListener('click', this.bodyListener);
        },

        toggleDropdown(event) {
          event.stopPropagation();
          this.expanded = !this.expanded;

          if(this.expanded) {
            document.addEventListener('click', this.bodyListener);
          }
        },

        selectOption(option) {
          let selection = this.property ? option[this.property] : option;
         
          this.selectedOption = selection;
          this.$emit('input', selection);
          this.expanded = false;
          document.removeEventListener('click', this.bodyListener);
        }
      },

      mounted() {
        if(!this.selected) {
          this.selectedOption = this.options[0];          
        }
      },

      watch: {
        selected(selected) {
          this.selectedOption = selected;
        }
      }
    }
</script>