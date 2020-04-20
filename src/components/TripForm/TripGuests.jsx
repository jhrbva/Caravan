import React from "react";
import { Field } from "formik";
import Input from "../Input/Input";
import { required } from "../../utilities/formValidation";

import GroupAddIcon from "@material-ui/icons/GroupAdd";

const TripGuests = () => (
	<>
		<Field
			icon={<GroupAddIcon />}
			type='text'
			name='guests'
			placeholder='Guest'
			validate={required}
			autoFocus={true}
			component={Input}
		/>
	</>
);

export default TripGuests;
