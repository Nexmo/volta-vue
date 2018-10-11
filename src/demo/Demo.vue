<template>
  <div>
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
          <vlt-button primary label="Primary"/>
          <vlt-button secondary label="Secondary"/>
          <vlt-button label="Tertiary"/>
          <vlt-button quaternary label="Quaternary"/>
          <vlt-button icon="bin" label="Icon"/>
          <vlt-button app label="App"/>
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
          <vlt-radio inline disabled name="animal" label="Cat"/>
          <vlt-radio inline name="animal" label="Dog"/>
          <vlt-radio inline name="animal" label="Rabbit"/>
        </div>
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Select</h4>
        <div>
          <vlt-field>
            <vlt-select :options="['dog', 'rabbit']"/>
          </vlt-field>
        </div>
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
        </div>
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Steps</h4>
        <div>
          <vlt-steps :count="3" /> <br />
          <vlt-steps :steps="['one', 'two']" /> <br />
          <vlt-steps :steps="['one', 'two', 'three']" :disabled="[2]" />
        </div>
      </div>
    </div>

    <div class="Vlt-grid Vlt-grid--margin-bottom3">
      <div class="Vlt-col">
        <h4>Switch</h4>
        <div>
          <vlt-switch /> <vlt-switch small />  <vlt-switch red />
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
  </div>
</template>

<script>
import {
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
} from '../components';

export default {
  name: 'volta-vue-demo',

  components: {
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
  },

  data() {
    return {
      bottomFlashVisible: false,
      modalLargeVisible: false,
      modalVisible: false,
      topFlashVisible: false,
    };
  },
};
</script>
