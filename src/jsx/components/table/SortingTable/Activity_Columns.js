export const COLUMNS = [
	{
		Header: 'ITEM',
		Footer: 'ITEM',
		accessor: 'item'
	},
	{
		Header: 'TOKEN',
		Footer: 'TOKEN',
		accessor: 'token'
	},
	{
		Header: 'TYPE',
		Footer: 'TYPE',
		accessor: 'type'
	},
	{
		Header: 'PRICE',
		Footer: 'PRICE',
		accessor: 'price'
	},
	{
		Header: 'PROFIT',
		Footer: 'PROFIT',
		accessor: 'profit'
	},
	{
		Header: 'SELLER',
		Footer: 'SELLER',
		accessor: 'seller'
	},
	{
		Header: 'BUYER',
		Footer: 'BUYER',
		accessor: 'buyer'
	},
	{
		Header: 'DATE',
		Footer: 'DATE',
		accessor: 'date'
	}
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