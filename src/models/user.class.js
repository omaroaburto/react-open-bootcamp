import { ROLES } from "./role.enum";

export class User {
    userName = "";
    email = "";  
    password = "";  
    role = ROLES.USER;
}