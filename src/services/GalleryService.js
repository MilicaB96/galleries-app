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
  getUserGalleries = async ({ page, filter, id }) => {
    const { data } = await this.client.get(`authors/${id}`, {
      params: {
        page,
        filter,
      },
    });
    return data;
  };
  getGallery = async (id) => {
    const { data } = await this.client.get(`/galleries/${id}`);
    return data;
  };
  createGallery = async (gallery) => {
    const { data } = await this.client.post("/galleries", gallery);
    return data;
  };
  editGallery = async ({ id, gallery }) => {
    const { data } = await this.client.put(`/galleries/${id}`, gallery);
    return data;
  };
  deleteGallery = async (id) => {
    const { data } = await this.client.delete(`galleries/${id}`);
    return data;
  };
}
export default new GalleryService();
