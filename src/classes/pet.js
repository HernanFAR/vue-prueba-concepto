class Pet {
  id;
  name;

  constructor(id, name) {
    this.id = id ?? "";
    this.name = name ?? "";
  }
}

export default Pet;
