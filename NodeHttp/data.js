let id = 1;

function newId() {
   return id++;
}

const guitars = [
{id: newId(), make: 'Fender', model:'Start'},
{id: newId(), make: ' RS',  model: 'Starla'},
{id: newId(), make: 'Gibson', model: 'Les Paul'},
];

export const getGuitars = () => guitars;

export function saveGuitar(guitar){
    guitar.id = newId();
    console.log(guitar);
    guitars.push(guitar);
}

export function deleteGuitar(id) {
    let index = guitars.findIndex(g => g.id ==id);
    guitars.splice(index,1);
}
