import HttpService from "./HttpService";
class AuthService extends HttpService {
  login = async (credentials) => {
    const { data } = await this.client.post("/login", credentials);
    localStorage.setItem("token", data.token);
    localStorage.setItem("user_id", data.user.id);
    return data;
  };
  register = async (user) => {
    const { data } = await this.client.post("/register", user);
    localStorage.setItem("token", data.token);
    localStorage.setItem("user_id", data.user.id);

    return data;
  };
  logout = async () => {
    await this.client.post("/logout");
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
  };
}
export default new AuthService();
