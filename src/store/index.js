import { createStore } from "vuex";
import petModule from "./modules/petModule";

export default createStore({
  modules: {
    petModule,
  },
});
