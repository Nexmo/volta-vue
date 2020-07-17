<template>
  <div>
    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Accordion</h4>
        <div>
          <vlt-accordion>
          <vlt-accordion-item>
            <template slot="header">Click me</template>
            <div>Accordion body</div>
          </vlt-accordion-item>
          <vlt-accordion-item>
            <template slot="header">Click me 2</template>
            <div>Accordion body 2</div>
          </vlt-accordion-item>
          </vlt-accordion>
        </div>
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Badge</h4>
        <div>
          <vlt-badge>I'm a badge</vlt-badge>
          <vlt-badge large>I'm a large badge</vlt-badge>
          <vlt-badge small>I'm a small badge</vlt-badge>
          <vlt-badge color="red">I'm a red badge</vlt-badge>
        </div>
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Button</h4>
        <div>
          <vlt-button id="primary" primary label="Primary"/>
          <vlt-button secondary label="Secondary"/>
          <vlt-button label="Tertiary"/>
          <vlt-button quaternary label="Quaternary"/>
          <vlt-button icon="bin" label="Icon"/>
          <vlt-button app label="App"/>
          <vlt-button label="Loading" spinner />
          <vlt-button secondary label="Loading" spinner-white />
        </div>
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Callout</h4>
        <div>
          <vlt-callout type="critical">A critical callout</vlt-callout>
          <vlt-callout type="good">A good callout</vlt-callout>
          <vlt-callout type="tip">A tip callout</vlt-callout>
          <vlt-callout type="shoutout">A shoutout callout</vlt-callout>
          <vlt-callout type="warning">A warning callout</vlt-callout>
          <vlt-callout type="tip" dismissable>A dismissible callout</vlt-callout>
        </div>
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Checkbox</h4>
        <div>
          <vlt-checkbox inline label="Check me!"/>
          <vlt-checkbox checked inline label="I'm already checked!"/>
          <vlt-checkbox disabled inline label="I'm disabled!"/>
        </div>
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Dropdown</h4>
        <div>
          <vlt-dropdown
            label="Favourite pet"
            :options="['cat', 'dog', 'hamster', 'rabbit']"
          />
          <vlt-dropdown
            app
            label="app styling"
            :options="['cat', 'dog', 'hamster', 'rabbit']"
          />
          <vlt-dropdown
            showSelection
            label="showSelection with label"
            :options="['cat', 'dog', 'hamster', 'rabbit']"
          />
          <vlt-dropdown
            showSelection
            app
            :options="['showSelection with no label', 'dog', 'hamster', 'rabbit']"
          />
          <vlt-dropdown
            unbordered
            trigger
            no-arrow
            :options="['showSelection with no label', 'dog', 'hamster', 'rabbit']"
          >
            <template slot="button-value">
              <vlt-icon icon="more-v-negative"/>
            </template>
          </vlt-dropdown>
        </div>
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Field</h4>
        <div>
          <vlt-field>
            I am wrapped in a field
          </vlt-field>
          <vlt-field error="Something is wrong">
            I am wrapped in a field with an error
          </vlt-field>
        </div>
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Flash</h4>
        <div>
          <vlt-button
            secondary app label="Bottom flash"
            @click="bottomFlashVisible = true"
          />
          <vlt-button
            secondary app label="Top flash"
            @click="topFlashVisible = true"
          />
          <vlt-flash
            type="critical" bottom :visible="bottomFlashVisible"
            @dismissed="bottomFlashVisible = false">
            Bottom flash
          </vlt-flash>
          <vlt-flash
            small :visible="topFlashVisible"
            @dismissed="topFlashVisible = false">
            Top flash
          </vlt-flash>
        </div>
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Icon</h4>
        <div>
          <vlt-icon icon="volume" />
          <vlt-icon icon="volume" color="blue-dark"/>
          <vlt-icon small icon="volume" />
        </div>
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Input</h4>
        <div>
          <vlt-field big>
            <vlt-input label="Label on input" placeholder="I'm wrapped with a big field"/>
          </vlt-field>
          <vlt-field label="Label on field">
            <vlt-input placeholder="I'm wrapped with a regular field"/>
          </vlt-field>
          <vlt-field label="Text Area">
            <vlt-input rows="5" textarea placeholder="a textarea"/>
          </vlt-field>
        </div>
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Modal</h4>
        <div>
          <vlt-button secondary app label="Mesasge modal" @click="modalVisible = true"></vlt-button>
          <vlt-modal
            message="You can dismiss me"
            title="Hello"
            :visible="modalVisible"
            @close="modalVisible = false"
            @confirm="modalVisible = false">
          </vlt-modal>

          <vlt-button secondary app label="Large modal" @click="modalLargeVisible = true"/>
          <vlt-modal
            large title="Hello"
            :visible="modalLargeVisible"
            @close="modalLargeVisible = false"
            @confirm="modalLargeVisible = false"
          >
            <vlt-field label="First name">
              <vlt-input />
            </vlt-field>
            <vlt-field label="Last name" >
              <vlt-input />
            </vlt-field>
          </vlt-modal>
        </div>
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Radio</h4>
        <div>
          <vlt-radio inline disabled name="animal" label="Cat" val="cat" v-model="radio"/>
          <vlt-radio inline name="animal" label="Dog" val="dog" v-model="radio"/>
          <vlt-radio inline name="animal" label="Rabbit" val="rabbit" v-model="radio"/>
        </div>
        Selected value is: {{ radio }}
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Select (big)</h4>
        <div>
          <vlt-field big>
            <vlt-select
              :options="['dog', 'rabbit']"
              label="Select one"
              :val="select"
              v-model="select" />
          </vlt-field>
        </div>
        Value is: {{ select }}
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Select (normal)</h4>
        <div>
          <vlt-field label="Select one">
            <vlt-select
              :options="['lion', 'tiger']"
              selected="Please pick one"
              :val="select2"
              v-model="select2" />
          </vlt-field>
        </div>
        Value is: {{ select2 }}
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Sidemenu (wrapped in a sidenav)</h4>
        <div>
          <div id="Vlt-sidenav" class="Vlt-sidenav Vlt-sidenav--dark">
            <div class="Vlt-sidenav__scroll">
              <vlt-sidemenu>
                <li><vlt-sidemenu-link icon="pie-chart" label="Dashboard" to="/dashboard"/></li>
                <vlt-sidemenu-title label="Basic Menu" />
                <vlt-sidemenu-item trigger-label="Settings" trigger-icon="gear">
                  <li><vlt-sidemenu-link icon="user" label="Account" to="/accounts"/></li>
                </vlt-sidemenu-item>
                <li><vlt-sidemenu-link
                  icon="enter"
                  color="purple"
                  label="Internal link"
                  href="https://github.com/Nexmo/volta-vue"
                /></li>
                <li><vlt-sidemenu-link
                  icon="open"
                  external
                  color="purple"
                  label="External link"
                  href="https://github.com/Nexmo/volta-vue"
                /></li>
              </vlt-sidemenu>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Spinner</h4>
        <div>
          <vlt-spinner />
          <vlt-spinner small/>
          <vlt-spinner smaller/>
        </div>
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Steps</h4>
        <div>
          <vlt-steps :count="3" key="steps-one" /> <br />
          <vlt-steps :steps="[{ disabled: true }, {}, {}]" key="steps-two" :selected="1" /> <br />
          <vlt-steps :steps="[{ title: 'one' }, { title: 'two' }]" key="steps-three"  /> <br />
          <vlt-steps
            :steps="[
              { title: 'one', disabled: true },
              { title: 'two' },
              { title: 'three' }
            ]"
            key="steps-four" :selected="1" /> <br />
          <vlt-steps
            :steps="[
              { title: 'one', conplete: true, disabled: true },
              { title: 'two' },
              { title: 'three' }
            ]"
            key="steps-five" :selected="1" />
        </div>
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Switch</h4>
        <div>
          <vlt-switch /> <vlt-switch small />  <vlt-switch red /> <vlt-switch disabled />
        </div>
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Table</h4>
        <div>
          <vlt-table
            :columns="[{ title: 'Name' }, { title: 'Job' }]"
            :rows="[
              { name: 'Rasmus  Nichols', job: 'Baker'},
              { name: 'Sandra  Jackson', job: 'Engineer'}
            ]"
          >
            <template slot="item" slot-scope="slotProps">
              <td>{{ slotProps.item.name }}</td>
              <td>{{ slotProps.item.job }}</td>
            </template>
          </vlt-table>
          <vlt-table
            :columns="[{ title: 'Name', sortable: true, property: 'name' }, { title: 'Job' }]"
            :rows="[
              { name: 'Rasmus  Nichols', job: 'Baker'},
              { name: 'Sandra  Jackson', job: 'Engineer'}
            ]"
            data
          >
          <template slot="item" slot-scope="slotProps">
              <td>{{ slotProps.item.name }}</td>
              <td>{{ slotProps.item.job }}</td>
            </template>
          </vlt-table>
          <vlt-table
            :columns="[{ title: 'Name' }, { title: 'Job' }]"
            :rows="[
              { name: 'Rasmus  Nichols', job: 'Baker'},
              { name: 'Sandra  Jackson', job: 'Engineer'}
            ]"
            data-cols
            mobile
          >
            <template slot="item" slot-scope="slotProps">
              <td>{{ slotProps.item.name }}</td>
              <td>{{ slotProps.item.job }}</td>
            </template>
          </vlt-table>
        </div>
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Grid List</h4>
        <div>
          <vlt-grid-list
            :columns="[{ title: 'Name' }, { title: 'Job' }]"
            :rows="[
              { name: 'Rasmus  Nichols', job: 'Baker'},
              { name: 'Sandra  Jackson', job: 'Engineer'}
            ]"
            :numberOfColumns="3"
            custom
          >
            <template slot="rows">
              <div v-for="row in tableRows" :key="row.job">
                name: {{ row.name }} job: {{ row.job }}
              </div>
            </template>
          </vlt-grid-list>
        </div>
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Tabs</h4>
        <div>
          <vlt-tabs>
            <vlt-tab label="Regular">
              Regular tab
            </vlt-tab>
            <vlt-tab label="With icon" icon="gear">
              With label
            </vlt-tab>
            <vlt-tab label="Disabled" disabled>
            </vlt-tab>
          </vlt-tabs>

          <vlt-tabs icon>
            <vlt-tab label="One" icon="rocket">
              Step One
            </vlt-tab>
            <vlt-tab label="Two" icon="star">
              Step Two
            </vlt-tab>
            <vlt-tab label="Disabled" icon="cart" disabled>
            </vlt-tab>
          </vlt-tabs>

          <vlt-tabs bordered>
            <vlt-tab label="One">
              Step One
            </vlt-tab>
            <vlt-tab label="Two">
              Step Two
            </vlt-tab>
            <vlt-tab label="Disabled" disabled>
            </vlt-tab>
          </vlt-tabs>

          <vlt-tabs shadow>
            <vlt-tab label="One">
              Step One
            </vlt-tab>
            <vlt-tab label="Two">
              Step Two
            </vlt-tab>
            <vlt-tab label="Disabled" disabled>
            </vlt-tab>
            <vlt-tab label="Four">
              Step Four
            </vlt-tab>
            <vlt-tab label="Five">
              Step Five
            </vlt-tab>
            <vlt-tab label="Six">
              Step Six
            </vlt-tab>
            <vlt-tab label="Seven">
              Step Seven
            </vlt-tab>
          </vlt-tabs>
        </div>
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Title</h4>
        <div>
          <vlt-title icon="rocket" color="purple" title="Getting Started"/>
        </div>
      </div>
    </div>

     <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Tooltip</h4>
        <div>
          <vlt-tooltip title="I have a default icon" />
          <vlt-tooltip title="I have text">Hover on me</vlt-tooltip>
          <vlt-tooltip position="top" title="I have my position set to top" />
        </div>
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Composite</h4>
          <vlt-field>
            <vlt-composite>
              <template slot="prepend">
                <vlt-select
                  :options="['composition']"
                  selected="composite"
                  class-name="Vlt-native-dropdown"
                  is-in-composite
                />
              </template>
              <vlt-input placeholder="e.g. 1105" />
            </vlt-composite>
          </vlt-field>

          <vlt-field>
            <vlt-composite>
              <vlt-input placeholder="Search" />
              <template slot="append">
                <vlt-button
                  icon="search"
                />
              </template>
            </vlt-composite>
          </vlt-field>
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Single Select Group Button</h4>
        <div>
          <vlt-field>
            <vlt-group-button
              :val="groupBtnVal"
              :options="['biscuits', 'cake', 'bread']"
              v-model="groupBtnVal"
            />
          </vlt-field>
        </div>
      </div>
    </div>
    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Multiple Select Group Button</h4>
        <div>
          <vlt-field>
            <vlt-group-button
              :val="multipleGroupBtnVal"
              :options="['biscuits', 'cake', 'bread']"
              v-model="multipleGroupBtnVal"
            />
          </vlt-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  VltAccordion,
  VltAccordionItem,
  VltBadge,
  VltButton,
  VltCallout,
  VltCheckbox,
  VltDropdown,
  VltField,
  VltFlash,
  VltIcon,
  VltInput,
  VltModal,
  VltRadio,
  VltSelect,
  VltSidemenu,
  VltSidemenuItem,
  VltSidemenuLink,
  VltSidemenuTitle,
  VltSpinner,
  VltSteps,
  VltSwitch,
  VltTab,
  VltTabs,
  VltTable,
  VltTitle,
  VltTooltip,
  VltGroupButton,
  VltComposite,
  VltGridList,
} from '../components';

export default {
  name: 'volta-vue-demo',

  components: {
    VltAccordion,
    VltAccordionItem,
    VltBadge,
    VltButton,
    VltCallout,
    VltCheckbox,
    VltDropdown,
    VltField,
    VltFlash,
    VltIcon,
    VltInput,
    VltModal,
    VltRadio,
    VltSelect,
    VltSidemenu,
    VltSidemenuItem,
    VltSidemenuLink,
    VltSidemenuTitle,
    VltSpinner,
    VltSteps,
    VltSwitch,
    VltTab,
    VltTabs,
    VltTable,
    VltTitle,
    VltTooltip,
    VltGroupButton,
    VltComposite,
    VltGridList,
  },

  data() {
    return {
      bottomFlashVisible: false,
      modalLargeVisible: false,
      modalVisible: false,
      topFlashVisible: false,
      groupBtnVal: 'biscuits',
      multipleGroupBtnVal: ['cake'],
      radio: undefined,
      select: 'dog',
      select2: undefined,
      tableRows: [
        { name: 'Rasmus  Nichols', job: 'Baker' },
        { name: 'Sandra  Jackson', job: 'Engineer' },
        { name: 'Michael  Dapaa', job: 'Comedian' },
        { name: 'Burna  Wiz', job: 'Legend' },
      ],
    };
  },
};
</script>
