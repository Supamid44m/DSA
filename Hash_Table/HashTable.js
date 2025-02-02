class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        let index = this._hash(key)
        this.data[index] = [key, value]
        return this.data
    }

    get(key) {
        let index = this._hash(key)
        return this.data[index][1];
    }
}

const hash = new HashTable(60);
hash.set('test', 'test')
hash.get('test')
console.log(hash.get('test'))