<template>
  <div id="app">
  	<h2>Volta Vue.js API</h2>

    <vlt-tabs>
      <vlt-tab label="Demo" icon="cursor">
        <volta-vue-demo />
      </vlt-tab>
      
      <vlt-tab label="API" icon="rocket">
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
      </vlt-tab>
    </vlt-tabs>  	
	</div>
</template>

<script>
  import { VltIcon, VltTabs, VltTab, VltTable } from '../components';
  import Components from './data';
  import VoltaVueDemo from './demo';
  import VoltaIcons from '@vonagevolta/core/dist/symbol/volta-icons.svg';

  export default {
    name: 'app',

    components: {
      VltIcon,
      VltTab,
      VltTabs,
      VltTable,
      VoltaVueDemo
    },

    data () {
      return { 
      	components: [],
      	eventColumns: [
      		{ title: 'Event' }, 
      		{ title: 'Description' }
      	],
      	propertyColumns: [
      		{ title: 'Property' },
      		{ title: 'Type' },
      		{ title: 'Default' }
  			],
        username: undefined,
      	VoltaIcons,
      	VltTable
      }
    },

    mounted() {
      this.components = Components;
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
