import { Player } from './player.entity';

describe('PlayerEntity', () => {
  it('should be defined', () => {
    expect(new Player()).toBeDefined();
  });
});
