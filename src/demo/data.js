const Components = [
  {
    title: 'Badge',
    html: 'vlt-badge',
    icon: 'bookmark',
    propertyRows: [
      { property: 'color', type: 'String' },
      { property: 'dismissable', type: 'Boolean', default: true },
    ],
    eventRows: [
      { event: 'dismissed', description: 'when the badge is dismissed' },
    ],
    code: '<vlt-badge></vlt-badge>',
  },
  {
    title: 'Button',
    html: 'vlt-button',
    icon: 'circle-nested',
    propertyRows: [
      { property: 'app', type: 'Boolean', default: false },
      { property: 'destructive', type: 'Boolean', default: false },
      { property: 'disabled', type: 'Boolean', default: false },
      { property: 'icon', type: 'String' },
      { property: 'large', type: 'Boolean', default: false },
      { property: 'primary', type: 'Boolean', default: false },
      { property: 'quaternary', type: 'Boolean', default: false },
      { property: 'secondary', type: 'Boolean', default: false },
      { property: 'small', type: 'Boolean', default: false },
      { property: 'spinner', type: 'Boolean', default: false },
      { property: 'spinner-white', type: 'Boolean', default: false },
      { property: 'tooltip-title', type: 'String' },
    ],
    code: '<vlt-button label="Label" secondary />',
  },
  {
    title: 'Callout',
    html: 'vlt-callout',
    icon: 'shout',
    propertyRows: [
      { property: 'dismissable', type: 'Boolean', default: false },
      { property: 'type', type: 'String', default: 'tip' },
    ],
    code: '<vlt-callout>Callout text</vlt-callout>',
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
      { property: 'tooltip-title', type: 'String' },
    ],
    code: '<vlt-checkbox label="Label" />',
  },
  {
    title: 'Dropdown',
    html: 'vlt-dropdown',
    icon: 'circle-down',
    propertyRows: [
      { property: 'app', type: 'Boolean', default: false },
      { property: 'id', type: 'String' },
      { property: 'label', type: 'String' },
      { property: 'selected', type: 'String', default: 'the first option in the options array' },
      { property: 'show-selection', type: 'Boolean' },
      { property: 'trigger', type: 'Boolean' },
      { property: 'unbordered', type: 'Boolean' },
    ],
    code: '<vlt-dropdown label="Label" :options="[]" />',
  },
  {
    title: 'Field',
    html: 'vlt-field',
    description: 'Wraps an input element',
    icon: 'image',
    propertyRows: [
      { property: 'big', type: 'Boolean', default: false },
      { property: 'elastic', type: 'Boolean', default: false },
      { property: 'error', type: 'String' },
      { property: 'label', type: 'String' },
      { property: 'optional', type: 'Boolean', default: false },
      { property: 'tooltip', type: 'String' },
    ],
    code: '<vlt-field></vlt-field>',
  },
  {
    title: 'Flash',
    html: 'vlt-flash',
    icon: 'flash',
    propertyRows: [
      { property: 'bottom', type: 'Boolean', default: false },
      { property: 'dismissable', type: 'Boolean', default: false },
      { property: 'type', type: 'String', default: 'shoutout' },
      { property: 'small', type: 'Boolean', default: false },
      { property: 'timeout', type: 'Number', default: 5000 },
      { property: 'visible', type: 'Boolean', default: false },
    ],
    code: '<vlt-flash></vlt-flash>',
  },
  {
    title: 'Icon',
    html: 'vlt-icon',
    icon: 'info',
    propertyRows: [
      { property: 'icon', type: 'String' },
      { property: 'clickable', type: 'Boolean', default: false },
      { property: 'color', type: 'String' },
      { property: 'no-class', type: 'Boolean', default: false },
      { property: 'pointer', type: 'Boolean', default: false },
      { property: 'small', type: 'Boolean', default: false },
      { property: 'smaller', type: 'Boolean', default: false },
    ],
    code: '<vlt-icon icon="volume" />',
  },
  {
    title: 'Input',
    html: 'vlt-input',
    icon: 'type',
    propertyRows: [
      { property: 'additionalAttributes', type: 'Object' },
      { property: 'className', type: 'String' },
      { property: 'disabled', type: 'Boolean', default: false },
      { property: 'hint', type: 'String' },
      { property: 'id', type: 'String' },
      { property: 'label', type: 'String' },
      { property: 'max', type: 'Number' },
      { property: 'maxlength', type: 'Number' },
      { property: 'min', type: 'Number' },
      { property: 'placeholder', type: 'String' },
      { property: 'textarea', type: 'Boolean', default: false },
      { property: 'type', type: 'String', default: 'text' },
      { property: 'val', type: 'String | Number' },
    ],
    code: '<vlt-input label="Label" placeholder="Placeholder" />',
  },
  {
    title: 'Modal',
    html: 'vlt-modal',
    icon: 'modal',
    propertyRows: [
      { property: 'can-canel', type: 'Boolean', default: true },
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
      { property: 'no-footer', type: 'Boolean', default: false },
    ],
    eventRows: [
      { event: 'close', description: 'when the modal is cancelled' },
      { event: 'confirm', description: 'when the modal is confirmed' },
      { event: 'extraBtnClick', description: 'when the extra button is clicked' },
    ],
    code: '<vlt-modal title="Title" :visible="true" @close="" @confirm=""></vlt-modal>',
  },
  {
    title: 'Radio',
    html: 'vlt-radio',
    icon: 'check-circle',
    propertyRows: [
      { property: 'checked', type: 'Boolean', default: false },
      { property: 'hint', type: 'String' },
      { property: 'inline', type: 'Boolean', default: false },
      { property: 'label', type: 'String' },
      { property: 'name', type: 'String' },
      { property: 'val', type: 'String' },
    ],
    code: '<vlt-radio name="Name" label="Label" />',
  },
  {
    title: 'Select',
    html: 'vlt-select',
    icon: 'cursor',
    propertyRows: [
      { property: 'id', type: 'String' },
      { property: 'options', type: 'Array' },
      { property: 'property', type: 'String' },
      { property: 'labelProperty', type: 'String' },
      { property: 'label', type: 'String' },
      { property: 'selected', type: 'String' },
      { property: 'disabled', type: 'Boolean' },
    ],
    code: '<vlt-select :options="[]" />',
  },
  {
    title: 'Sidemenu',
    html: 'vlt-sidemenu',
    icon: 'menu',
    code: '<vlt-sidemenu></vlt-sidemenu>',
  },
  {
    title: 'Sidemenu item',
    html: 'vlt-sidemenu-item',
    icon: 'menu',
    propertyRows: [
      { property: 'color', type: 'String' },
      { property: 'trigger-icon', type: 'String' },
      { property: 'trigger-label', type: 'String' },
    ],
    code: '<vlt-sidemenu-item trigger-label="Label" trigger-icon="gear"></vlt-sidemenu-item>',
  },
  {
    title: 'Sidemenu link',
    html: 'vlt-sidemenu-link',
    icon: 'menu',
    propertyRows: [
      { property: 'color', type: 'String' },
      { property: 'exact', type: 'Boolean' },
      { property: 'external', type: 'Boolean' },
      { property: 'href', type: 'String' },
      { property: 'icon', type: 'String' },
      { property: 'label', type: 'String' },
      { property: 'to', type: 'String' },
    ],
    code: '<vlt-sidemenu-link icon="pie-chart" label="Label" />',
  },
  {
    title: 'Sidemenu title',
    html: 'vlt-sidemenu-title',
    icon: 'menu',
    propertyRows: [
      { property: 'label', type: 'String' },
    ],
    code: '<vlt-sidemenu-title label="Label" />',
  },
  {
    title: 'Spinner',
    html: 'vlt-spinner',
    icon: 'reload',
    propertyRows: [
      { property: 'small', type: 'Boolean' },
    ],
    code: '<vlt-spinner />',
  },
  {
    title: 'Steps',
    html: 'vlt-steps',
    icon: 'more-negative',
    propertyRows: [
      { property: 'count', type: 'Number' },
      { property: 'id', type: 'String' },
      { property: 'selected', type: 'Number' },
      { property: 'steps', type: 'Array' },
    ],
    code: '<vlt-steps :count="3" />',
  },
  {
    title: 'Switch',
    html: 'vlt-switch',
    icon: 'switch',
    propertyRows: [
      { property: 'checked', type: 'Boolean', default: false },
      { property: 'red', type: 'Boolean', default: false },
      { property: 'small', type: 'Boolean', default: false },
    ],
    code: '<vlt-switch />',
  },
  {
    title: 'Table',
    html: 'vlt-table',
    icon: 'table-1',
    propertyRows: [
      { property: 'columns', type: 'Array' },
      { property: 'current-page', type: 'Number', default: 1 },
      { property: 'data-cols', type: 'Boolean', default: false },
      { property: 'mobile', type: 'Boolean', default: false },
      { property: 'pagination', type: 'Boolean', default: false },
      { property: 'page-size', type: 'Number', default: 20 },
      { property: 'rows', type: 'Array' },
      { property: 'total', type: 'Number', default: 0 },
    ],
    code: `<vlt-table :columns="[{ title: 'Name' }]" :rows="[]">
            <template slot="item" slot-scope="slotProps">
              <td></td>
            </template>
          </vlt-table>`,
  },
  {
    title: 'GridList',
    html: 'vlt-grid-list',
    icon: 'grid',
    propertyRows: [
      { property: 'columns', type: 'Array' },
      { property: 'current-page', type: 'Number', default: 1 },
      { property: 'pagination', type: 'Boolean', default: false },
      { property: 'page-size', type: 'Number', default: 20 },
      { property: 'rows', type: 'Array' },
      { property: 'total', type: 'Number', default: 0 },
    ],
    code: `<vlt-grid-list :columns="[{ title: 'Name' }]" :rows="[]">
            <template slot="rows">
              <div v-for="row in [{ id: '1', name: 'Kunte' }]" :key="row.id">
                {{ row.name}}
              </div>
            </template>
          </vlt-grid-list>`,
  },
  {
    title: 'Tabs',
    html: 'vlt-tabs',
    icon: 'tabs',
    propertyRows: [
      { property: 'bordered', type: 'Boolean', default: false },
      { property: 'icon', type: 'Boolean', default: false },
      { property: 'shadow', type: 'Boolean', default: false },
    ],
    code: '<vlt-tabs></vlt-tabs>',
  },
  {
    title: 'Tab',
    html: 'vlt-tab',
    icon: 'tabs',
    propertyRows: [
      { property: 'disabled', type: 'Boolean', default: false },
      { property: 'icon', type: 'String' },
      { property: 'label', type: 'String' },
    ],
    code: '<vlt-tab label="Label"></vlt-tab>',
  },
  {
    title: 'Title',
    html: 'vlt-title',
    icon: 'cursor',
    propertyRows: [
      { property: 'color', type: 'String' },
      { property: 'icon', type: 'String' },
      { property: 'title', type: 'String' },
    ],
    code: '<vlt-title icon="rocket" title="Title" />',
  },
  {
    title: 'Tooltip',
    html: 'vlt-tooltip',
    icon: 'tooltip',
    propertyRows: [
      { property: 'position', type: 'String', default: 'left' },
      { property: 'title', type: 'String' },
    ],
    code: '<vlt-tooltip title="Text" />',
  },
  {
    title: 'Composite',
    html: 'vlt-composite',
    icon: 'type',
    propertyRows: [
      { property: 'className', type: 'String', default: '' },
    ],
    code: '<vlt-composite></vlt-composite>',
  },
  {
    title: 'GroupButton',
    html: 'vlt-group-button',
    icon: 'circle-nested',
    propertyRows: [
      { property: 'big', type: 'Boolean', default: 'false' },
      { property: 'val', type: '[String, Object, Array]' },
      { property: 'options', type: 'Array', default: '[]' },
      { property: 'className', type: 'String', default: '' },
    ],
    code: '<vlt-group-button :val="cake" :options="[biscuits, cake, bread]"/>',
  },
];

export default Components;
