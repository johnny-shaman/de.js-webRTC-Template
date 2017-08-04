let Test = function () {
    this
    ._([0,1,2])
    ._(button.$("OK"))
    .on("click");
}
._({
    click (e) {
        console.log(this[2]);
    }
})