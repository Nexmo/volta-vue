<template>
  <div id="app">
  	<h2>Volta Vue.js API</h2>
  	<div v-for="component in components" class="Vlt-card">
  		<h3 class="Vlt-title--icon" :id="component.title"><vlt-icon :icon="component.icon" />{{component.title}} - {{component.html}}</h3>

      <vlt-table v-if="component.propertyRows" :columns="propertyColumns" :rows="component.propertyRows">
      	<template slot="item" slot-scope="slotProps">
      		<td>{{ slotProps.item.property }}</td>
      		<td>{{ slotProps.item.type }}</td>
      		<td><code>{{ slotProps.item.default }}</code></td>
      	</template>
      </vlt-table>

      <vlt-table v-if="component.eventRows" :columns="eventColumns" :rows="component.eventRows">
      	<template slot="item" slot-scope="slotProps">
      		<td>{{ slotProps.item.event }}</td>
      		<td>{{ slotProps.item.description }}</td>
      	</template>
      </vlt-table>
  	</div>
	</div>
</template>

<script>
  import { VltIcon, VltTable } from './components';
  import VoltaIcons from '@vonagevolta/core/dist/symbol/volta-icons.svg';

  export default {
    name: 'app',

    components: {
      VltIcon,
      VltTable
    },

    data () {
      return { 
      	components: [
      		{
      			title: 'Badge',
      			html: 'vlt-badge',
      			icon: 'bookmark',
      			propertyRows: [
		        	{ property: 'color', type: 'String' }, 
		        	{ property: 'dismissable', type: 'Boolean', default: true }
		        ],
      			eventRows: [
		        	{ event: 'dismissed', description: 'when the badge is dismissed' }
		        ]
      		},
      		{
      			title: 'Button',
      			html: 'vlt-button',
      			icon: 'circle-nested',
      			propertyRows: [
		        	{ property: 'app', type: 'Boolean', default: false }, 
		        	{ property: 'destructive', type: 'Boolean', default: true },
		        	{ property: 'disabled', type: 'Boolean', default: true },
		        	{ property: 'icon', type: 'String' },
		        	{ property: 'large', type: 'Boolean', default: true },
		        	{ property: 'primary', type: 'Boolean', default: true },
		        	{ property: 'secondary', type: 'Boolean', default: true },
		        	{ property: 'small', type: 'Boolean', default: true },
		        	{ property: 'spin', type: 'Boolean', default: true },
		        	{ property: 'tooltip-title', type: 'String' }
		        ]
      		},
      		{
      			title: 'Checkbox',
      			html: 'vlt-checkbox',
      			icon: 'checkbox',
      			propertyRows: [
		        	{ property: 'label', type: 'String' }, 
		        	{ property: 'options', type: 'Array' },
		        	{ property: 'property', type: 'String' },     	
		        	{ property: 'tooltip-position', type: 'String', default: 'left' },		        	
		        	{ property: 'tooltip-title', type: 'String' }
		        ]
      		},
      		{
      			title: 'Dropdown',
      			html: 'vlt-dropdown',
      			icon: 'circle-down',     			
		        propertyRows: [
		        	{ property: 'checked', type: 'Boolean' }, 
		        	{ property: 'id', type: 'String' },
		        	{ property: 'label', type: 'String' },     	
		        	{ property: 'selected', type: 'String', default: 'the first option in the options array' },		        	
		        	{ property: 'show-selection', type: 'Boolean' }
		        ]
      		},
      		{
      			title: 'Field',
      			html: 'vlt-field',
      			description: "Wraps an input element",
      			icon: 'image',     			
		        propertyRows: [
		        	{ property: 'big', type: 'Boolean', default: false }, 
		        	{ property: 'elastic', type: 'Boolean', default: false },
		        	{ property: 'error-message', type: 'String' },     	
		        	{ property: 'label', type: 'String' },		        	
		        	{ property: 'optional', type: 'Boolean', default: false }
		        ]
      		},
      		{
      			title: 'Icon',
      			html: 'vlt-icon',
      			icon: 'info',     			
		        propertyRows: [
		        	{ property: 'icon', type: 'String' }, 
		        	{ property: 'clickable', type: 'Boolean', default: false },
		        	{ property: 'pointer', type: 'Boolean', default: false },     	
		        	{ property: 'spin', type: 'Boolean', default: false },		        	
		        	{ property: 'small', type: 'Boolean', default: false }
		        ]
      		},
      		{
      			title: 'Input',
      			html: 'vlt-input',
      			icon: 'type',     			
		        propertyRows: [
		        	{ property: 'disabled', type: 'Boolean', default: false  }, 
		        	{ property: 'hint', type: 'String' },
		        	{ property: 'id', type: 'String' },     	
		        	{ property: 'label', type: 'String' },		        	
		        	{ property: 'max', type: 'Number' },       			        	
		        	{ property: 'maxlength', type: 'Number' }, 			        	
		        	{ property: 'min', type: 'Number' },	        				        	
		        	{ property: 'placeholder', type: 'String' },        	 				        	
		        	{ property: 'textarea', type: 'Boolean', default: false },		        				        	
		        	{ property: 'type', type: 'String', default: "text" },	        		        				        	
		        	{ property: 'val', type: 'String | Number' }
		        ]
      		},
      		{
      			title: 'Modal',
      			html: 'vlt-modal',
      			icon: 'modal',   
		        propertyRows: [
		        	{ property: 'can-canel', type: 'Boolean', default: true  }, 
		        	{ property: 'cancel-text', type: 'String' },
		        	{ property: 'confirm-btn-icon', type: 'String' }, 
		        	{ property: 'destructive', type: 'Boolean', default: false }, 
		        	{ property: 'dynamic', type: 'Boolean', default: false }, 
		        	{ property: 'extra-btn-class', type: 'String' }, 
		        	{ property: 'extra-btn-icon', type: 'String' }, 
		        	{ property: 'extra-btn-label', type: 'String' }, 
		        	{ property: 'id', type: 'String' }, 
		        	{ property: 'large', type: 'Boolean', default: false }, 
		        	{ property: 'message', type: 'String' }, 
		        	{ property: 'notify', type: 'Boolean', default: false }, 
		        	{ property: 'ok-text', type: 'String' }, 
		        	{ property: 'title', type: 'String' },  
		        	{ property: 'visible', type: 'Boolean', default: false }, 
		        ],
		        eventRows: [
		        	{ event: 'close', description: 'when the modal is cancelled' },
		        	{ event: 'confirm', description: 'when the modal is confirmed' },	        	
		        	{ event: 'extraBtnClick', description: 'when the extra button is clicked' }
		        ]
      		},
      		{
      			title: 'Radio',
      			html: 'vlt-radio',
      			icon: 'check-circle',   			
		        propertyRows: [
		        	{ property: 'checked', type: 'Boolean', default: false  }, 
		        	{ property: 'hint', type: 'String' }, 
		        	{ property: 'inline', type: 'Boolean', default: false  },
		        	{ property: 'label', type: 'String' }, 
		        	{ property: 'name', type: 'String' }, 
		        	{ property: 'val', type: 'String' }
		        ]
		    },
      		{
      			title: 'Switch',
      			html: 'vlt-switch',
      			icon: 'switch',   			
		        propertyRows: [
		        	{ property: 'checked', type: 'Boolean', default: false  },
		        	{ property: 'red', type: 'Boolean', default: false },
		        	{ property: 'small', type: 'Boolean', default: false  }
		        ]
      		},
      		{
      			title: 'Table',
      			html: 'vlt-table',
      			icon: 'table-1',  	
		        propertyRows: [ 
		        	{ property: 'columns', type: 'Array' },
		        	{ property: 'current-page', type: 'Number', default: 1 },
		        	{ property: 'pagination', type: 'Boolean', default: false  },
		        	{ property: 'page-size', type: 'Number', default: 20  },
		        	{ property: 'rows', type: 'Array' },
		        	{ property: 'total', type: 'Number', default: 0 }
		        ]
      		},
      		{
      			title: 'Tooltip',
      			html: 'vlt-tooltip',
      			icon: 'tooltip',
		        propertyRows: [
		        	{ property: 'position', type: 'String', default: "left"  },
		        	{ property: 'title', type: 'String' }
		        ]
      		}
      	],
      	eventColumns: [
      		{ title: 'Event' }, 
      		{ title: 'Description' }
      	],
      	propertyColumns: [
      		{ title: 'Property' },
      		{ title: 'Type' },
      		{ title: 'Default' }
  			],
      	VoltaIcons,
      	VltTable
      }
    }
  }
</script>

<style lang="scss">
$Vlt-font-url: '~@vonagevolta/core/fonts/';
@import '~@vonagevolta/core/scss/volta';

body {
  background: $grey-lighter;
  padding: $unit2 $unit3	
}
</style>
