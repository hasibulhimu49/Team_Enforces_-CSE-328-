import express from 'express';
import { CustomerControllers } from './ucustomer.controller';
// import ValidationArmy from '../../middlewares/validateRequest';
// import { CreateCustomerValidationSchema } from '../Ucustomer/ucustomer.validation'
// import { customerValidation } from '../User/user.validation';



const router = express.Router();


router.get('/', CustomerControllers.getAllCustomer);

router.get('/:id',
    //ValidationArmy(customerValidation.userValidationSchema),
     CustomerControllers.getSingleCustomer);

// router.patch(
//     '/:id',
//     //ValidationArmy(updateStudentValidationSchema),
//     CustomerControllers.updateCustomer,
//   )
  
router.delete('/:id', CustomerControllers.deleteCustomer);

export const CustomerRoutes = router;
