class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    /// O(1)
    get(index) {
        return this.data[index];
    }

    /// O(1)
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length
    }

    /// O(1)
    pop() {
        if (this.length > 0) {
            const lastItem = this.data[this.length - 1];
            delete this.data[this.length - 1];
            this.length--;
            return lastItem;

        }
    }

    /// O(1)
    delete(index) {
        const item = this.data[index];
        this.shift(index)
        return item;

    }

    /// O(n)
    shift(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1]
        this.length--;
    }

    /// O(n)
    unshift(item) {
        if (this.length > 0) {
            for (let i = this.length - 1; i >= 0; i--) {
                this.data[i + 1] = this.data[i];
            }
        }
        this.data[0] = item;
        this.length++;
        return this.data;
    }
}

const array = new MyArray();
array.push(3);
// array.get(0)
array.unshift(1)
array.unshift(2)
// array.unshift(4)

// array.pop()
console.log(array.length);