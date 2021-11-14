import Amplify from 'aws-amplify';
import { createApp } from 'vue'
import aws_exports from './aws-exports';
import App from './App.vue'
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';

Amplify.configure(aws_exports);
applyPolyfills().then(() => {
  defineCustomElements(window);
});

// Tailwind setup
import './styles/app.css';

createApp(App).mount('#app')
