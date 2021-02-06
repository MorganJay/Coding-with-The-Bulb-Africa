const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
const getHighestSkills = () => {
  let maxSkills = 0;
  Object.entries(users).forEach(user => {
    let a = user[1].skills.length;
    //console.log(a)
    //let currentSkillsLength = user[1].skills.length;
    if (a > maxSkills) {
      maxSkills = a;
    }
  });
  console.log(maxSkills, 'Highest');
};

const userEntries = Object.entries(users);
let maxSkills = 0;
for (const [name, props] of userEntries) {
  let currentSkillsLength = props.skills.length;
  maxSkills = currentSkillsLength > maxSkills ? currentSkillsLength : maxSkills;
}
const highestUser = userEntries.filter(
  user => user[1].skills.length === maxSkills
);
// TODO: Access userEntries with destructured name variable
//console.log(`${highestUser[0][0]} has the highest skills.`); //* first try

let skills = 0;
let highlySkilledUser = '';
let onlineUsers = 0;
let eliteUsers = 0;
for (const user in users) {
  let userProps = users[user];
  let skillsLength = userProps.skills.length;
  skills = skillsLength > skills ? skillsLength : skills;
  highlySkilledUser =
    userProps.skills.length === skills ? user : highlySkilledUser;
  onlineUsers += userProps.isLoggedIn ? 1 : 0;
  eliteUsers += userProps.points >= 50 ? 1 : 0;
}

console.log(
  `${highlySkilledUser} has the highest skills with a massive ${skills} skills 😳.`
);
console.log(
  `There are ${onlineUsers} users online and ${eliteUsers} users with at least 50 points.`
);

// const userValues = Object.values(users);
// const logCount = userValues.reduce(
//   (acc, user) => (acc += user.isLoggedIn ? 1 : 0),
//   0
// );
// console.log(logCount);

// const bestUsers = userValues.reduce(
//   (acc, user) => (acc += user.points >= 50 ? 1 : 0),
//   0
// );

// console.log(bestUsers);

//   if (user.isLoggedIn) acc++;
//   return acc;
