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
        foodType,
        target,
        activity,
        medicalHistory,
        frontPicture,
        backPicture,
        payment,
        acceptTerms
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
        this.foodType = foodType,
        this.target = target, 
        this.activity = activity,
        this.medicalHistory = medicalHistory,
        this.frontPicture = frontPicture,
        this.backPicture = backPicture
        this.payment = payment,
        this.acceptTerms = acceptTerms
    }
}

module.exports = Register;