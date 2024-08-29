import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserModal from '../../components/molecules/UserModal/UserModal';
import { describe, it, expect, vi } from 'vitest';
import { User } from '../../types/types';
import "@testing-library/jest-dom/vitest";

const mockUser: User = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: { city: 'New York', street: '123 Main St' },
    company: { name: 'Company A' },
    avatarUrl: 'http://example.com/avatar.jpg',
};

describe('UserModal Component', () => {
    it('renders correctly when open', () => {
        render(<UserModal isOpen={true} handleClose={vi.fn()} selectedUser={mockUser} />);
        
        expect(screen.getByText(/user details/i)).toBeInTheDocument();
        expect(screen.getByText(/john doe/i)).toBeInTheDocument();
        expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
        expect(screen.getByText(/new york/i)).toBeInTheDocument();
        expect(screen.getByText(/123-456-7890/i)).toBeInTheDocument();
        expect(screen.getByText(/company a/i)).toBeInTheDocument();
    });

    it('does not render when selectedUser is null', () => {
        const { container } = render(<UserModal isOpen={true} handleClose={vi.fn()} selectedUser={null} />);
        expect(container).toBeEmptyDOMElement();
    });

});