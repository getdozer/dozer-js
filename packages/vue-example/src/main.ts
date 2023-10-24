import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';

const app = createApp(App);
app.use(router);

// Vuetify
import { ThemeDefinition, createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'


const DozerTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#202325',
    surface: '#FFFFFF',
    primary: '#A73D82',
    'primary-darken-1': '#871861',
    secondary: '#5865F2',
    'secondary-darken-1': '#018786',
    error: '#B3261E',
    success: '#31C632',
  },
}

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'DozerTheme',
    themes: {
      DozerTheme
    },
  },
  components,
  directives,
})
app.use(vuetify)

app.mount('#app');
