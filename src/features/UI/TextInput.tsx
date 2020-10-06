import React, { useMemo } from "react"
import { makeGuid } from "utils/guid"
import { onValueChange } from "utils/onValueChange"

interface TextInputProps {
	label: string
	
	value: string
	onChange: (newValue: string) => void

	type?: "text" | "password",
}

export const TextInput = ({label, value, onChange, type = "text"}: TextInputProps): JSX.Element => {
	const id = useMemo(() => makeGuid(), [])

	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<input type={type} value={value} onChange={onValueChange(onChange)}/>
		</div>
	)
}

export default TextInput