import express from 'express';
import { AdminControllers } from './Admin.controller';
// import ValidationArmy from '../../middlewares/validateRequest';
// import { CreateCustomerValidationSchema } from '../Ucustomer/ucustomer.validation'
// import { customerValidation } from '../User/user.validation';



const router = express.Router();


router.get('/', AdminControllers.getAllAdmins);

router.get('/:id',
    //ValidationArmy(customerValidation.userValidationSchema),
    AdminControllers.getSingleAdmin);

// router.patch(
//     '/:id',
//     //ValidationArmy(updateStudentValidationSchema),
//     CustomerControllers.updateCustomer,
//   )
  
router.delete('/:id', AdminControllers.deleteAdmin);

export const AdminRoutes = router;
