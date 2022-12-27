class Student {
    constructor(vardas, gimimoMetai) {
        this.name = vardas;
        this.birthYear = gimimoMetai;
        this.isMaried = false;
        this.shoes = 50;
        this.marks = [];
    }
}
// module.exports = Student;
export default Student;