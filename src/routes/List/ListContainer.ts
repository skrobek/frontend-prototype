import * as request from 'superagent';
import { Response } from 'superagent';
import { Container } from 'unstated';

const API_HOST = 'https://jsonplaceholder.typicode.com';

interface IPost {
  id: number,
  userId: number,
  title: string,
  body: string
};

interface IListState {
  posts: IPost[],
  isLoading: boolean
};


class ListContainer extends Container<IListState> {
  public state = {
    isLoading: false,
    posts: []
  };

  public fetchPosts = async (): Promise<void> => {
    await this.setState({ posts: [], isLoading: true });
    const response: Response = await request.get(`${API_HOST}/posts`);
    const posts: IPost[] =  response.body;
    await this.setState({ posts, isLoading: false });
  };
}

export default ListContainer;