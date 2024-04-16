import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import "./ConfirmModal.css";
import { useContext } from "react";
import { ProfileContext, ProfileContextType } from "../../../pages/Profile";
import { User } from "../../../types/Users";

export default function ConfirmModal({
  deleteProfile,
}: {
  deleteProfile: (user: User) => void;
}) {
  const profileCtx = useContext(ProfileContext);
  const { editUser, setShowDeleteModal, showDeleteModal } = profileCtx as ProfileContextType;
  return (
    <Dialog
      open={showDeleteModal}
      onClose={() => setShowDeleteModal(false)}
    >
      <DialogTitle>
        Confirm Delete Profile
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
        Are you sure you want to delete this profile?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => deleteProfile(editUser as User)}>Yes</Button>
        <Button onClick={() => setShowDeleteModal(false)}>No</Button>
      </DialogActions>
    </Dialog>
  );
}
