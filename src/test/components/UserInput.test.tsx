import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserInput from '../../components/molecules/UserInput/UserInput';
import { it, expect, vi, describe } from "vitest";
import { User } from '../../types/types';
import "@testing-library/jest-dom/vitest";

const mockSetNewUser = vi.fn();
const mockMutate = vi.fn();

const mockUser: User = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: { city: 'New York', street: '123 Main St' },
    company: { name: 'Company A' },
};

describe('UserInput Component', () => {
    it('renders with initial user data', () => {
        render(<UserInput newUser={mockUser} setNewUser={mockSetNewUser} mutate={mockMutate} isEdit={true} />);
        
        expect(screen.getByLabelText(/name/i)).toHaveValue('John Doe');
        expect(screen.getByLabelText(/email/i)).toHaveValue('john@example.com');
        expect(screen.getByLabelText(/city/i)).toHaveValue('New York');
        expect(screen.getByLabelText(/phone/i)).toHaveValue('123-456-7890');
        expect(screen.getByLabelText(/company/i)).toHaveValue('Company A');
    });

});