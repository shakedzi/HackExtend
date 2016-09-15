module.exports = {
  calcTableArrangement: function(tableSize){
    return Math.ceil((tableSize - 6) / 2)
  },
  bigImg: function (x) {
    x.style.height = "64px";
    x.style.width = "64px";
    return x;
  },

  normalImg: function(x) {
      x.style.height = "32px";
      x.style.width = "32px";
      return x;
  }
}
