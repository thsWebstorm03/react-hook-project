import { renderHook, cleanup } from '@testing-library/react-hooks';
import useSpeechSynthesis from '../dist/useSpeechSynthesis';
import SpeechSynthesisUtteranceMock from './mocks/SpeechSynthesisUtterance.mock';
import SpeechSynthesisMock from './mocks/SpeechSynthesis.mock';

describe('useSpeechSynthesis', () => {
  const originalSpeechSynth = global.speechSynthesis;
  const originalSpeechSynthesisUtterance = global.SpeechSynthesisUtterance;

  before(() => {
    global.speechSynthesis = SpeechSynthesisMock;
    global.SpeechSynthesisUtterance = SpeechSynthesisUtteranceMock;
  });

  beforeEach(cleanup);

  after(() => {
    global.SpeechSynthesisUtterance = originalSpeechSynthesisUtterance;
    global.speechSynthesis = originalSpeechSynth;
  });

  it('should be a function', () => {
    expect(useSpeechSynthesis).to.be.a('function');
  });

  it('should return an object containing the speak function and the utter', () => {
    const { result } = renderHook(() => useSpeechSynthesis('text', { volume: 1, pitch: 1, rate: 1 }));

    expect(result.current).to.be.an('object');
    expect(result.current.speak).to.be.a('function');
    expect(result.current.speechSynthUtterance).to.be.an('object');
  });
});
