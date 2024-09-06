import { Field } from "formik"
import { IFilterField } from "./types";

export const FilterField: React.FC<IFilterField> = ({id, label, ...props}) => {

    return (
        <>
            <label className="[&>div]:has-[:checked]:bg-blue-500 cursor-pointer flex text-sm">
                <Field 
                    className="hidden"
                    id={id}
                    {...props} />
                <div className="h-5 w-5 border rounded-md mr-2"></div>
                {label}
            </label>
            
        </>
    )
}