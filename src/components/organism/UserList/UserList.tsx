import React, { useState } from 'react';
import { useUserContext } from '../../../hooks/UserContext/useUserContext';
import { User } from '../../../types/types';
import { Grid, Divider, Typography, List, ListItem, IconButton, ListItemAvatar, Avatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import UserModal from '../../molecules/UserModal/UserModal';
import Swal from 'sweetalert2';
import UserInput from '../../molecules/UserInput/UserInput';

const UserList: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedUser, setSelectedUserState] = useState<User | null>(null);
    const [editingUserId, setEditingUserId] = useState<number | null>(null);
    const [newUser, setNewUser] = useState<{
        name: string;
        email: string;
        phone: string;
        address: { street: string; };
        company: { name: string; };
    }>({
        name: '',
        email: '',
        phone: '',
        address: { street: '' },
        company: { name: '' },
    });

    const { users, setUsers, images } = useUserContext();

    const handleUserClick = (user: User, index: number) => {
        // Set the selected user and include the avatar URL
        setSelectedUserState({ ...user, avatarUrl: images[index].download_url });
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedUserState(null);
    };

    const handleAddOrUpdateUser = () => {
        if (editingUserId !== null) {
            setUsers((prevUsers) =>
                prevUsers.map((user) =>
                    user.id === editingUserId ? { ...user, ...newUser } : user
                )
            );
            setEditingUserId(null);
            Swal.fire({
                title: 'Success!',
                text: 'User Has Been Updated',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } else {
            const newId = users.length ? Math.max(users.map(user=> user.id)) + 1 : 1;
            setUsers((prevUsers) => [
                ...prevUsers,
                { ...newUser, id: newId }
            ]);
            Swal.fire({
                title: 'Success!',
                text: 'User Has Been Added',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        }
        setNewUser({ name: '', email: '', phone: '', address: { street: '' }, company: { name: '' } });
    };

    const handleEditUser = (user: User) => {
        setNewUser(user);
        setEditingUserId(user.id);
    };

    const handleDeleteUser = (userId: number) => {
        setUsers((prevUsers) => {
            const updatedUsers = prevUsers.filter(user => user.id !== userId);
            return updatedUsers; // Ensure the updated list is returned
        });
    
        Swal.fire({
            title: 'Success!',
            text: 'User Has Been Deleted',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    if (!users || !images) {
        return <div>Loading users...</div>;
    }

    return (
        <>
   
            <Grid sx={{ width: '100%' }} item xs={12} md={6}>
            <Typography fontWeight={700} sx={{ mb: 2, mt: 2}} variant="h4" component="div">
                        List Of Users
                    </Typography>
                <div style={{ maxHeight: '440px', overflowY: 'auto', backgroundColor: '#000', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '30vw',
  minWidth: '330px',
  maxWidth:' 500px'}}>
                   
                    <List>
                        {users.map((user, index) => (
                            <ListItem key={user.id} secondaryAction={
                                <>
                                    <IconButton onClick={() => handleEditUser(user)} edge="end" aria-label="edit">
                                        <EditIcon sx={{ color: 'wheat', mr: '10px' }} />
                                    </IconButton>
                                    <IconButton onClick={() => handleDeleteUser(user.id)} edge="end" aria-label="delete">
                                        <DeleteIcon sx={{ color: 'wheat' }} />
                                    </IconButton>
                                </>
                            }>
                                <ListItemAvatar>
                                    <Avatar
                                        alt={`Avatar for ${user.name}`}
                                        src={images[index]?.download_url}
                                        sx={{ width: 45, height: 45, mr:'10px' }}
                                    />
                                </ListItemAvatar>
                                <Typography title={user.name} sx={{ cursor: 'pointer' }} onClick={() => handleUserClick(user, index)}>
                                    {user.name}
                                </Typography>
                                <Divider/>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Grid>

            <UserModal
                isOpen={isModalOpen}
                handleClose={handleCloseModal}
                selectedUser={selectedUser}
            />
            <UserInput newUser={newUser} setNewUser={setNewUser} mutate={handleAddOrUpdateUser} isEdit={editingUserId} />
        </>
    );
};

export default UserList;