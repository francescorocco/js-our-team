

const memberContainerDom = document.getElementById('member-container');

let teamMembers = [
    {
        nome : 'Wayne Barnett',
        ruolo : 'Founder & CEO',
        foto : 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome : 'Angela Caroll',
        ruolo : 'Chief Editor',
        foto : 'angela-caroll-chief-editor.jpg',
    },
    {
        nome : 'Walter Gordon',
        ruolo : 'Office Manager',
        foto : 'walter-gordon-office-manager.jpg',
    },
    {
        nome : 'Angela Lopez',
        ruolo : 'Social Media Manager',
        foto : 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome : 'Scott Estrada',
        ruolo : 'Developer',
        foto : 'scott-estrada-developer.jpg',
    },
    {
        nome : 'Barbara Ramos',
        ruolo : 'Graphic Designer',
        foto : 'barbara-ramos-graphic-designer.jpg',
    }
];

for (let i = 0; i < teamMembers.length; i++) {
    const  currentMember = teamMembers[i];

    memberContainerDom.innerHTML += (`<div>Nome:${currentMember['nome']}</div>`);
    memberContainerDom.innerHTML += (`<div>Ruolo: ${currentMember['ruolo']}</div>`);
    memberContainerDom.innerHTML += (`<div>Foto: ${currentMember['foto']}</div>`);


    for (let key in currentMember) {
        console.log(key + ': ' + currentMember[key]);
    }
}
