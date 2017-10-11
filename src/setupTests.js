import raf from './tmpPolyfills';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// this is due to a bug in enzyme
