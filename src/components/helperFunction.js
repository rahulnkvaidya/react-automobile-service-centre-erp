export function title(companyname, employmentnotice) {
  var title = companyname + " recruits " + employmentnotice;
  return title;
}
export function keywords(
  companyname,
  employmentnotice,
  edu,
  category,
  eduval,
  catval,
  city,
  states
) {
  ////////////////// edu ///
  var edus = [];
  var edustring = "";
  if (eduval === undefined) {
  } else {
    Object.keys(eduval).map(function(key, index) {
      edus.push(edu[key].category);
    });
    edustring = edus.join();
  }
  //  console.log(edustring);
  ////////////////////////
  ////////////////// edu ///
  var cats = [];
  var catstring = "";
  if (catval === undefined) {
  } else {
    Object.keys(catval).map(function(key, index) {
      edus.push(category[key].category);
    });
    catstring = cats.join();
  }
  //  console.log(edustring);
  ////////////////////////
  var keywords =
    companyname +
    ", " +
    employmentnotice +
    ", " +
    edustring +
    ", " +
    catstring +
    ", " +
    city +
    ", " +
    states;
  return keywords;
}
export function description(companyname, employmentnotice, lastdate) {
  var description =
    companyname +
    " invites application for the post of " +
    employmentnotice +
    " and last date to apply is " +
    lastdate;

  return description;
}
