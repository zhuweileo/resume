/**
 * Created by 维 on 2017/4/13.
 */
const map = {
  202:"用户名被占用",
  217:"无效的用户名",
  201:"用户名和密码不匹配",
  211:"找不到该用户",
  unknown:"请求失败，稍后重试"
};
export default function({code}){
  return map[code] || map.unknown;
}
