const resume = {
  name: "John Doe",
  age: 30,
  education: [
    {
      degree: "Bachelor's in Computer Science",
      university: "Example University",
      year: 2015,
    },
    {
      degree: "Master's in Web Development",
      university: "Tech Institute",
      year: 2017,
    },
  ],
  experience: [
    {
      position: "Software Developer",
      company: "Tech Solutions",
      year: "2017-2020",
    },
    {
      position: "Senior Developer",
      company: "Innovative Tech",
      year: "2020-present",
    },
  ],
};

// iterate this json data's in for loop
for (let i = 0; i < resume.education.length; i++) {
  console.log(resume.education[i].degree);
}
// for in
for (let key in resume) {
  if (Array.isArray(resume[key])) {
    for (let i = 0; i < resume[key].length; i++) {
      console.log(resume[key][i].position);
    }
  }
}
// for of
for (let section of Object.values(resume)){
    if (Array.isArray(section)){
        for(let entry of section){
            console.log(entry.year)
        }
    }
}
// for each
Object.values(resume).forEach((section)=>{
    if (Array.isArray(section)){
        section.forEach((entry)=>{
            console.log(entry.company)
        })
    }
})
