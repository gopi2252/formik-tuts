import {ErrorMessage, Field, Form, Formik, useFormik} from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name : '',
    email : '',
    channel : '',
    comment : '',
    address : '',
}

const onFormSubmit = values => {
    console.log(values)
}

const validationSchema = Yup.object({
    name : Yup.string().required("Required"),
    email : Yup.string().email('Invalid Email').required('required'),
    channel : Yup.string().required("Required")
});

const YoutubeForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit : onFormSubmit,
        validationSchema
    });
    console.log(formik.getFieldProps('name'),formik.getFieldProps('email'),formik.getFieldProps('channel'),formik.getFieldProps('comment'))
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onFormSubmit} >
            <Form>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field type='text' id='name' name='name' />
                    <ErrorMessage name='name'/>
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <Field type='email' id='email' name='email' />
                    <ErrorMessage name='email'/>
                </div>
                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <Field type='text' id='channel' name='channel' />
                    <ErrorMessage name='channel'/>
                </div>
                <div className='form-control'>
                    <label htmlFor='comment'>Comment</label>
                    <Field as={'textarea'} id='comment' name='comment' />
                    <ErrorMessage name='Comment'/>
                </div>
                <div className='form-control'>
                    <label htmlFor='address'>Address</label>
                    <Field name='address'>
                        {(props) => {
                            const {field, form,meta} = props;
                            console.log(field);
                            return (<div>
                                <input {...field} type='text'/>
                            </div>)
                        }}
                    </Field>
                    <ErrorMessage name='Comment'/>
                </div>


                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    );
}

export default YoutubeForm;