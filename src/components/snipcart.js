import React, { Component } from "react";

class Snipcart extends Component {
    componentDidMount() {
        this.productsQueue = [];
        this.isSnipcartReady = false;
        this.cssLoading = false;
        this.cssLoaded = false;
        this.eventSubscribed = false;

        this.updateScripts = this.updateScripts.bind(this);
        this.handleProductClick = this.handleProductClick.bind(this);
        this.handleItemAdding = this.handleItemAdding.bind(this);
        this.snipcartReady = this.snipcartReady.bind(this);

        window.addEventListener('online', this.updateScripts);
        document.body.addEventListener('click', this.handleProductClick);
        document.addEventListener('snipcart.ready', this.snipcartReady);

        this.updateScripts();
    }
    componentWillUnmount() {
        window.removeEventListener('online', this.updateScripts);
        document.body.removeEventListener('click', this.handleProductClick);
        document.removeEventListener('snipcart.ready', this.snipcartReady);
    }
    handleProductClick(e) {
        if(!e.target.classList.contains("snipcart-add-item") || this.isSnipcartLoaded()) {
            return;
        }

        var item = JSON.parse(e.target.getAttribute('data-snip-def'));
        console.log("Queuing clicked item", item);
        this.productsQueue.push(item);
    }
    handleItemAdding(ev, item) {
        if(window.navigator.onLine) {
            return;
        }
        ev.preventDefault();
        console.log("Queuing item from snip event", item);
        this.productsQueue.push(item);
    }
    snipcartReady() {
        console.log("Snipcart finished loading");
        window.Snipcart.subscribe('item.adding', this.handleItemAdding);

        this.isSnipcartReady = true;

        this.dequeueProducts();
    }
    updateScripts() {
        if(!window.navigator.onLine) {
            return;
        }

        if(!this.cssLoaded && !this.cssLoading) {
            this.loadSnipCss();
        }

        var jQueryLoaded = !!(typeof window.$ == "function" && window.$.fn && window.$.fn.jquery);
        if(!jQueryLoaded) {
            return this.loadjQuery().then(this.updateScripts);
        }

        if(!this.isSnipcartLoaded()) {
            return this.loadSnipJs().then(this.updateScripts);
        }

        if(this.isSnipcartReady) {
            this.dequeueProducts();
        }
    }
    dequeueProducts() {
        window.Snipcart.api.cart.start().then(() => {
            console.log("Dequeueing products", this.productsQueue);
            if(this.productsQueue.length > 0) {
                window.Snipcart.api.items.add(this.productsQueue);
                this.productsQueue = [];
            }
        });
    }
    isSnipcartLoaded() {
        return !!(window.Snipcart);
    }
    loadjQuery() {
        return this.addElem('script', {
            async: true,
            src: "https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js",
        });
    }
    loadSnipJs() {
        return this.addElem('script', {
            async: true,
            id: "snipcart",
            src: "https://cdn.snipcart.com/scripts/2.0/snipcart.js",
            "data-api-key": this.props.apiKey,
        });
    }
    loadSnipCss() {
        this.cssLoading = true;
        return this.addElem('link', {
            async: true,
            type: "text/css",
            rel: "stylesheet",
            href: "https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css",
        })
        .then(() => this.cssLoaded = true)
        .finally(() => this.cssLoading = false);
    }
    addElem(tag, attrs) {
        return new Promise((resolve, reject) => {
            var el = document.createElement(tag);
            el.onload = resolve;
            el.onerror = reject;

            var keys = Object.keys(attrs);
            
            for(var i=0; i<keys.length; i++) {
                var key = keys[i];
                el.setAttribute(key, attrs[key]);
            }

            document.head.appendChild(el);
        });
    }
    render() {
        return null;
    }
}

export default Snipcart;
