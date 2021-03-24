import React from 'react';
import { mount } from 'enzyme';
import { LoginPage } from '../../../components/09-useContext/LoginPage';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas en <LoginPage/>', () => {

    const setUser = jest.fn();


    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginPage />
        </UserContext.Provider>

    );

    test('Debe de mostrar correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test(' debe de ejecutar el setUser con el argumento esperado', () => {

        wrapper.find('button').prop('onClick')();

        expect(setUser).toHaveBeenCalledWith({
            id:123,
            name: 'Santiago',
            lastname: 'Spencer',
            email: 'sspencer@recneps.cl'
        });

    });



});