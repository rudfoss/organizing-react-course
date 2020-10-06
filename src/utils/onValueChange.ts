export const onValueChange = (onChange: (newValue: string) => void) =>
	(evt: React.ChangeEvent<HTMLInputElement>) => {
	onChange(evt.target.value)
}