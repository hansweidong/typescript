var C = (function () {
    function C() {
        this.fooBack = "";
        this.bazBack = "";
        this.get = function () {
        };
        this.set = function () {
        };
    }
    C.barBack = "";
    Object.defineProperty(C.prototype, "Foo", {
        get: function () {
            return this.fooBack;
        },
        set: function (foo) {
            this.fooBack = foo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C, "Bar", {
        get: function () {
            return C.barBack;
        },
        set: function (bar) {
            C.barBack = bar;
        },
        enumerable: true,
        configurable: true
    });
    return C;
})();
var c = new C();
var foo = c.Foo;
c.Foo = "foov";
var bar = C.Bar;
C.Bar = "barv";
var baz = c.Baz;
c.Baz = "bazv";
var o = {
    get Foo() {
        return 0;
    },
    set Foo(val) {
        val;
    }
};
var ofg = o.Foo;
o.Foo = 0;
var i = function (n) {
    return n;
};