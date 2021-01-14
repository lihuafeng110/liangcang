"use strict";

function ShopCart() {}

ShopCart.prototype.save = function (key, obj) {
  // 把对象转换成字符串进行存储; 
  localStorage.setItem(key, JSON.stringify(obj));
};

ShopCart.prototype.get = function (key) {
  var data = localStorage.getItem(key);

  if (!data) {
    return {};
  }

  return JSON.parse(data);
};