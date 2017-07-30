'use strict';
(() =>
    $.body.$([
        article.$([
            header.$(
                h1.$(
                    a.$("welcome to de.js")._({href: "./"})
                )
            ),
        
            article.$([
                p.$("Please open your Developer's tool"),
                p.$(a.$("WebRTC test")._({href: "./pvp.html", target: "_blank"})),
                p.$(a.$("Reference is here")._({href: "https://github.com/johnny-shaman/de.js/wiki", target: "_blank"}))
            ]),
            
            footer.$("MIT License")
        ]).css({width: "320px", margin: "auto"})
    ])
)();
