import { UserBasic } from './user.basic.model';

export interface ResponseAuthModel {
    message:string,
    error:string,
    success:boolean,
    token:string,
    user:UserBasic
};
