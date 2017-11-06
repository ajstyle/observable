class Cart {

    constructor() {

        this.items = [1, 2, 3];
        this.subscribers = [];
        this._value = 24;
    }

    subscribe(callback) {
        this.subscribers.push(callback);
        console.log(this.subscribers);
    }

    addItem(item) {
        this.items.push(item);
        this.notifyObservers();

    }

    removeItem(item) {
        this.items = this.items.filter((x) => x != item);
        this.notifyObservers();
    }

    notifyObservers() {
        console.log(this.subscribers)
        for (var i = 0; i < this.subscribers.length; i++) {
            var f = this.subscribers[i];
            f(this.items);
        }
    }



    get value() {
        console.log("getter called")
        return this._value + 1;
    }

    set value(v) {
        console.log("setter called");
        this._value = v;
    }
}


var c = new Cart();
c.subscribe((items) => {
    console.log("Items Updated");
    console.log(items);
});
c.addItem(56);

// setInterval(() => {
//     c.addItem(Math.random());
// }, 2000)