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

// const validate = values => {
//     let errors = {}
//     if(!values.name){
//         errors.name = "Required"
//     }
//     if(!values.email){
//         errors.email = "Required"
//     }
//     if(!values.channel){
//         errors.channel = "Required"
//     }
//     return errors;
// }

const OldYoutubeForm1 = () => {
    const formik = useFormik({
        initialValues,
        onSubmit : onFormSubmit,
        validationSchema
    });
    console.log(formik.getFieldProps('name'),formik.getFieldProps('email'),formik.getFieldProps('channel'))
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' {...formik.getFieldProps('name')} />
                { formik.touched.name && formik.errors.name ? (<div className='error'>{formik.errors.name}</div>) : null}
                {/* {formik.touched.name && } */}
            </div>

            <div className='form-control'>
                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' {...formik.getFieldProps('email')}/>
                { /* {formik.touched.email &&*/formik.touched.email && formik.errors.email ? (<div className='error'>{formik.errors.email}</div>) : null}
            </div>

            <div className='form-control'>
                <label htmlFor='channel'>Channel</label>
                <input type='text' id='channel'  {...formik.getFieldProps('channel')} />
                {/* {formik.touched.channel && */formik.touched.channel && formik.errors.channel ? (<div className='error'>{formik.errors.channel}</div>) : null}
            </div>

            <button type='submit'>Submit</button>
        </form>
    );
}

export default OldYoutubeForm1;