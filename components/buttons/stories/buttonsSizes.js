import { withKnobs, text, boolean, object, optionsKnob, array } from '@storybook/addon-knobs';
import icons from 'Icons'
//import { isDisabled, isAppStyle, hasIcon, size } from '../../../node_modules/@vonagevolta/core/components/buttons/buttons.knobs.js'
import VltButton from 'Components/buttons/VltButton.vue'

const Sizes = () => {

     const sizes = {
      Large: 'large',
      Default: '',
      Small: 'small',
    }

    const large = false
    const small = false

    return {
      components: {
        Button: VltButton
      },
       props: {
            isDisabled: { default: boolean('Disabled', false)},
            isApp: { default: boolean('App', false)},
            hasIcon: { default: boolean('With icon', false) },
            size: { default: optionsKnob('Size', sizes, '', { display: 'inline-radio' }) }
        },
        computed: {
            icon() { return this.hasIcon ? 'download' : false },
            large() { return this.size == 'large' ? true : false },
            small() { return this.size == 'small' ? true : false }
        },
        template: `<div>
              <vlt-button primary :app="isApp" :disabled="isDisabled" :large="large" :small="small" :icon="icon" label="Primary"></vlt-button>
              <vlt-button secondary :app="isApp" :disabled="isDisabled" :large="large" :small="small" :icon="icon" label="Secondary"></vlt-button>
              <vlt-button tertiary :app="isApp" :disabled="isDisabled" :large="large" :small="small" :icon="icon" label="Tertiary"></vlt-button>
              <vlt-button quaternary :app="isApp" :disabled="isDisabled" :large="large" :small="small" :icon="icon" label="Quaternary"></vlt-button>
              <vlt-button destructive :app="isApp" :disabled="isDisabled" :large="large" :small="small" :icon="icon" label="Destructive"></vlt-button>
            </div>
            `
    }
  }

export default Sizes;