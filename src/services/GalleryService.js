import HttpService from "./HttpService";
class GalleryService extends HttpService {
  getAll = async ({ page, filter }) => {
    const { data } = await this.client.get("", {
      params: {
        page,
        filter,
      },
    });
    return data;
  };
}
export default new GalleryService();
