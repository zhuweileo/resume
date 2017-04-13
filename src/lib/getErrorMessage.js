/**
 * Created by 维 on 2017/4/13.
 */
const map = {
  202:"用户名被占用",
  217:"无效的用户名",
  unknown:"注册失败，稍后重试"
};
export default function({code}){
  return map[code] || map.unknown;
}
