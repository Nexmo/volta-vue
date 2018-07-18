const Components = [
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
		{ property: 'checked', type: 'Boolean', default: false }, 
		{ property: 'disabled', type: 'Boolean', default: false },  
		{ property: 'id', type: 'String' },  
		{ property: 'inline', type: 'Boolean', default: false },  
		{ property: 'label', type: 'String' },  	
		{ property: 'tooltip-position', type: 'String', default: 'left' },		        	
		{ property: 'tooltip-title', type: 'String' }
		]
	},
	{
		title: 'Dropdown',
		html: 'vlt-dropdown',
		icon: 'circle-down',     			
		propertyRows: [
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
		{ property: 'no-class', type: 'Boolean', default: false },  
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
		title: 'Tabs',
		html: 'vlt-tabs',
		icon: 'tabs',    
		propertyRows: [ 
		{ property: 'icon', type: 'Boolean', default: false }
		]
	},
	{
		title: 'Tab',
		html: 'vlt-tab',
		icon: 'tabs',    
		propertyRows: [ 
		{ property: 'disabled', type: 'Boolean', default: false },
		{ property: 'icon', type: 'String' },
		{ property: 'label', type: 'String' }
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
]

export default Components
