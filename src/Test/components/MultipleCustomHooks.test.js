import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../Hooks/useFetch';
import { useCounter } from '../../Hooks/useCounter';
jest.mock('../../Hooks/useFetch');
jest.mock('../../Hooks/useCounter');


describe('Pruebas en <MultipleCustomHooks/>', () => {


    beforeEach( () => {

        useCounter.mockReturnValue({
            counter: 1,
            increment: ()=>{}
        });
        

    });

    test('debe de mostrarse correctamente', () => {
        
            useFetch.mockReturnValue({

                data:null,
                loading: true,
                error: null
            
        });
        
        const wrapper= shallow(<MultipleCustomHooks/>)

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar info ', () => {

        useFetch.mockReturnValue({

            data:[{
                author:' Goku',
                quote: 'Que waaa'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks/>);

        expect( wrapper.find('.alert').exists()).toBe(false);
        expect( wrapper.find('.mb-0').text().trim()).toBe('Que waaa');
        expect( wrapper.find('figcaption').exists()).toBe(true);


        
    });
});