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
        for (let i = 0; i <= this.length - 1; i++) {
            if (this.length <= 1) {
                this.data[i + 1] = this.data[i]
            } else {
                this.data[i] = this.data[i + 1];
            }
        }
        this.data[0] = item;
        this.length++
        return this.data
    }
}

const array = new MyArray();
// array.pop()
array.push(1);
// array.get(0)
array.unshift(5)
console.log(array);