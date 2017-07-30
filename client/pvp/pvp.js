(() => {
    "use strict";

    let parts = new Parts();

    $.body.$(article.$([
        header.$([
            h1.$(
                a.$("de.js")._({href: "./"})
            ),
            h2.$(
                a.$("de.js pvp tester")._({href: "./pvp.html"})
            )
        ]),
    
        article.$([
            "article",
            "text"
        ].map((v) => parts[v]))
    ]).css({width: "320px", margin: "auto"}));
})();