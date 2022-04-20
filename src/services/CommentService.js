import HttpService from "./HttpService";
class CommentService extends HttpService {
  createComment = async ({ id, content }) => {
    console.log(id, content);
    const { data } = await this.client.post(`/comments/${id}`, { content });
    return data;
  };
}
export default new CommentService();
