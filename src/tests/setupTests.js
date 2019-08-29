import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEvn from 'dotenv';

Enzyme.configure({
    adapter: new Adapter()
});

DotEvn.config({ path: '.env.test'});
