import { useContext } from "react";
import { Formik, Form, ErrorMessage, FormikProps, Field } from "formik";
import * as Yup from "yup";
import { User, FormData } from "../../../types/Users";
import { ProfileContext, ProfileContextType } from "../../../pages/Profile";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "./EditProfile.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormField from "../../FormField/FormField";

type EditProfileType = {
  submitEditProfile: (user: FormData) => void;
};

export default function EditProfile({
  submitEditProfile
}: EditProfileType) {
  const profileCtx = useContext(ProfileContext);
  const { editUser, showEditModal, setShowEditModal } = profileCtx as ProfileContextType;

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    address: Yup.string().required("Address is required"),
    website: Yup.string().required("Website is required"),
    company: Yup.string().required("Company is required"),
  });

  return (
    <>
      <Formik
        initialValues={{
          name: editUser?.name,
          email: editUser?.email,
          phone: editUser?.phone,
          address: editUser?.address?.city,
          website: editUser?.website,
          company: editUser?.company?.name,
        }}
        onSubmit={(values) => {
          submitEditProfile(values);
        }}
        validationSchema={validationSchema}
      >
        {(props: FormikProps<FormData>) => (
          <Dialog
            open={!!showEditModal}
            onClose={() => setShowEditModal && setShowEditModal(false)}
            sx={{
              "& .MuiPaper-root": {
                width: "100%",
              },
              "& div.MuiDialogContent-root": {
                paddingTop: "1.5rem",
              },
            }}
          >
            <DialogTitle>
              <Typography>
                Edit Profile
              </Typography>
            </DialogTitle>
            <DialogContent>
              <Form className="flex flex-col gap-6">
                <FormField
                  label="Name"
                  inputId="name"
                  type="text"
                  onChange={props.handleChange}
                  value={props.values.name}
                  onBlur={props.handleBlur}
                />
                <ErrorMessage name="name" component="span" className="text-red-500 text-sm"/>
                <FormField
                  label="Email"
                  inputId="email"
                  type="text"
                  onChange={props.handleChange}
                  value={props.values.email}
                  onBlur={props.handleBlur}
                />
                <ErrorMessage name="email" component="span" className="text-red-500 text-sm"/>
                <FormField
                  label="Phone"
                  inputId="phone"
                  type="text"
                  onChange={props.handleChange}
                  value={props.values.phone}
                  onBlur={props.handleBlur}
                />
                <ErrorMessage name="phone" component="span" className="text-red-500 text-sm"/>
                <FormField
                  label="Address"
                  inputId="address"
                  type="text"
                  onChange={props.handleChange}
                  value={props.values.address}
                  onBlur={props.handleBlur}
                />
                <ErrorMessage name="address" component="span" className="text-red-500 text-sm"/>
                <FormField
                  label="Website"
                  inputId="website"
                  type="text"
                  onChange={props.handleChange}
                  value={props.values.website}
                  onBlur={props.handleBlur}
                />
                <ErrorMessage name="website" component="span" className="text-red-500 text-sm"/>
                <FormField
                  label="Company"
                  inputId="company"
                  type="text"
                  onChange={props.handleChange}
                  value={props.values.company}
                  onBlur={props.handleBlur}
                />
                <ErrorMessage name="company" component="span" className="text-red-500 text-sm"/>
              </Form>
            </DialogContent>
            <DialogActions>
              <Button type="submit">Submit</Button>
              <Button type="reset" onClick={props.handleReset}>
                Reset
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Formik>
    </>
  );
}
