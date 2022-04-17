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
}
export default new AuthService();
