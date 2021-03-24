import { shallow } from "enzyme";
import { ExampleRef } from "../../components/04-useReef/ExampleRef";

describe('Prueba en example ref', () => {
    

    const wrapper = shallow(<ExampleRef/>);

test('Debe mostrar correctamente', () => {

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    
});



    test(' debe mostrar el componente <mulipleCustomHooks', () => {

        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

        
    });
});