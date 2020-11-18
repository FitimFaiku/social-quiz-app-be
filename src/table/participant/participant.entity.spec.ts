import { Participant } from "./participant.entity";


describe('ParticipantEntity', () => {
  it('should be defined', () => {
    expect(new Participant()).toBeDefined();
  });
});
