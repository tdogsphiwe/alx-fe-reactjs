import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    test('renders TodoList with initial todos', () => {
        render(<TodoList />);
        expect(screen.getByText('Watch naruto')).toBeInTheDocument();
        expect(screen.getByText('GO to my granpas funeral')).toBeInTheDocument();
        expect(screen.getByText('FInd a new Gf')).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        render(<TodoList />);
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Todo' } });
        fireEvent.click(screen.getByText('Add Todo'));
        expect(screen.getByText('New Todo')).toBeInTheDocument();
    });

    test('toggles a todo', () => {
        render(<TodoList />);
        const todoItem = screen.getByText('Watch naruto');
        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle('text-decoration: line-through');
        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle('text-decoration: none');
    });

    test('deletes a todo', () => {
        render(<TodoList />);
        fireEvent.click(screen.getByText('Delete', { selector: 'button' }));
        expect(screen.queryByText('Watch naruto')).not.toBeInTheDocument();
    });
});
