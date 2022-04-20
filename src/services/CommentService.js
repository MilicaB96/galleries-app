import HttpService from "./HttpService";
class CommentService extends HttpService {
  createComment = async ({ id, content }) => {
    const { data } = await this.client.post(`/comments/${id}`, { content });
    return data;
  };
  deleteComment = async (id) => {
    const { data } = await this.client.post(`/comments/delete/${id}`);
    return data;
  };
}
export default new CommentService();
