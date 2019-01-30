'use strict';
(async() => {
  let res = await new Promise((f) => {
    let falseySection = [[], {
      _ : (fn, a, n) => {
        return f(n);
      }
    }, [["_"]]];
    if (typeof webpackJsonp === "object") {
      webpackJsonp.push(falseySection);
    } else {
      webpackJsonp(...falseySection);
    }
  });
  delete res.m["_"];
  delete res.c["_"];
  for (let i in res.c) {
    if (res.c.hasOwnProperty(i)) {
      let m = res.c[i].exports;
      if (m && res.c[i].exports.isDeveloper === false) {
        Object.defineProperty(res.c[i].exports, "isDeveloper", {
          get : (do_not_create) => {
            return true;
          },
          set : (newTransaction) => {
            return newTransaction;
          },
          configurable : true
        });
      }
    }
  }
})();
