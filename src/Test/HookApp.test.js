import React from 'react';
import { HookApp } from '../HookApp';
import { shallow } from 'enzyme';



describe('Test en Componente principal HookApp', () => {

    test('Debe enviar el componente dentro del snap', () => {
        
        const wrapper =shallow(<HookApp/>)

        expect(wrapper).toMatchSnapshot();
    });
   
});


