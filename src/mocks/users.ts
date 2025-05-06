export const users = [
	{
		id: 'user_ab12cd34ef',
		name: 'Juan Pérez',
		email: 'juan.perez@gmailf.com',
		role: 'Administrador',
		status: 'Activo',
		orders: [
			{
				numberOrder: 'abc123',
				items: [
					{ item: 'Arroz', quantity: 2 },
					{ item: 'Cobijas', quantity: 1 },
				],
			},
		],
	},
	{
		id: 'user_f93kd84md2',
		name: 'María García',
		email: 'maria.garcia@gmail.com',
		role: 'Voluntario',
		status: 'Inactivo',
		orders: [],
	},
	{
		id: 'user_ue38sn19qp',
		name: 'Carlos López',
		email: 'carlos.lopez@gmail.com',
		role: 'Coordinador',
		status: 'Activo',
		orders: [
			{
				numberOrder: 'iahudsfbjnk',
				items: [
					{ item: 'Juguetes', quantity: 5 },
					{ item: 'Juguetes', quantity: 5 },
				],
			},
		],
	},
	{
		id: 'user_kd73md92lw',
		name: 'Ana Torres',
		email: 'ana.torres@gmail.com',
		role: 'Supervisor',
		status: 'Activo',
		orders: [],
	},
];