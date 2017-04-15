/**
 * Created by 维 on 2017/4/13.
 */
import AV from "./leancloud"
export default function(user){
  let {id,attributes:{username}} = user || AV.User.current() || {attributes:{}};
  return {
    //id是用户的唯一标识，username是用户的登录账户名
    id:id || "",
    username:username || ""
  };
}
