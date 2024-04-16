import { useState } from "react";
import { User } from "../../types/Users";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./ProfileCard.css";

type CardProps = {
  user: User;
  handleProfileEdit: (user: User) => void;
  handleDeleteProfile: (user: User) => void;
};

export default function ProfileCard({
  user,
  handleProfileEdit,
  handleDeleteProfile,
}: CardProps) {
  const { username, name, email, phone, address, website, company } = user;
  const [like, setLike] = useState(false);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <div className="w-full h-24">
        <CardMedia
          image={`https://api.dicebear.com/8.x/pixel-art/svg?seed=${username}`}
          title="avatar"
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span className="profile-entry">
            <p>{email}</p>
          </span>
          <span className="profile-entry">
            <p>{phone}</p>
          </span>
          <span className="profile-entry">
            <p>{address.city}</p>
          </span>
          <span className="profile-entry">
            <p>{website}</p>
          </span>
          <span className="profile-entry">
            <p>{company.name}</p>
          </span>
        </Typography>
      </CardContent>
      <CardActions className="flex justify-center items-center">
        <Button className="like-btn" onClick={() => setLike(!like)}>
          {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Button>
        <Button className="edit-btn" onClick={() => handleProfileEdit(user)}>
          <EditIcon />
        </Button>
        <Button
          className="delete-btn"
          onClick={() => handleDeleteProfile(user)}
        >
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
