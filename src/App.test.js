import { render, screen } from '@testing-library/react'; 
import App from './App'; 
import Testimonial from './components/testimonials/testimonials'

test('renders learn main component', () => {   
render(<App />);   
const linkElement = screen.getByText(/Educative/i);   
expect(linkElement).toBeInTheDocument()
});


test('test the testimonial components', () => {
render(<Testimonial />);
const testme = screen.getByText(/UX Engineer/i);
expect(testme).toBeInTheDocument();

});
