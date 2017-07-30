~~~javascript
//de.js is

let MyB = function () {
    this
    ._({
        t: 0,
    })
    ._(button.$("OK"))
    .on("click");
}._({
    click (e) {
        alert(this.t);
    }
});

$.body.$(new MyB());
~~~


~~~javascript
// pure javascript is

let MyB = function () {
    this.t = 0;
    this.$ = document.createElement("button");
    this.$.appendChild(new Text("OK"));
    this.$.on("click", this);
};

MyB.prototype.handleEvent = function (e) {
    this[e.type](e);
};

MyB.prototype.click = function (e) {
    alert(this.t);
};

document.body.appendChild(new MyB().$);
~~~
