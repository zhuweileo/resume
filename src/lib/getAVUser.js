/**
 * Created by 维 on 2017/4/13.
 */
import AV from "./leancloud"
export default function(user){
  var {id,attributes:{username}} = user || AV.User.current() || {attributes:{}};
  return {id,username};
}
