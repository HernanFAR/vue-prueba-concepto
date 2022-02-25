import Pet from "@/classes/pet";

export default {
  namespaced: true,
  state: () => ({
    pets: [],
    pet: new Pet(),
    isPetFormInEdit: false,
  }),
  mutations: {
    setNewPets(state, payload) {
      state.pets = payload.newPets;
    },
    setNewPet(state, payload) {
      state.pet = payload.newPet;
    },
    changeFormPetMode(state, payload) {
      console.log(payload);
      state.isPetFormInEdit = payload.newMode;
    },
  },
  actions: {
    setPets({ commit }, newPets) {
      commit("setNewPets", {
        newPets,
      });
    },
    setPet({ commit }, newPet) {
      commit("setNewPet", {
        newPet,
      });
    },
    setPetFormInEditMode({ commit }) {
      commit("changeFormPetMode", {
        newMode: true,
      });
    },
    setPetFormInCreationMode({ commit }) {
      commit("changeFormPetMode", {
        newMode: false,
      });
    },
  },
};
