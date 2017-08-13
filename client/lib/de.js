/*
global
    $,
    EventTarget,
    Event,
    Node,
    NodeList,
    HTMLCollection,
    Location,
    location,
    Element,
    HTMLTableElement,
    HTMLTableRowElement,
    HTMLSelectElement,
    HTMLOptionElement,
    HTMLInputElement,
    HTMLTextAreaElement,
    HTMLUListElement,
    HTMLOListElement,
    Option,
    Window,
    iframe,
    li,
    RTCDataChannel

    {
        eslint: {
            dot-location: ["error", "property"]
        }
    };
*/

(() => {
    "use strict";

    let is = this.is = Object.assign((t) => {
        try {
            return t.constructor;
        } catch (e) {
            return t;
        }
    }, {
        "array": (t) => is(t) === Array,
        "blank": (t) => t === "",
        "boolean": (t) => is(t) === Boolean,
        "defined": (t) => is(t) !== undefined,
        "function": (t) => is(t) === Function,
        "generator": (t) => is(t) === is(gt),
        "iterable": (t) => is(t) === is(ir),
        "held": (t) => (p) => t instanceof p,
        "nan": (t) => is.number(t) && isNaN(t),
        "null": (t) => is(t) === null,
        "number": (t) => is(t) === Number,
        "object": (t) => is(t) === Object,
        "pure": (t) => is.object(t) || is.array(t),
        "string": (t) => is(t) === String,
        "there": (t) => t.length !== 0,
        "valid": (t) => !is.blank(t) && !is.nan(t) && is(t) !== t,
        "self": (t) => is(t).de === t,
        "symbol": (t) => is(t) === Symbol
    });

    let gt = is(function* () {});
    let ir = is(function* () {}());

    let de = this.de = Object.create(null, {
        configurable: {
            value: (o) => Object.assign({
                configurable: true
            }, o)
        },

        enumerable: {
            value: (o) => Object.assign({
                configurable: true,
                enumerable: true
            }, o)
        },

        writable: {
            value: (o) => Object.assign({
                configurable: true,
                writable: true
            }, o)
        },

        all: {
            value: (o) => Object.assign({
                enumerable: true,
                configurable: true,
                writable: true
            }, o)
        },

        fine: {value: Object.defineProperties},
        al: {value: Object.create},
        tail: {value: Object.getOwnPropertyDescriptors}
    });

    de.fine(de, {_: {value: de.configurable}});

    let Wait = this.Wait = (s, cb) => {
        let t = setTimeout(cb, s);
        return () => clearTimeout(t);
    };

    let Each = this.Each = (s, cb) => {
        let t = setInterval(cb, s);
        return () => clearInterval(t);
    };

    de.fine(Function.prototype, {
        keep: de._({
            get () {
                return de.fine(
                    this.de,
                    {constructor: de.writable({value: this})}
                ) && this;
            }
        }),

        __: de._({
            value (p) {
                de.fine(this.de, p);
                p = null;
                return this.keep;
            }
        }),

        _: de._({
            value (p) {
                switch (is(p)) {
                    case Object: {
                        this.de = is.self(p) && Object.create(p) || this.de._(p);
                        break;
                    }

                    case Function: {
                        this.de = Object.create(p.de);
                        break;
                    }
                    default: break;
                }
                p = null;
                return this.keep;
            }
        }),

        fact: de._({
            value (o) {
                Object.assign(this, o);
                this.__(o.map((vv, k) => ({
                    [k]: de._({
                        get: () => this[k],
                        set: (v) => this[k] = v
                    })
                })));
                o = null;
                return this;
            }
        }),

        de: de._({
            get () {
                return this.prototype;
            },

            set (v) {
                this.prototype = v;
                v = null;
                return true;
            }
        })
    });

    de.fine(ir.de, {
        each: de._({
            value (cb) {
                for (let v of this) {
                    cb(v);
                }
                cb = null;
                return this;
            }
        })
    });

    Object.__({
        __$__: de.writable({value: false}),
        __length__: de.writable({value: 0}),
        $: de._({
            get () {
                return this.__$__;
            },

            set (t) {
                this.__({__$__: de.writable({value: t})});
                t = null;
                return true;
            }
        }),

        _: de._({
            value (o) {
                is.held(o)(EventTarget) && (this.$ = o);
                is.array(o) && (this.length = o.length);
                is.pure(o) && Object.assign(this, o);
                return this;
            }
        }),

        __: de._({
            value (o) {
                return Object.defineProperties(this, o);
            }
        }),

        de: de._({
            get () {
                return Object.getOwnPropertyDescriptors(this);
            }
        }),

        keys: de._({
            get () {
                return Object.keys(this);
            }
        }),

        length: de._({
            get () {
                return this.__length__ !== false && this.__length__ || this.keys.length;
            },

            set (v) {
                this.__length__ = v;
            }
        }),

        on: de._({
            value (e) {
                is.array(e) && e.each((v) => this.on(v)) || this.$ && this.$.on(e, this);
                e = null;
                return this;
            }
        }),

        off: de._({
            value (e) {
                is.array(e) && e.each((v) => this.off(v)) || this.$ && this.$.off(e, this);
                e = null;
                return this;
            }
        }),

        each: de._({
            value (f) {
                this.keys.forEach((k) => f(this[k], k));
                f = null;
                return this;
            }
        }),

        deep: de._({
            value (cb) {
                this.each((v, k) => is.pure(v) && v.deep(cb) || cb(v, k));
                cb = null;
                return this;
            }
        }),

        deal: de._({
            get () {
                return Object.create(this);
            }
        }),

        copy: de._({
            get () {
                return Object.create(is(this).de, this.de);
            }
        }),

        clone: de._({
            get () {
                return this.map((v) => (is.pure(v) || is.held(v)(Node)) && v.clone || v);
            }
        }),

        map: de._({
            value (cb) {
                let a = this.copy;
                a.each((v, k) => a[k] = cb(v, k));
                cb = null;
                return a;
            }
        }),

        mix: de._({
            value (cb) {
                let a = this.map((v, k) => is.pure(v) && v.mix(cb) || cb(v, k));
                cb = null;
                return a;
            }
        }),

        json: de._({
            get () {
                return JSON.stringify(this);
            }
        }),

        __oppo__: de._({value: false}),
        __stop__: de._({value: false}),

        oppo: de._({
            get () {
                return this.__oppo__;
            },

            set (v) {
                this.__({__oppo__: de._({value: v})});
                v = null;
                return true;
            }
        }),

        stop: de._({
            get () {
                return this.__stop__;
            },

            set (v) {
                this.__({__stop__: de._({value: v})});
                v = null;
                return true;
            }
        }),

        toArray: de._({
            get () {
                return Array.from(this);
            }
        }),

        handleEvent: de._({
            value (e) {
                this.stop && e.stopPropagation();
                this.oppo && e.preventDefault();
                is.object(this[e.type]) && this[e.type][
                    is.string(e._.type) && e._.type || this[e.type].type
                ].call(this, e);
                is.function(this[e.type]) && this[e.type](e);
                e = null;
            }
        })
    });

    Array.__({
        id: de._({
            value (t, s) {
                let r = this.indexOf(t, s) === -1 && false || this.indexOf(t, s);
                t = null;
                s = null;
                return r;
            }
        }),

        each: de._({
            value (f) {
                this.forEach(f);
                f = null;
                return this;
            }
        }),

        pull: de._({
            value (v) {
                this.unshift(v);
                v = null;
                return this;
            }
        }),

        kick: de._({value: Array.de.shift}),

        push: de._({
            value (v) {
                this[this.length] = v;
                v = null;
                return this;
            }
        })
    });

    String.__({
        _: de._({
            get () {
                return this.json;
            }
        }),

        id: de._({
            get () {
                return this.indexOf;
            }
        }),

        json: de._({
            get () {
                try {
                    return JSON.parse(this);
                } catch (e) {
                    return this;
                }
            }
        }),

        byte: de._({
            value (b) {
                let res = "";

                switch (b) {
                    case 1: {
                        this.each(
                            (v) => res += String.fromCharCode(
                                v.charCodeAt(0) - 0xFEE0
                            )
                        );
                        break;
                    }

                    case 2: {
                        this.each(
                            (v) => res += String.fromCharCode(
                                v.charCodeAt(0) + 0xFEE0
                            )
                        );
                        break;
                    }
                    default: return this;
                }
                b = null;
                return res;
            }
        })
    });

    this === window && (() => {
        Event.__({
            $: de._({
                get () {
                    return this.target;
                }
            }),

            _: de._({
                get () {
                    return this.data && this.data._;
                }
            })
        });

        EventTarget.__({
            on: de._({
                value (e, cb, p) {
                    this.addEventListener(e, cb, p);
                    e = null;
                    cb = null;
                    p = null;
                    return this;
                }
            }),

            off: de._({
                value (e, cb, p) {
                    this.removeEventListener(e, cb, p);
                    e = null;
                    cb = null;
                    p = null;
                    return this;
                }
            })
        });

        Node.__({
            $: de._({
                value (t) {
                    switch (is(t)) {
                        case Array || NodeList || HTMLCollection || ir: {
                            let ve = document.createDocumentFragment();
                            t.each((v) => ve.$(v));
                            this.$(ve);
                            break;
                        }

                        case null || undefined: {
                            this.outer.out(this);
                            break;
                        }

                        case String || Number || Boolean: {
                            is.defined(this.src) && this._({src: String(t)}) || this.append(t);
                            break;
                        }

                        default: is.held(t)(Node) && !this.append(t) || this.append(t.$);
                    }

                    t = null;
                    return this;
                }
            }),

            out: de._({
                value (t) {
                    let outer = this.outer;
                    let r = is.valid(t) && (!this.removeChild(t) || this) || !outer.removeChild(this) || outer;
                    t = null;
                    return r;
                }
            }),

            _: de._({
                value (a) {
                    is.object(a) &&
                    a.each((v, k) => is.valid(v) && !this.setAttribute(k, v) || this.removeAttribute(k));
                    let r = is.string(a) && this.getAttribute(a);
                    a = null;
                    return r || this;
                }
            }),

            inner: de._({
                get () {
                    return this.childNodes;
                }
            }),

            outer: de._({
                get () {
                    return this.parentNode;
                }
            }),

            clone: de._({
                get () {
                    return this.cloneNode();
                }
            }),

            css: de._({
                value (s) {
                    is.object(s) && this.style._(s);
                    this.style.cssText = is.string(s) && s || this.style.cssText;
                    s = null;
                    return this;
                }
            }),

            now: de._({
                get () {
                    return this.innerText;
                },

                set (v) {
                    this.innerText = v;
                    v = null;
                    return true;
                }
            }),

            scrollH: de._({
                value (v) {
                    this.scrollLeft = v;
                    v = null;
                    return this;
                }
            }),

            scrollV: de._({
                value (v) {
                    this.scrollTop = v;
                    v = null;
                    return this;
                }
            })
        });

        HTMLCollection.__({
            id: de._({
                value (t, s) {
                    let r = this.toArray.id(t, s);
                    t = null;
                    s = null;
                    return r;
                }
            }),

            each: de._({
                value (f) {
                    let r = this.toArray.each(f);
                    f = null;
                    return r;
                }
            })
        });

        NodeList.__({
            id: de._({
                value (t, s) {
                    let r = this.toArray.id(t, s);
                    t = null;
                    s = null;
                    return r;
                }
            }),

            each: de._({
                value (f) {
                    let r = this.toArray.each(f);
                    f = null;
                    return r;
                }
            })
        });

        Location.__({
            _: de._({
                get () {
                    return decodeURIComponent(location.search.slice(1)).json;
                }
            }),

            port: de._({
                get () {
                    return location.host.slice(location.host.id(":") + 1);
                }
            }),

            https: de._({
                get () {
                    return location.protocol === "https:";
                }
            })
        });

        Element.__({
            ["#"]: de._({
                get () {
                    return this.id;
                },

                set (v) {
                    this.id = v;
                    return true;
                }
            }),

            ["."]: de._({
                get () {
                    return this.class;
                },

                set (v) {
                    this.class = v;
                    return true;
                }
            })
        });

        HTMLTableElement.__({
            $: de._({
                value (c) {
                    let r = is.valid(c) &&
                        (is.array(c) && c.each((v) => this.insertRow().$(v)) || this.insertRow().$(c)) || this.insertRow();
                        c = null;
                    return r;
                }
            }),

            cell: de._({
                value (r) {
                    return (c) => this.rows[r].cells[c];
                }
            }),

            deep: de._({
                value (f) {
                    this.rows.each(
                        (cr, r) => cr.each(
                            (v, c) => f(v, r, c)
                        )
                    );
                    f = null;
                    return this;
                }
            })
        });

        HTMLTableRowElement.__({
            $: de._({
                value (c) {
                    let r = is.valid(c) &&
                        (is.array(c) && c.each((v) => this.insertCell().$(v)) || this.insertCell().$(c)) || this.insertCell();
                        c = null;
                    return r;
                }
            }),

            each: de._({
                value (f) {
                    this.cells.each(f);
                    f = null;
                    return this;
                }
            })
        });

        HTMLSelectElement.__({
            $: de._({
                value (o) {
                    is.pure(o) &&
                    o.each((v, k) => this.options.add(is(v) === HTMLOptionElement && v || new Option(v, k)));
                    o = null;
                    return this;
                }
            }),

            now: de._({
                get () {
                    return this.value;
                },

                set (v) {
                    this.value = v;
                    v = null;
                    return this;
                }
            })
        });

        HTMLUListElement.__({
            $: de._({
                value (t) {
                    switch (is(t)) {
                        case Array || NodeList || HTMLCollection: {
                            let ve = document.createDocumentFragment();
                            t.each((v) => ve.$(li.$(v)));
                            this.append(ve);
                            break;
                        }
                        default: Element.de.$.call(this, t);
                    }
                    t = null;
                    return this;
                }
            }),

            li: de._({
                get () {
                    return this.children;
                }
            })
        });

        HTMLOListElement.__({
            $: de._({
                value (t) {
                    switch (is(t)) {
                        case Array || NodeList || HTMLCollection: {
                            let ve = document.createDocumentFragment();
                            t.each((v) => ve.$(li.$(v)));
                            this.append(ve);
                            break;
                        }
                        default: Element.de.$.call(this, t);
                    }
                    t = null;
                    return this;
                }
            }),

            li: de._({
                get () {
                    return this.children;
                }
            })
        });

        HTMLInputElement.__({
            now: de._({
                get () {
                    switch (this.type) {
                        case "checkbox" || "radio": return this.checked;
                        default: return this.value;
                    }
                },

                set (v) {
                    switch (this.type) {
                        case "checkbox" || "radio": {
                            this.checked = v;
                            break;
                        }

                        default: return this.value = v;
                    }
                    v = null;
                    return true;
                }
            })
        });

        HTMLTextAreaElement.__({
            now: de._({
                get () {
                    return this.value;
                },

                set (v) {
                    this.value = v;
                    v = null;
                    return this;
                }
            })
        });

        XMLHttpRequest.__({
            data: de._({
                get () {
                    return this.response;
                }
            }),

            say: de._({
                value (o) {
                    this.open(
                        o.method || "GET",
                        o.url || "",
                        true,
                        o.id || undefined,
                        o.pass || undefined
                    );
                    o.header && this.header(o.header);
                    this.withCredentials = o.credential || false;
                    this.send(o.data || null);
                    o = null;
                    return this;
                }
            }),

            header: de._({
                value (v) {
                    is.object(v) && v.each((v, k) => this.setRequestHeader(k, v));
                    v = null;
                    return this;
                }
            }),

            sayType: de._({
                value (type, cs) {
                    let r = {header: {"Content-Type": type + "; charset=" + cs}};
                    type = null;
                    cs = null;
                    return r;
                }
            }),

            stream: de._({
                value: {header: {"Content-Type": "text/stream; charset=utf-8"}}
            })
        });

        WebSocket.__({
            say: de._({
                value (v) {
                    is.function(this.send) && this.send(
                        is.string(v) && v || v.json
                    );
                    return this;
                }
            }),

            hear: de._({
                value (cb) {
                    return this.on("message", cb);
                }
            })
        });

        RTCDataChannel.__({
            say: de._({
                value (v) {
                    is.function(this.send) && this.send(
                        is.string(v) && v || v.json
                    );
                    return this;
                }
            }),

            hear: de._({
                value (cb) {
                    return this.on("message", cb);
                }
            })
        });

        window.$ = Object.assign(window.$ && window.$ || ((q) => document.querySelectorAll(q).length === 1 &&
            document.querySelector(q) ||
            document.querySelectorAll(q)),

            {
                get html () {
                    return document.documentElement;
                },
    
                get head () {
                    return document.head;
                },
    
                get body () {
                    return document.body;
                },
    
                get https () {
                    return location.https;
                },
    
                get here () {
                    return location.hostname;
                },
    
                get port () {
                    return location.port;
                },
    
                get path () {
                    return location.pathname;
                }
            }
        );

        Window.__({
            article:    de._({get: () => document.createElement("article")}),
            div:        de._({get: () => document.createElement("div")}),
            section:    de._({get: () => document.createElement("section")}),
            nav:        de._({get: () => document.createElement("nav")}),
            aside:      de._({get: () => document.createElement("aside")}),
            header:     de._({get: () => document.createElement("header")}),
            footer:     de._({get: () => document.createElement("footer")}),
            h1:         de._({get: () => document.createElement("h1")}),
            h2:         de._({get: () => document.createElement("h2")}),
            h3:         de._({get: () => document.createElement("h3")}),
            h4:         de._({get: () => document.createElement("h4")}),
            h5:         de._({get: () => document.createElement("h5")}),
            h6:         de._({get: () => document.createElement("h6")}),
            p:          de._({get: () => document.createElement("p")}),
            br:         de._({get: () => document.createElement("br")}),
            table:      de._({get: () => document.createElement("table")}),
            ul:         de._({get: () => document.createElement("ul")}),
            ol:         de._({get: () => document.createElement("ol")}),
            li:         de._({get: () => document.createElement("li")}),
            dl:         de._({get: () => document.createElement("dl")}),
            dt:         de._({get: () => document.createElement("dt")}),
            dd:         de._({get: () => document.createElement("dd")}),
            form:       de._({get: () => document.createElement("form")}),
            label:      de._({get: () => document.createElement("label")}),
            input:      de._({get: () => document.createElement("input")}),
            checkbox:   de._({get: () => window.input._({type: "checkbox"})}),
            radio:      de._({get: () => window.input._({type: "radio"})}),
            text:       de._({get: () => window.input._({type: "text"})}),
            textarea:   de._({get: () => document.createElement("textarea")}),
            button:     de._({get: () => document.createElement("button")}),
            img:        de._({get: () => document.createElement("img")}),
            area:       de._({get: () => document.createElement("area")}),
            map:        de._({get: () => document.createElement("map")}),
            iframe:     de._({get: () => document.createElement("iframe")}),
            select:     de._({get: () => document.createElement("select")}),
            a:          de._({get: () => document.createElement("a")}),
            em:         de._({get: () => document.createElement("em")}),
            strong:     de._({get: () => document.createElement("strong")}),
            span:       de._({get: () => document.createElement("span")})
        });

        let XD = function (uri, ssl) {
            this
            ._(
                iframe.$(ssl && "https://" + uri || "http://" + uri)
                .wear({
                    width: "1px",
                    height: "1px",
                    position: "absolute",
                    top: "-100px;"
                })
            )
            .on("load");
            $.body.$(this.$);
        }._({
            load (e) {
                this.off("load").$.$();
                e = null;
            }
        });

        let Socket = this.Socket = function (uri = $.here, ssl = $.https) {
            uri === $.here || new XD(uri, ssl);
            let r = new WebSocket(ssl && "wss://" + uri || "ws://" + uri);
            uri = null;
            ssl = null;
            return r;
        };
    })();
})();
