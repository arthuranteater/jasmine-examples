window.Calculator = {

    currentVal: 0,
    strnumber: "0123",
    boolean: true,
    decimal: .995,

    add: function (num1) {
        this.currentVal += num1;
        // console.log(this.currentVal)
        return this.currentVal;
    },

    addAny: function () {
        for (var i = 0; i < arguments.length; i++) {
            this.currentVal += arguments[i];
        }
        return this.currentVal
    },

    badFunction: () => {
        throw new Error()
    }
};
