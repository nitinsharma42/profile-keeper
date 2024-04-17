import { useCallback, useState, createContext } from "react";
import { UserResponse } from "../types/Users";
import { User, FormData } from "../types/Users";
import ProfileCard from "../components/Card/ProfileCard";
import EditProfile from "../components/modals/EditProfile/EditProfile";
import ConfirmModal from "../components/modals/ConfirmModal/ConfirmModal";
import { Grid } from "@mui/material";

export type ProfileContextType = {
  users: UserResponse | [];
  showEditModal: boolean;
  showDeleteModal: boolean;
  setUsers: React.Dispatch<React.SetStateAction<UserResponse | []>>;
  setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  editUser: User;
};

export default function Profile({ data }: { data: UserResponse | [] }) {
  const [users, setUsers] = useState<UserResponse | []>(data);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editUser, setEditUser] = useState<User>({} as User);
  const handleProfileEdit = (user: User) => {
    setEditUser(user);
    setShowEditModal(true);
  };

  const handleDeleteProfile = (user: User) => {
    setEditUser(user);
    setShowDeleteModal(true);
  };

  const renderUsersCard = useCallback(() => {
    return users?.map((user: User) => {
      return (
        <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
          <ProfileCard
            user={user}
            handleProfileEdit={handleProfileEdit}
            handleDeleteProfile={handleDeleteProfile}
          />
        </Grid>
      );
    });
  }, [users]);

  const submitEditProfile = (values: FormData) => {
    const updatedUsers = users?.map((user: User) => {
      if (user.id === editUser.id) {
        user.name = values.name;
        user.email = values.email;
        user.phone = values.phone;
        user.address.city = values.address;
        user.website = values.website;
        user.company.name = values.company;
      }
      return user;
    });
    setUsers([...updatedUsers]);
    setEditUser({} as User);
    setShowEditModal(false);
  };

  const deleteProfile = (user: User) => {
    const updatedUsers = users?.filter((u: User) => u.id !== user.id);
    setUsers([...updatedUsers]);
    setShowDeleteModal(false);
  };

  return (
    <ProfileContext.Provider
      value={{
        users,
        showEditModal,
        showDeleteModal,
        setUsers,
        setShowEditModal,
        setShowDeleteModal,
        editUser,
      }}
    >
      <Grid container spacing={2}>
        {renderUsersCard()}
      </Grid>
      {showDeleteModal && <ConfirmModal deleteProfile={deleteProfile} />}
      {showEditModal && <EditProfile submitEditProfile={submitEditProfile} />}
    </ProfileContext.Provider>
  );
}

export const ProfileContext = createContext<ProfileContextType>(
  {} as ProfileContextType
);
