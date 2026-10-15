import { deleteCookie } from "cookies-next/client";

export function clearAuthSession() {
  deleteCookie("token");
  localStorage.removeItem("token");
}
