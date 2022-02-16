export const COLUMNS = [
	{
		Header: 'COLLECTION',
		Footer: 'COLLECTION',
		accessor: 'collection'
	},
	{
		Header: 'FLOOR',
		Footer: 'FLOOR',
		accessor: 'floor'
	},
	{
		Header: 'VALUE',
		Footer: 'VALUE',
		accessor: 'value'
	},
	{
		Header: 'FLOOR 7 DAYS',
		Footer: 'FLOOR 7 DAYS',
		accessor: 'flooring'
	},
	{
		Header: '',
		Footer: '',
		accessor: 'sorting'
	},
	// {
	// 	Header: '',
	// 	Footer: '',
	// 	accessor: ''
	// }
]

export const GROUPED_COLUMNS = [
	{
		Header: 'Id',
		Footer: 'Id',
		accessor: 'id'
	},
	{
		Header: 'Name',
		Footer: 'Name',
		columns: [
			{
				Header: 'First Name',
				Footer: 'First Name',
				accessor: 'first_name'
			},
			{
				Header: 'Last Name',
				Footer: 'Last Name',
				accessor: 'last_name'
			},
		]
	},
	{
		Header: 'Info',
		Footer: 'Info',
		columns: [
			{
				Header: 'Date of  Birth',
				Footer: 'Date of  Birth',
				accessor: 'date_of_birth'
			},
			{
				Header: 'Country',
				Footer: 'Country',
				accessor: 'country',
			},
			{
				Header: 'Phone',
				Footer: 'Phone',
				accessor: 'phone'
			},
		]
	},
]