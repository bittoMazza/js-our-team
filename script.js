const team = [
    {
        name : "Wayne Barnett",
        role : "Founder & CEO",
        imageUrl : "./img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name : "Angela Caroll",
        role : "Chief Editor",
        imageUrl : "./img/angela-caroll-chief-editor.jpg"
    },
    {
        name : "Walter Gordon",
        role : "Office Manager",
        imageUrl : "./img/walter-gordon-office-manager.jpg"
    },
    {
        name : "Angela Lopez",
        role : "Social Media Manager",
        imageUrl : "./img/angela-lopez-social-media-manager.jpg"
    },
    {
        name : "Scott Estrada",
        role : "Developer",
        imageUrl : "./img/scott-estrada-developer.jpg"
    },
    {
        name : "Barbara Ramos",
        role : "Graphic Designer",
        imageUrl : "./img/barbara-ramos-graphic-designer.jpg"
    }

]
const selectImg = document.getElementById('image-new-member');
const nameNewMember = document.getElementById('name-new-member')
const roleNewMember = document.getElementById('role-new-member')
const newMemberBtn = document.getElementById('btn-new-member')
const containerCards = document.getElementById('container-cards') 


newMemberBtn,addEventListener('click',function(){
    console.log(selectImg.value);
})


for(let i = 0; i < team.length ; i++){
    console.log
    (` 
    ${team[i].name}  
    ${team[i].role}  
    ${team[i].imageUrl}
    `)
    const newCard = document.createElement('div');
    newCard.classList.add('ms_card');
    newCard.innerHTML = 
    ` 
      <img class="card-img-top" src="${team[i].imageUrl}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title py-2">${team[i].name}</h5>
        <h6 class="card-text">${team[i].role}.</h6>
      </div>
    `
    containerCards.append(newCard);

}