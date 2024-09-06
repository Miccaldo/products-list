export type FormValues = {
	active: boolean;
	promotion: boolean;
};

export interface IFilterField extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
}
