
//creating interfaces for student

interface Variant {
    type: string;
    value: string;
}

interface Inventory {
    quantity: number;
    inStock: boolean;
}

export interface Product {
  
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: Variant[];
    inventory: Inventory;
    isDeleted: boolean;
}






// export type gurdian={
//     fatherName:string;
//     fatherOccupation:string;
//     fatherContactNo:string;

//     motheName:string;
//     motherOccupation:string;
//     motherContactNo:string;
    
// }

// export type Localgurdian={name:string;
//     occupatin:string;
//     contactNo:string;
//     address:string;

// }
// export type UserName={
//     firstName:string;
//     middleName:string;
//     lastName:string
// }
// export type Student={
//     id:String,
//     name:UserName,
//     gender:"male"|"female";
//     dateOfBirth:string;
//     email:string;
//     contactNumber:string;
//     emergencyContactNo:string;
//     bloodGroup?:"A+"|"B+",
//     presentAddress:string;
//     permanetAddress:string;
//     guardian: gurdian;
//     localGuardian:Localgurdian;
//     profileImg?:string;
//     isActive:"active"|"inActive"
// }