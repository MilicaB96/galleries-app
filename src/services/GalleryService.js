import HttpService from "./HttpService";
class GalleryService extends HttpService {
  getAll = async ({ page, filter }) => {
    const { data } = await this.client.get("/galleries", {
      params: {
        page,
        filter,
      },
    });
    return data;
  };
  getMyGalleries = async ({ page, filter }) => {
    const { data } = await this.client.get("/my-galleries", {
      params: {
        page,
        filter,
      },
    });
    return data;
  };
}
export default new GalleryService();
