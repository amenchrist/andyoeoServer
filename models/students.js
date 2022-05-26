const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema ({
    id: String,
    title: String,
    firstName: String,
    lastName: String,
    gender: String,
    nationality: String,
    residentialStatus: String,
    email: String,
    phone: String,
    dualNationality: String,
    countryOfBirth: String,
    ethnicOrigin: String,
    highestQualificationOnEntry: String,
    highestQualification: String,
    lastInstitutionAttended: String,
    currentUKInstitution: String,
    uniqueLearnerNumber: String,
    nameOfQualification: String,
    yearAchieved: String,
    subject: String,
    grade: String,
    passportNo: String,
    passportPlaceOfIssue: String,
    timeInPublicCare: String,
    disabilityOrSpecialNeeds: String,
    personalStatement: String,
    documentIds: [String],
    permHouseNumberOrName: String,
    permStreet: String,
    permCityOrTown: String,
    permCountyStateOrProvince: String,
    permCountry: String,
    permPostCode: String,
    curHouseNumberOrName: String,
    curStreet: String,
    curCityOrTown: String,
    curCountyStateOrProvince: String,
    curCountry: String,
    curPostCode: String,
    nokName: String,
    nokRelation: String,
    nokPhone: String,
    nokEmail: String
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;