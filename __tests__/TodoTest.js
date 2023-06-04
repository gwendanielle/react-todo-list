import { render, fireEvent, screen } from '@testing-library/react-native';
import ToDo from "../src/screens/ToDo/index.js";

describe('when ToDo screen was loaded', () => {
    it('jogging and running is on the list', () => {
        render(<ToDo />);
        expect(screen.queryByText('Jogging')).toBeTruthy();
        expect(screen.queryByText('Running')).toBeTruthy();
    });
});
describe('when a to do item was added', () => {
    it('add another item on the list', () => {
        const {getByPlaceholderText, getByText, getAllByText} = render(<ToDo />);
        fireEvent.changeText(
            getByPlaceholderText('Add todo'),
            'Playing',
        );
        fireEvent.press(getByText('Add'));
        const playing = getAllByText('Playing');
        expect(screen.queryByText('Playing')).toBeTruthy();
        expect(playing).toHaveLength(1);
    });
});
describe('when a to do item was deleted', () => {
    it('the item should not be found', () => {
        const {getAllByText} = render(<ToDo />);
        fireEvent.press(getAllByText('Delete')[0]);
        expect(screen.queryByText('Jogging')).toBeNull();
        expect(screen.queryByText('Jogging')).toBeFalsy();
    });
});