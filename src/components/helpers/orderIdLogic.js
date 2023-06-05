const orderLogic = () => {
  var letters = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
  ];

  var randomStr = Math.floor(Math.random() * 26);
  var randomNum = Math.floor(Math.random() * 880 + 100);
  randomStr = letters[randomStr] + "" + letters[randomStr] + randomNum;
  return randomStr;
};

export default orderLogic;
