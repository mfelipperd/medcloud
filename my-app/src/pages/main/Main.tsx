
import React, {useEffect, useState} from 'react';
import {DataGrid, type GridColDef, type GridRowsProp} from '@mui/x-data-grid';
import api from '../../api';
import {Button, TextField} from '@mui/material';

import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';

import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';

function Main() {
	const [records, setRecords] = useState<IntData[]>([]);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [adress, setAdress] = useState('');
	const [birthDate, setBirthDate] = useState('');

	type IntData = {
		id?: number;
		name: string;
		email: string;
		adress: string;
		birthDate: string;
	};

	const data = async () => {
		const data = await api.get<IntData[]>('/records');
		if (!data || data === null) {
			return [];
		}

		console.log(data.data);
		setRecords(data.data);
	};

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		data();
	}, []);
	const rows: GridRowsProp<IntData> = records;

	const columns: GridColDef[] = [
		{field: 'name', headerName: 'Nome', width: 150},
		{field: 'email', headerName: 'Email', width: 250},
		{field: 'adress', headerName: 'Endereço', width: 300},
		{field: 'birthDate', headerName: 'Data de Nascimento', width: 100},
	];

	return (
		<div>
			<div>
				<TextField
					id='outlined-name'
					label='Name'
					value={name}
					onChange={e => {
						setName(e.target.value);
					}}
					helperText='Porfavor digite seu nome'
				/>
				<TextField
					id='outlined-name'
					label='Email'
					value={email}
					onChange={e => {
						setEmail(e.target.value);
					}}
					helperText='Porfavor digite seu email'
				/>
				<TextField
					id='outlined-name'
					label='Endereço'
					value={adress}
					onChange={e => {
						setAdress(e.target.value);
					}}
					helperText='Porfavor digite seu endereço'
				/>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DesktopDatePicker
						label='Data de Nascimento'
						inputFormat='DD/MM/YYYY'
						value={birthDate}
						onChange={e => {
							// eslint-disable-next-line @typescript-eslint/no-unused-expressions
							e ? setBirthDate(e) : setBirthDate('');
						}}
						renderInput={params => <TextField {...params} />}
					/>
				</LocalizationProvider>
				<Button size='large'> Cadastrar </Button>
			</div>
			<DataGrid rows={rows} columns={columns} loading={true} />
		</div>
	);
}

export default Main;
