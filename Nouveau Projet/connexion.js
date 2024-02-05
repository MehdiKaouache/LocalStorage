function ajouter() {
    var utilisateur = document.getElementById("user").value;
    var mdp = document.getElementById("psw").value;

    localStorage.setItem('utilisateur', utilisateur);
    localStorage.setItem('mdp', mdp);

    console.log(`Utilisateur:  ${utilisateur}`)
    console.log(`Mot de Passe:  ${mdp}`)

}