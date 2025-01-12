class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length
    }

    pop() {
        if (this.length > 0) {
            const lastItem = this.data[this.length - 1];
            delete this.data[this.length - 1];
            this.length--;
            return lastItem;

        }
    }

    delete(index) {
        const item = this.data[index];
        this.shift(index)
        return item;

    }

    shift(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1]
        this.length--;
    }

    unshift(item) {

    }
}

const array = new MyArray();
// array.pop()
array.push(1);
// array.get(0)
console.log(array.get(0));