<template>
  <div class="Vlt-tabs">
  	<ul class="Vlt-tabs__header">
 		<li v-for="(tab, index) in tabs" class="Vlt-tabs__link" @click="selectTab(index)"
 			:class="{ 'Vlt-tabs__link_active' : index === activeTab, 'Vlt-tabs__link_disabled': tab.disabled }" >
 			<vlt-icon v-if="tab.iconName && !hasIcons" :icon="tab.iconName" no-class />
 			
 			<vlt-tooltip :title="tab.name" v-if="hasIcons">
 				<vlt-icon :icon="tab.iconName" no-class />
 			</vlt-tooltip>
		
 			<span v-else>{{ tab.name }}</span>
 		</li>
  	</ul>
  	<div class="Vlt-tabs__content">
  		<slot></slot>
  	</div>

  </div>
</template>

<script>
  import { VltIcon, VltTooltip } from './index';

  export default {
    name: 'vlt-tabs',

    components: {
      VltIcon,
      VltTooltip
    },

    props: {
      activeIndex: {
      	type: Number,
      	default: 0
      },
      icon: {
      	type: Boolean,
      	default: false
      }
    },

    data() {
    	return {
    		activeTab: 0,
    		tabs: [],
    		hasIcons: false
    	}
    },

    mounted(){
    	this.activeTab = this.activeIndex;
    	this.updateTabsActive();
    	this.hasIcons = this.icon;
    },

    methods: {
    	selectTab(index) {
    		this.activeTab = index;
    		this.updateTabsActive();  		
    	},

    	updateTabsActive(){
    		this.tabs.forEach((tab, i) => {
    			if(this.activeTab === i) {
    				tab.activate();
    			} else {
    				tab.deactivate();
    			}
    		});
    	}	
    },

    watch: {
    	activeIndex(newIndex) {
    		this.activeTab = activeIndex;
    		this.updateTabsActive();
    	}
    }
  }
</script>