import { Post } from "./post.entity";


describe('PostEntity', () => {
  it('should be defined', () => {
    expect(new Post()).toBeDefined();
  });
});
