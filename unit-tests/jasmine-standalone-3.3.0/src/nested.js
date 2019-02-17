window.nested = {

    currentVal: 0,


    add: function (num1) {
        this.currentVal += num1;
        return this.currentVal;
    },


    addAny: function () {
        this.currentVal = 0

        for (var i = 0; i < arguments.length; i++) {
            sum = this.currentVal += arguments[i];
        }
        this.currentVal = 0
        return sum;
    }
};



