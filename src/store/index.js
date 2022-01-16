import { createStore } from 'vuex';
import journal from '../modules/daybook/store/journal'; // como el archivo importa por defecto el journalModule, es indiferente el nombre que pongamos en la importacion

const store = createStore({
  modules: {
    journal
  }
})


export default store