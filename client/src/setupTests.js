import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const {defaults} = require('jest-config');

Enzyme.configure({ adapter: new Adapter() });