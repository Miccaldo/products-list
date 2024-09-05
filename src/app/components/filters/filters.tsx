'use client'
import { Formik, Form, Field } from "formik"
import { useFilters } from "../hooks/useFilters"


export const Filters: React.FC = () => {

    const { initialValues, handleSubmit } = useFilters();

    return (
        <div>
            <Formik 
                initialValues={initialValues}
                onSubmit={handleSubmit}>
                {({handleChange, submitForm, values}) => (
                    <Form>
                        <div role="group">
                            <label htmlFor="active">Active</label>
                            <Field 
                                id="active" 
                                type="checkbox" 
                                name="active"
                                value="active"
                                checked={values.active}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    handleChange(e);
                                    submitForm();
                                }} />
                            <label htmlFor="promotion">promotion</label>
                            <Field 
                                id="promotion" 
                                type="checkbox" 
                                name="promotion" 
                                value="promotion" 
                                checked={values.promotion}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    handleChange(e);
                                    submitForm();
                                }} />
                        </div>     
                    </Form>
                )}
            </Formik>
        </div>
    )
}