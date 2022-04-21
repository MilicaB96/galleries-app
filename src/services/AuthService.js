import HttpService from "./HttpService";
class AuthService extends HttpService {
  login = async (credentials) => {
    const { data } = await this.client.post("/login", credentials);
    localStorage.setItem("token", data.token);
    return data;
  };
  register = async (user) => {
    const { data } = await this.client.post("/register", user);
    localStorage.setItem("token", data.token);
    return data;
  };
  logout = async () => {
    await this.client.post("/logout");
    localStorage.removeItem("token");
  };
  getMyProfile = async () => {
    const { data } = await this.client.get("/my-profile");
    return data;
  };
}
export default new AuthService();
