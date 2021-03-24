import React from 'react';
import { Homepage } from '../../../components/09-useContext/HomePage';
import { shallow,mount } from 'enzyme';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <HomePage/>', () => {

    
    const user = {
        name:'Santiago',
        lastname:'Spencer',
        email:'sspencer@recneps.cl',

    }
    
    // shallow hace renderización solamente del primer componente,
    // para renderizar el componente completo se utiliza mount
    const wrapper = mount(
    <UserContext.Provider value={{
        user
    }}>
    <Homepage/>
    </UserContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        
    });
    
});