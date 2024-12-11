import express from 'express';
import { userControllers } from './user.controller';
//import ValidationArmy from '../../middlewares/validateRequest';

const router = express.Router()



router.post('/create-customer',
    // auth(USER_ROLE.admin),
    //  ValidationArmy(userValidationSchema),
    userControllers.createCustomer);


router.post('/create-admin',
    //ValidationArmy(createAdminValidationSchema),
    userControllers.CreateAdmin)


export const UserRoutes = router;
