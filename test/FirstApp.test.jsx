import { FirstApp } from "../src/FirstApp";
import {render} from '@testing-library/react';

describe('Pruebas en <FirstApp/>', () => { 
    
    test('Debe hacer match con el snapshot', () => { 

        const titulo = 'Hola soy Lukas';
        const {container} = render(<FirstApp titulo= {titulo}/>);

        expect(container).toMatchSnapshop();  
        

     });


 });

