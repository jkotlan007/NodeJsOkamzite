'use strict'

let $ = require('jquery'),
    BinaryHeap = require(',/BinaryHeap');
let BUY = "buys", SELL = "sells";

function createBinaryHeap(orderType) {
    return new BinaryHeap(function (x) {
        return x;
    }, orderType);
}

function createExchange(exchangeData) {
    var cloned = $.extend(true, {},exchangeData);
    cloned.trades = [];
    init(cloned, BUY);
    init(cloned, SELL);
    return cloned;

    function init(exchange, orderType) {
        if (!exchange[orderType]) {
            exchange[orderType] = {};
            exchange[orderType].volumes = {};
            let options= {};
            if (BUY == orderType) options.max = true;
            exchange[orderType].prices = createBinaryHeap(options);
        }
    }
}

module.exports = {
    BUY: BUY,
    SELL: SELL,
    buy: function (price, volume, exchangeData){
        return order(BUY, price, volume, exchangeData);
    },
    sell: function(price, volume, exchangeData){
        return order(SELL, price, volume, exchangeData);
    }
}