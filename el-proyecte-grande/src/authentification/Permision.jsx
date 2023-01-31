import Cookies from "js-cookie"

function RoleAcces(role){
    return Cookies.get("role") == role
}
export default RoleAcces