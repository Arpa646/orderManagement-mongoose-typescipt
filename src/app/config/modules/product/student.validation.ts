import Joi from 'joi'
  // Joi schema for guardian
  const guardianSchema = Joi.object({
    fatherName: Joi.string().required(),
    fatherOccupation: Joi.string().required(),
    fatherContactNo: Joi.string().required(),
    motherName: Joi.string().required(),
    motherOccupation: Joi.string().required(),
    motherContactNo: Joi.string().required(),
  });
  
  // Joi schema for local guardian
  const localGuardianSchema = Joi.object({
    name: Joi.string(),
    occupation: Joi.string(),
    contactNo: Joi.string(),
    address: Joi.string(),
  });
  
  // Joi schema for name
  const nameSchema = Joi.object({
    firstName: Joi.string().required().max(5).trim(),
    middleName: Joi.string(),
    lastName: Joi.string(),
  });
  
  // Joi schema for student
  const studentvalidationSchema = Joi.object({
    id: Joi.string().required(),
    name: nameSchema.required(),
    gender: Joi.string().valid('male', 'female').required(),
    dateOfBirth: Joi.string().required(),
    email: Joi.string().required(),
    contactNumber: Joi.string().required(),
    emergencyContactNo: Joi.string().required(),
    bloodGroup: Joi.string().valid('A+', 'B+'),
    presentAddress: Joi.string(),
    permanetAddress: Joi.string(),
    guardian: guardianSchema.required(),
    localGuardian: localGuardianSchema.required(),
    profileImg: Joi.string(),
    isActive: Joi.string().valid('active', 'inActive').default('active').required(),
  });
export default studentvalidationSchema