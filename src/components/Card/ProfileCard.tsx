import { useState } from "react";
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

import { User } from "../../types/Users";

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
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="flex justify-center bg-gray-100">
        <CardMedia
          component="img"
          sx={{ width: "50%" }}
          image={`https://api.dicebear.com/8.x/avataaars/svg?seed=${username}`}
          alt="avatar"
        />
      </div>
      <CardContent>
        <Typography gutterBottom component="div">
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "left" }}
        >
          {email}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "left" }}
        >
          {phone}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "left" }}
        >
          {address.city}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "left" }}
        >
          {website}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "left" }}
        >
          {company.name}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-center items-center grow-1 bg-gray-100">
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
