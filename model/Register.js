/* eslint-disable no-unused-expressions */
class Register {
    constructor(
        id, 
        firstName, 
        lastName, 
        email, 
        age, 
        weight, 
        height,
        trainingDays,
        trainingPlace,
        tools,
        target,
        activity,
        medicalHistory,
        frontPicture,
        backPicture,
        payment
        ) {
        this.id = id,
        this.firstName = firstName,
        this.lastName = lastName,
        this.email = email,
        this.age = age,
        this.weight = weight,
        this.height = height,
        this.trainingDays = trainingDays,
        this.trainingPlace = trainingPlace,
        this.tools = tools,
        this.target = target, 
        this.activity = activity,
        this.medicalHistory = medicalHistory,
        this.frontPicture = frontPicture,
        this.backPicture = backPicture
        this.payment = payment
    }
}

module.exports = Register;