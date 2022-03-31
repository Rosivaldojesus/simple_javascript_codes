function getAdmin(map) {
    let admins = []

    for ([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins
}

const usuarios = new Map ();

usuarios.set('Rosivaldo', 'Admin');
usuarios.set('Ana', 'Admin');
usuarios.set('Joana', 'user');
usuarios.set('Flavia', 'Admin');

console.log(getAdmin(usuarios))