dataSetVersion = "2021-05-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Select All",
    key: "movie",
    tooltip: "Check this to restrict to certain movie entries.",
    checked: true,
    sub: [
      { name: "Final Destination", key: "fd1" },
      { name: "Final Destination 2", key: "fd2" },
      { name: "Final Destination 3", key: "fd3" },
      { name: "The Final Destination", key: "fd4" },
      { name: "Final Destination 5", key: "fd5" },
      { name: "Final Destination: Bloodlines", key: "fd6" },
    ]
  },
  {
    name: "Select All",
    key: "role",
    tooltip: "Check this to restrict to certain character roles.",
    checked: true,
    sub: [
      { name: "Protagonist", key: "prot",
            tooltip: "The main character and visionary of a film.",
      },
      { name: "Deutoragonist", key: "deut",
            tooltip: "The second most-important character of a film.",
      },
      { name: "Tritagonist", key: "tri",
            tooltip: "The third most-important character of a film.",
      },
      { name: "Main Characters", key: "all",
            tooltip: "The remaining characters of a film.",
      },    
    ]
  },
  {
    name: "Male Characters Only",
    key: "male",
    tooltip: "Check this to limit selection to male characters only.",
    checked: false
  },
  {
    name: "Female Characters Only",
    key: "female",
    tooltip: "Check this to limit selection to female characters only.",
    checked: false
  },
  {
    name: "Include Premonition Characters",
    key: "premo",
    tooltip: "Check this to include characters who ONLY appeared in premonitions.",
    checked: false
  },
  {
    name: "Include Non-Dying Characters",
    key: "lives",
    tooltip: "Check this to include characters not on Death's list but are still part of the story.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [

{ name: "John William Bludworth",
  img: "0_Bludworth.png",
  opts: {
  movie: ["fd1", "fd2", "fd5", "fd6"],
  role: ["all"],
  male: true }
},
{ name: "Alex Browning",
  img: "1_Alex.png",
  opts: {
  movie: ["fd1"],
  role: ["all", "vis", "prot"],
  male: true }
},
{ name: "Clear Rivers",
  img: "1_Clear.png",
  opts: {
  movie: ["fd1", "fd2"],
  role: ["all", "deut", "tri"],
  female: true }
},
{ name: "Carter Horton",
  img: "1_Carter.png",
  opts: {
  movie: ["fd1"],
  role: ["all", "tri"],
  male: true }
},
{ name: "Billy Hitchcock",
  img: "1_Billy.png",
  opts: {
  movie: ["fd1"],
  role: ["all"],
  male: true }
},
{ name: "Valerie Lewton",
  img: "1_Val.png",
  opts: {
  movie: ["fd1"],
  role: ["all"],
  female: true }
},
{ name: "Terry Chaney",
  img: "1_Terry.png",
  opts: {
  movie: ["fd1"],
  role: ["all"],
  female: true }
},
{ name: "Tod Wagner",
  img: "1_Tod.png",
  opts: {
  movie: ["fd1"],
  role: ["all"],
  male: true }
},
{ name: "George Wagner",
  img: "1_George.png",
  opts: {
  movie: ["fd1"],
  role: ["all", "premo"],
  male: true }
},
{ name: "Blake Dreyer",
  img: "1_Blake.png",
  opts: {
  movie: ["fd1"],
  role: ["all", "premo"],
  female: true }
},
{ name: "Christa Marsh",
  img: "1_Christa.png",
  opts: {
  movie: ["fd1"],
  role: ["all", "premo"],
  female: true }
},
{ name: "Larry Murnau",
  img: "1_Larry.png",
  opts: {
  movie: ["fd1"],
  role: ["all", "premo"],
  male: true }
},
{ name: "Brian Gibbons",
  img: "2_Brian.png",
  opts: {
  movie: ["fd2"],
  role: ["all"],
  male: true }
},
{ name: "Thomas Burke",
  img: "2_Burke.png",
  opts: {
  movie: ["fd2"],
  role: ["all", "deut"],
  male: true }
},
{ name: "Dano",
  img: "2_Dano.png",
  opts: {
  movie: ["fd2"],
  role: ["all", "premo"],
  male: true }
},
{ name: "Eugene Dix",
  img: "2_Eugene.png",
  opts: {
  movie: ["fd2"],
  role: ["all"],
  male: true }
},
{ name: "Evan Lewis",
  img: "2_Evan.png",
  opts: {
  movie: ["fd2"],
  role: ["all"],
  male: true }
},
{ name: "Frankie",
  img: "2_Frankie.png",
  opts: {
  movie: ["fd2"],
  role: ["all", "premo"],
  male: true }
},
{ name: "Isabella Hudson",
  img: "2_Isabella.png",
  opts: {
  movie: ["fd2"],
  role: ["all", "lives"],
  female: true }
},
{ name: "Kat Jennings",
  img: "2_Kat.png",
  opts: {
  movie: ["fd2"],
  role: ["all"],
  female: true }
},
{ name: "Kimberly Corman",
  img: "2_Kimberly.png",
  opts: {
  movie: ["fd2"],
  role: ["all", "prot"],
  female: true }
},
{ name: "Nora Carpenter",
  img: "2_Nora.png",
  opts: {
  movie: ["fd2"],
  role: ["all"],
  female: true }
},
{ name: "Rory Peters",
  img: "2_Rory.png",
  opts: {
  movie: ["fd2"],
  role: ["all"],
  male: true }
},
{ name: "Shaina",
  img: "2_Shaina.png",
  opts: {
  movie: ["fd2"],
  role: ["all", "premo"],
  female: true }
},
{ name: "Tim Carpenter",
  img: "2_Tim.png",
  opts: {
  movie: ["fd2"],
  role: ["all"],
  male: true }
},
{ name: "Amber Regan",
  img: "3_Amber.png",
  opts: {
  movie: ["fd3"],
  role: ["all", "lives"],
  female: true }
},
{ name: "Ashley Freund",
  img: "3_Ashley.png",
  opts: {
  movie: ["fd3"],
  role: ["all"],
  female: true }
},
{ name: "Ashlyn Halperin",
  img: "3_Ashlyn.png",
  opts: {
  movie: ["fd3"],
  role: ["all"],
  female: true }
},
{ name: "Carrie Dreyer",
  img: "3_Carrie.png",
  opts: {
  movie: ["fd3"],
  role: ["all", "premo"],
  female: true }
},
{ name: "Erin Ulmer",
  img: "3_Erin.png",
  opts: {
  movie: ["fd3"],
  role: ["all"],
  female: true }
},
{ name: "Frankie Cheeks",
  img: "3_Frankie.png",
  opts: {
  movie: ["fd3"],
  role: ["all"],
  male: true }
},
{ name: "Ian McKinley",
  img: "3_Ian.png",
  opts: {
  movie: ["fd3"],
  role: ["all"],
  male: true }
},
{ name: "Jason Wise",
  img: "3_Jason.png",
  opts: {
  movie: ["fd3"],
  role: ["all", "prem"],
  male: true }
},
{ name: "Julie Christensen",
  img: "3_Julie.png",
  opts: {
  movie: ["fd3"],
  role: ["all", "tri"],
  female: true }
},
{ name: "Kevin Fischer",
  img: "3_Kevin.png",
  opts: {
  movie: ["fd3"],
  role: ["all", "deut"],
  male: true }
},
{ name: "Lewis Romero",
  img: "3_Lewis.png",
  opts: {
  movie: ["fd3"],
  role: ["all"],
  male: true }
},
{ name: "Perry Malinowski",
  img: "3_Perry.png",
  opts: {
  movie: ["fd3"],
  role: ["all"],
  male: true }
},
{ name: "Wendy Christensen",
  img: "3_Wendy.png",
  opts: {
  movie: ["fd3"],
  role: ["all", "prot"],
  female: true }
},
{ name: "Andy Kewzer",
  img: "4_Andy.png",
  opts: {
  movie: ["fd4"],
  role: ["all"],
  male: true }
},
{ name: "Carter Daniels",
  img: "4_Carter.png",
  opts: {
  movie: ["fd4"],
  role: ["all"],
  male: true }
},
{ name: "George Lanter",
  img: "4_George.png",
  opts: {
  movie: ["fd4"],
  role: ["all"],
  male: true }
},
{ name: "Hunt Wynorski",
  img: "4_Hunt.png",
  opts: {
  movie: ["fd4"],
  role: ["all"],
  male: true }
},
{ name: "Janet Cunningham",
  img: "4_Janet.png",
  opts: {
  movie: ["fd4"],
  role: ["all", "tri"],
  female: true }
},
{ name: "Jonathan Groves",
  img: "4_Jonathan.png",
  opts: {
  movie: ["fd4"],
  role: ["all"],
  male: true }
},
{ name: "Lori Milligan",
  img: "4_Lori.png",
  opts: {
  movie: ["fd4"],
  role: ["all" ,"deut"],
  female: true }
},
{ name: "Nadia Monroy",
  img: "4_Nadia.png",
  opts: {
  movie: ["fd4"],
  role: ["all", "premo"],
  female: true }
},
{ name: "Nick O'Bannon",
  img: "4_Nick.png",
  opts: {
  movie: ["fd4"],
  role: ["all", "prot"],
  male: true }
},
{ name: "Samantha Lane",
  img: "4_Samantha.png",
  opts: {
  movie: ["fd4"],
  role: ["all"],
  female: true }
},
{ name: "Jim Block",
  img: "5_Block.png",
  opts: {
  movie: ["fd5"],
  role: ["all"],
  male: true }
},
{ name: "Candice Hooper",
  img: "5_Candice.png",
  opts: {
  movie: ["fd5"],
  role: ["all"],
  female: true }
},
{ name: "Dennis Lapman",
  img: "5_Dennis.png",
  opts: {
  movie: ["fd5"],
  role: ["all"],
  male: true }
},
{ name: "Isaac Palmer",
  img: "5_Isaac.png",
  opts: {
  movie: ["fd5"],
  role: ["all"],
  male: true }
},
{ name: "Molly Harper",
  img: "5_Molly.png",
  opts: {
  movie: ["fd5"],
  role: ["all", "deut"],
  female: true }
},
{ name: "Nathan Sears",
  img: "5_Nathan.png",
  opts: {
  movie: ["fd5"],
  role: ["all"],
  male: true }
},
{ name: "Olivia Castle",
  img: "5_Olivia.png",
  opts: {
  movie: ["fd5"],
  role: ["all"],
  female: true }
},
{ name: "Peter Friedkin",
  img: "5_Peter.png",
  opts: {
  movie: ["fd5"],
  role: ["all", "tri"],
  male: true }
},
{ name: "Roy Carson",
  img: "5_Roy.png",
  opts: {
  movie: ["fd5"],
  role: ["all"],
  male: true }
},
{ name: "Sam Lawton",
  img: "5_Sam.png",
  opts: {
  movie: ["fd5"],
  role: ["all", "prot"],
  male: true }
},
{ name: "Alfred Milano",
  img: "6_Alfred.png",
  opts: {
  movie: ["fd6"],
  role: ["all", "premo"],
  male: true }
},
{ name: "Beatrice Fuller",
  img: "6_Beatrice.png",
  opts: {
  movie: ["fd6"],
  role: ["all", "premo"],
  female: true }
},
{ name: "Chester Davis",
  img: "6_Bellboy.png",
  opts: {
  movie: ["fd6"],
  role: ["all", "premo"],
  male: true }
},
{ name: "Bobby Campbell",
  img: "6_Bobby.png",
  opts: {
  movie: ["fd6"],
  role: ["all"],
  male: true }
},
{ name: "Brenda Campbell",
  img: "6_Brenda.png",
  opts: {
  movie: ["fd6"],
  role: ["all", "lives"],
  female: true }
},
{ name: "Charlie Reyes",
  img: "6_Charlie.png",
  opts: {
  movie: ["fd6"],
  role: ["all", "deut"],
  male: true }
},
{ name: "Chuck Snow",
  img: "6_Chuck.png",
  opts: {
  movie: ["fd6"],
  role: ["all", "premo"],
  male: true }
},
{ name: "Daphne Wo",
  img: "6_Daphne.png",
  opts: {
  movie: ["fd6"],
  role: ["all", "premo"],
  female: true }
},
{ name: "Darlene Campbell",
  img: "6_Darlene.png",
  opts: {
  movie: ["fd6"],
  role: ["all", "tri"],
  female: true }
},
{ name: "Erik Campbell",
  img: "6_Erik.png",
  opts: {
  movie: ["fd6"],
  role: ["all"],
  male: true }
},
{ name: "Evie Bludworth",
  img: "6_Evie.png",
  opts: {
  movie: ["fd6"],
  role: ["all", "premo"],
  female: true }
},
{ name: "Howard Campbell",
  img: "6_Howard.png",
  opts: {
  movie: ["fd6"],
  role: ["all"],
  male: true }
},
{ name: "Iris Campbell",
  img: "6_Iris.png",
  opts: {
  movie: ["fd6"],
  role: ["all"],
  female: true }
},
{ name: "Julia Campbell",
  img: "6_Julia.png",
  opts: {
  movie: ["fd6"],
  role: ["all"],
  female: true }
},
{ name: "Benny Gilson",
  img: "6_Martred.png",
  opts: {
  movie: ["fd6"],
  role: ["all", "premo"],
  male: true }
},
{ name: "Marty Reyes",
  img: "6_Marty.png",
  opts: {
  movie: ["fd6"],
  role: ["all", "lives"],
  male: true }
},
{ name: "Paul Campbell",
  img: "6_Paul.png",
  opts: {
  movie: ["fd6"],
  role: ["all", "premo"],
  male: true }
},
{ name: "Stefani Reyes",
  img: "6_Stefani.png",
  opts: {
  movie: ["fd6"],
  role: ["all", "prot"],
  female: true }
},
];
