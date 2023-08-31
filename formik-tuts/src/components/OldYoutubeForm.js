import {useFormik} from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name : '',
    email : '',
    channel : ''
}

const onFormSubmit = values => {
    console.log(values)
}

const validationSchema = Yup.object({
    name : Yup.string().required("Required"),
    email : Yup.string().email('Invalid Email').required('required'),
    channel : Yup.string().required("Required")
});

const OldYoutubeForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit : onFormSubmit,
        validationSchema
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                { formik.touched.name && formik.errors.name ? (<div className='error'>{formik.errors.name}</div>) : null}
                {/* {formik.touched.name && } */}
            </div>

            <div className='form-control'>
                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                { /* {formik.touched.email &&*/formik.touched.email && formik.errors.email ? (<div className='error'>{formik.errors.email}</div>) : null}
            </div>

            <div className='form-control'>
                <label htmlFor='channel'>Channel</label>
                <input type='text' id='channel' name='channel' value={formik.values.channel} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {/* {formik.touched.channel && */formik.touched.channel && formik.errors.channel ? (<div className='error'>{formik.errors.channel}</div>) : null}
            </div>

            <button type='submit'>Submit</button>
        </form>
    );
}

export default OldYoutubeForm;