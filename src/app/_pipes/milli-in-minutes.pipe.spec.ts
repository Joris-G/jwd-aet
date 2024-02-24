import { MilliInMinutesPipe } from './milli-in-minutes.pipe';

describe('MilliInMinutesPipe', () => {
  it('create an instance', () => {
    const pipe = new MilliInMinutesPipe();
    expect(pipe).toBeTruthy();
  });
});
