import { expect } from "chai";
import {shallow, mount} from 'enzyme'
import App from './App.tsx'

describe('first test', ()=>{
    let wrapper = shallow(<App/>)
    beforeEach(()=>{

    })
    const valid = true
    it('check statement',()=>{
        // eslint-disable-next-line jest/valid-expect
        expect(wrapper.find('div')).to.have.lengthof(1)
    })
})