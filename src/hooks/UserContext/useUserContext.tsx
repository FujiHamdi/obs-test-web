import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { fetchUsers, fetchImages } from '../../services/userService';
import { User, Image } from '../../types/types';
import { Typography } from '@mui/material';

interface UserContextType {
    users: User[];
    images: Image[];
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
    selectedUser: User | null;
    setSelectedUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [images, setImage] = useState<Image[]>([]);

    useEffect(() => {
        const loadUsers = async () => {
            const fetchedUsers = await fetchUsers();
            setUsers(fetchedUsers);
        };
        loadUsers();

        const loadImages = async () => {
            const fetchedImages = await fetchImages();
            setImage(fetchedImages);
        };
        loadImages();
    }, []);

    return (

        <UserContext.Provider value={{ images, users, setUsers, selectedUser, setSelectedUser }}>
           <Typography sx={{ mb: 4 }} variant="h4" component="div">
                        OBS Test
                    </Typography>
           <div style={{ display:'flex'}}>
           
            {children}
            </div>
        </UserContext.Provider>
    );
};

export const useUserContext = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};