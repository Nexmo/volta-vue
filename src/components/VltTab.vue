<template>
  <div class="Vlt-tabs__panel" :class="{ 'Vlt-tabs__panel_active' : active }">
 	<slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'vlt-tab',

    props: {
      disabled: Boolean,
      icon: String,
      name: String,
    },

    data() {
    	return {
    		active: false,
    		iconName: undefined
    	}
    },

    created() {
    	this.$parent.tabs.push(this);
    },

    mounted() {
    	this.iconName = this.icon;
    },

    methods: {
    	activate() {
    		this.active = true;
    	},

    	deactivate() {
    		this.active = false;
    	}
    },

    beforeDestroy() {
        const index = this.$parent.tabs.indexOf(this)
        if (index >= 0) {
            this.$parent.tabs.splice(index, 1);
        }
    }
  }
</script>