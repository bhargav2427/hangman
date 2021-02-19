var football_names = ["everton", "liverpool", "swansea", "chelsea", "hull"];

var football_hints = [
  "Based in Mersyside",
  "Based in Mersyside",
  "First Welsh team to reach the Premier Leauge",
  "Owned by A russian Billionaire",
  "Once managed by Phil Brown",
];

var films_names = ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"];

var films_hints = [
  "Science-Fiction horror film",
  "1971 American action film",
  "Historical drama",
  "Anamated Fish",
  "Giant great white shark",
];

var city_names = ["manchester", "milan", "madrid", "amsterdam", "prague"];

var city_hints = [
  "Northern city in the UK",
  "Home of AC and Inter",
  "Spanish capital",
  "Netherlands capital",
  "Czech Republic capital",
];

var categories = ["Films", "Premier League Football Teams", "Cities"];

var max = 5;
var min = 0;
var x = Math.floor(Math.random() * (max - min) + min);
var y = Math.floor(Math.random() * (3 - 0) + min);

var category, word, hint;

if (y == 0) {
  category = categories[0];
  word = films_names[x];
  hint = films_hints[x];
} else if (y == 1) {
  category = categories[1];
  word = football_names[x];
  hint = football_hints[x];
} else {
  category = categories[2];
  word = city_names[x];
  hint = city_hints[x];
}

export { category, word, hint };
