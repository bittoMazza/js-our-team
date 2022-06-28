const team = [
    {
        name : "Wayne Barnett",
        role : "Founder & CEO",
        imageUrl : "wayne-barnett-founder-ceo.jpg"
    },
    {
        name : "Angela Caroll",
        role : "Chief Editor",
        imageUrl : "angela-caroll-chief-editor.jpg"
    },
    {
        name : "Walter Gordon",
        role : "Office Manager",
        imageUrl : "walter-gordon-office-manager.jpg"
    },
    {
        name : "Angela Lopez",
        role : "Social Media Manager",
        imageUrl : "angela-lopez-social-media-manager.jpg"
    },
    {
        name : "Scott Estrada",
        role : "Developer",
        imageUrl : "scott-estrada-developer.jpg"
    },
    {
        name : "Barbara Ramos",
        role : "Graphic Designer",
        imageUrl : "barbara-ramos-graphic-designer.jpg"
    }

]


for(let i = 0; i < team.length ; i++){
    console.log
    (` 
    ${team[i].name}  
    ${team[i].role}  
    ${team[i].imageUrl}
    `)
}