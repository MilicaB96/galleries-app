import HttpService from "./HttpService";
class AuthService extends HttpService {
  login = async (credentials) => {
    const { data } = await this.client.post("/login", credentials);
    localStorage.setItem("token", data.token);
  };
  register = async (user) => {
    const { data } = await this.client.post("/register", user);
    localStorage.setItem("token", data.token);
  };
  logout = async () => {
    await this.client.post("/logout");
    localStorage.removeItem("token");
  };
}
export default new AuthService();
