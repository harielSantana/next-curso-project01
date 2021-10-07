import { Button } from '.';
const { render } = require('@testing-library/react');

describe('<Button/>', () => {
  it('should render the button with the text', () => {
    render(<Button />);
  });
});
