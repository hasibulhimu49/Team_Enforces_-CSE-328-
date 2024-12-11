import { User } from "./user.model";



const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'customer',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  //203001   0001
  return lastStudent?.id ? lastStudent.id : undefined;
};

export const generateCustomerId = async () => {
  // first time 0000
  //0001  => 1  
  let currentId = (0).toString(); // 0000 by default


  const lastStudentId = await findLastStudentId()
 

  if (lastStudentId ) {

    currentId = lastStudentId.substring(2)//00001
  }



  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `${incrementId}`;

  return incrementId;
};

// Faculty ID
// export const findLastFacultyId = async () => {
//   const lastFaculty = await User.findOne(
//     {
//       role: 'faculty',
//     },
//     {
//       id: 1,
//       _id: 0,
//     },
//   )
//     .sort({
//       createdAt: -1,
//     })
//     .lean();

//   return lastFaculty?.id ? lastFaculty.id.substring(2) : undefined;
// };

// export const generateFacultyId = async () => {
//   let currentId = (0).toString();
//   const lastFacultyId = await findLastFacultyId();

//   if (lastFacultyId) {
//     currentId = lastFacultyId.substring(2);
//   }

//   let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

//   incrementId = `F-${incrementId}`;

//   return incrementId;
// };

export const findLastAdminId = async () => {
  const lastAdmin = await User.findOne(
    {
      role: 'admin',
    },
    {
      id: 1,
      _id: 0
    },
  ).sort({
    createdAt:-1,
  }).lean();
  return lastAdmin?.id? lastAdmin?.id.substring(2):undefined;
}

export const generatedAdminId = async()=>{
  let currentID = (0).toString();
  const lastAdminId = await findLastAdminId();
  if(lastAdminId){
    currentID = lastAdminId?.substring(2);
  }
  let incrementId = (Number(currentID)+1).toString().padStart(4,'0')

  incrementId=`A-${incrementId}`;
  return incrementId;
}