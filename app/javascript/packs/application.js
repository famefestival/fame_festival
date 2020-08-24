// External imports
import 'bootstrap';

require('@rails/ujs').start();
require('turbolinks').start();
require('@rails/activestorage').start();
require('channels');

// Internal imports:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
});
