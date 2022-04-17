import HttpService from "./HttpService";
class GalleryService extends HttpService {
  getAll = async () => {
    const { data } = await this.client.get("/");
    return data;
  };
}
export default new GalleryService();
