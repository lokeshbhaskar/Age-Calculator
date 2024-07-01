function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    const birthDate = new Date(birthdate);
    console.log(birthdate);
    const today = new Date();
    console.log(today);

    let age = today.getFullYear() - birthDate.getFullYear();
    console.log(age);
    const monthDifference = today.getMonth() - birthDate.getMonth();
    console.log(monthDifference)

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById('result').innerHTML = `You are ${age} years old.`;
}