console.log("Howdy there! Here's your random number...");

module.exports = {
  randNum: () => {
    console.log(Math.floor(Math.random() * 10000));
  },
};
