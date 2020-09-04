import { renderHook, cleanup } from '@testing-library/react-hooks';
import useSystemVoices from '../dist/useSystemVoices';
import SpeechSynthesisMock from './mocks/SpeechSynthesis.mock';

describe('useSystemVoices', () => {
  const originalSpeechSynth = window.speechSynthesis;

  before(() => {
    window.speechSynthesis = SpeechSynthesisMock;
  });

  beforeEach(cleanup);

  after(() => {
    window.speechSynthesis = originalSpeechSynth;
  });

  it('should be a function', () => {
    expect(useSystemVoices).to.be.a('function');
  });

  it('should return the list of all available system voices', () => {
    const { result } = renderHook(() => useSystemVoices());

    expect(result.current).to.be.an('array');
  });
});
