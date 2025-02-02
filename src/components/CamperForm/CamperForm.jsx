import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./CamperForm.module.css";
import * as Yup from "yup";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  date: Yup.date().required("Date is required"),
  comment: Yup.string(),
});

const initialValues = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

const handleSubmit = (values, actions) => {
  toast.success("Sent successfully");

  actions.resetForm();
};

const CamperForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.formWrapper}>
        <h3 className={s.formTitle}> Book your campervan now </h3>
        <p className={s.formText}>
          Stay connected! We are always ready to help you.
        </p>
        <div className={s.fieldContainer}>
          <div className={s.formGroup}>
            <Field
              name="name"
              className={s.formInput}
              type="text"
              placeholder="Name*"
            />
            <ErrorMessage
              name="name"
              component="span"
              className={s.formError}
            />
          </div>

          <div className={s.formGroup}>
            <Field
              name="email"
              className={s.formInput}
              type="email"
              placeholder="Email*"
            />
            <ErrorMessage
              name="email"
              component="span"
              className={s.formError}
            />
          </div>

          <div className={s.formGroup}>
            <Field name="date">
              {({ field, form }) => (
                <DatePicker
                  {...field}
                  className={s.formInput}
                  selected={field.value ? new Date(field.value) : null}
                  onChange={(date) => form.setFieldValue("date", date)}
                  placeholderText="Booking date*"
                  minDate={new Date()}
                  shouldCloseOnSelect={true}
                />
              )}
            </Field>
            <ErrorMessage
              name="date"
              component="span"
              className={s.formError}
            />
          </div>

          <div className={s.formGroup}>
            <Field
              name="comment"
              className={`${s.formInput} ${s.formComment}`}
              placeholder="Comment"
              as="textarea"
            />
            <ErrorMessage
              name="comment"
              component="span"
              className={s.formError}
            />
          </div>
        </div>

        <button type="submit" className={s.submitButton}>
          Send
        </button>
      </Form>
    </Formik>
  );
};

export default CamperForm;
