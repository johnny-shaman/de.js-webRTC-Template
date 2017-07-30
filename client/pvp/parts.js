'use strict';

let Parts = function () {
    this
    ._({
        article: article
            .$(p.$("Please Wait for coming."))
            .css({
                minHeight: "320px",
                maxHeight: "320px",
                height: "320px",
                overflowY: "scroll"
            }),

        text: text
            .css({
                width: "25%",
                minWidth:"320px"
            }),
            
        pvp: new PvP((e) => {
            this.article.$([
                p.$("Guest is Connected."),
                p.$("Please enjoy on talking."),
            ]);
            
            this.text.on("keypress", this);
            this._(e.$).on(["message", "close"]);
        })
    });
}._({
    keypress (e) {
        switch (e.keyCode) {
            case 13: {
                this.$.say(this.text.now);
                this.article
                    .$(p.$("<-: " + this.text.now).css({color: "#aaaaaa"}))
                    .scrollV(this.article.scrollHeight);
                this.text.now = "";
            }
            default: return false;
        }
        return true;
    },

    message (v) {
        this.article
            .$(p.$("->: " + v._))
            .scrollV(this.article.scrollHeight);
    },

    close (e) {
        this.article.$(p.$("Guest was leaved"));
        Wait(1750, () => location.reload());
    }
});
