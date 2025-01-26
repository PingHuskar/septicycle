const GetNoOfAgentsRequired = (resonatorsArr) => {
  if (!ss.sum(resonatorsArr)) return 0;
  let countL8 = resonatorsArr.filter((r) => r == 8).length;
  if (countL8 >= 4) return countL8;
  let countL7 = resonatorsArr.filter((r) => r == 7).length;
  if (countL7 >= 4) return countL7;
  let countL6 = Math.ceil(resonatorsArr.filter((r) => r == 6).length / 2);
  if (countL6 >= 3) return countL6;
  let countL5 = Math.ceil(resonatorsArr.filter((r) => r == 5).length / 2);
  if (countL5 >= 3) return countL5;
  let countL4 = Math.ceil(resonatorsArr.filter((r) => r == 4).length / 4);
  let countL3 = Math.ceil(resonatorsArr.filter((r) => r == 3).length / 4);
  let countL2 = Math.ceil(resonatorsArr.filter((r) => r == 2).length / 4);
  let countL1 = Math.ceil(resonatorsArr.filter((r) => r == 1).length / 8);
  return Math.max(
    countL1,
    countL2,
    countL3,
    countL4,
    countL5,
    countL6,
    countL7,
    countL8
  );
};

module.exports = GetNoOfAgentsRequired;