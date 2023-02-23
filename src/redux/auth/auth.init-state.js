import {STATUS} from "../../contents/status.contents";

export const authtInitState = {
  auth:null,
  profile:null,
  logout:null,  
  status: STATUS.idle,
  isLoggedIn:false,
};