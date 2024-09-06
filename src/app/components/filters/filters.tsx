'use client'
import { Formik, Form, Field } from "formik"
import { useFilters } from "../../hooks/useFilters"
import { FilterField } from "./filter-field"


export const Filters: React.FC = () => {

    const { initialValues, handleSubmit } = useFilters();

    return (
        <div className="pt-4 md:py-0 pl-4">
            <Formik 
                initialValues={initialValues}
                onSubmit={handleSubmit}>
                {({handleChange, submitForm, values}) => (
                    <Form>
                        <div className="flex gap-x-6" role="group">
                            <FilterField 
                                id="active" 
                                label="Active"
                                type="checkbox" 
                                name="active"
                                value="active"
                                checked={values.active}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    handleChange(e);
                                    submitForm();
                                }} />
                            <FilterField 
                                id="promotion" 
                                label="Promo"
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