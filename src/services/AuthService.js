import HttpService from "./HttpService";
class AuthService extends HttpService {
  login = async (credentials) => {
    const { data } = await this.client.post("/login", credentials);
    localStorage.setItem("token", data.token);
  };
}
export default new AuthService();
