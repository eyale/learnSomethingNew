let map = {
  store: {
  },
  has(key) {
    return key in this.store;
  },
  get(key) {
    return key in this.store ? this.store[key] : false;
  },
  set(key, value) {
    this.store[key] = value;
    return this;
  },
  delete(key) {
    return delete this.store[key];
  },
  clear() {
    this.store = {};
  },
  size() {
    let size = 0;
    for (const key in this.store) {
      size++
    }
    return size;
  },
  keys() {
    let keysArr = [];

    for (const key in this.store) {
      keysArr.push(key);
    }
    return keysArr;
  },
  values() {
    let valuesArr = [];
    for (const key in this.store) {
      valuesArr.push(this.store[key]);
    }
    return valuesArr;
  },
  entries() {
    let entriesArr = [];
    for (const key in this.store) {
      entriesArr.push({
        key,
        value: this.store[key]
      });
    }
  },
  forEach(cb) {
    for (const key in this.store) {
      cb(this.store[key], key, this);
    }
  }
};

const person = {
  store: {
    name: "Brendan",
    surName: 'Eich'
  }
}
const forEach = map.forEach

forEach.call(person, (value, key, map) => console.log(value));

map.set('hello', 'hola');
map.set('thank you', 'gracias');
console.log(map.get('thank you'));
console.log(map.get('hello'));
map.delete('hello');
console.log(map.has('hello'));
console.log(map.set('some','11111').get('some'))