/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */

import React, {useEffect, useState} from 'react';
import {DataGrid, type GridColDef, type GridRowsProp, type GridEventListener} from '@mui/x-data-grid';
import api from '../../api';
import {Button, Container, Paper, Stack, TextField, colors} from '@mui/material';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DesktopDatePicker} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, {type Dayjs} from 'dayjs';

function Main() {
	const [records, setRecords] = useState<IntData[]>([]);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [adress, setAdress] = useState('');
	const [birthDate, setBirthDate] = useState< Date | undefined>();
	const [selectedRow, setSelectedRow] = useState<IntData>();
	const [isDisabled, setIsDisabled] = useState(true);
	const [emptyName, setEmpytName] = useState(false);
	const [emptyEmail, setEmpytEmail] = useState(false);
	const [emptyAdress, setEmpytAdress] = useState(false);
	const [emptyBirthDate, setEmpytBirthDate] = useState(false);

	const [value, setValue] = useState<Dayjs | undefined >(
		dayjs(),
	);

	type IntData = {
		id?: number;
		name: string;
		email: string;
		adress: string;
		birthDate: Date | undefined;
	};

	const data = async () => {
		const data = await api.get<IntData[]>('/records');
		if (!data || data === null) {
			return [];
		}

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

	const handleRowClick: GridEventListener<'rowClick'> = params => {
		setSelectedRow(params.row);
		if (selectedRow === undefined) {
			setIsDisabled(true);
		} else {
			setIsDisabled(false);
		}
	};

	const handleChange = (newValue: Dayjs | undefined) => {
		setValue(newValue);
		const res = value?.toDate();
		setBirthDate(res);
	};

	const create = async () => {
		const newData: IntData = {
			name,
			email,
			adress,
			birthDate,
		};
		if (name.length === 0) {
			return setEmpytName(true);
		}

		if (email.length === 0) {
			return setEmpytEmail(true);
		}

		if (adress.length === 0) {
			return setEmpytAdress(true);
		}

		if (!birthDate) {
			return setEmpytBirthDate(true);
		}

		const response = await api.post('/records', newData);

		await data();
		return response;
	};

	const update = async () => {
		const dataUpdate: IntData = {
			name,
			email,
			adress,
			birthDate,
		};
		if (selectedRow === undefined) {
			console.log(selectedRow);
			return setIsDisabled(true);
		}

		if (name.length === 0) {
			return setEmpytName(true);
		}

		if (email.length === 0) {
			return setEmpytEmail(true);
		}

		if (adress.length === 0) {
			return setEmpytAdress(true);
		}

		if (!birthDate) {
			return setEmpytBirthDate(true);
		}

		const response = await api.put(`/records/${selectedRow?.id}`, dataUpdate);
		await data();
		return response;
	};

	const deleteRow = async () => {
		if (selectedRow === undefined) {
			console.log(selectedRow);
			return setIsDisabled(true);
		}

		const response = await api.delete(`/records/${selectedRow?.id}`);

		await data();
		return response;
	};

	return (
		<Container maxWidth='xl' style={{display: 'flex', justifyContent: 'center', height: '100vh', flexDirection: 'column', alignItems: 'center'}}>
			<Paper elevation={3}>

				<div style={{color: '#1976d2', textAlign: 'center'}}>
					<h1 style={{fontSize: 40}}>CADASTRO DE PACIENTES</h1>
				</div>
				<div style={{marginTop: 40}}>
					<TextField
						error={emptyName}
						id='outlined-name'
						label='Name'
						value={name}
						onChange={e => {
							if (name) {
								setEmpytName(false);
							}

							setName(e.target.value);
						}}
					/>
					<TextField
						error={emptyEmail}
						id='outlined-name'
						label='Email'
						value={email}
						onChange={e => {
							if (email) {
								setEmpytEmail(false);
							}

							setEmail(e.target.value);
						}}
					/>
					<TextField
						error={emptyAdress}
						id='outlined-name'
						label='Endereço'
						value={adress}
						onChange={e => {
							if (adress) {
								setEmpytAdress(false);
							}

							setAdress(e.target.value);
						}}
					/>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DesktopDatePicker
							label='Date desktop'
							inputFormat='DD/MM/YYYY'
							value={value}
							onChange={e => {
							// eslint-disable-next-line no-negated-condition
								if (!e) {
									setBirthDate(undefined);
								} else {
									handleChange(e);
								}
							}}
							renderInput={params => <TextField {...params} />}
						/>
					</LocalizationProvider>
				</div>
				<div style={{height: 350, width: 975, marginTop: 30}}>
					<DataGrid rows={rows} columns={columns} onRowClick={handleRowClick} />
					<Stack direction='row' justifyContent='center' alignItems='center' spacing={2} marginTop={5}>
						<Button variant='contained' size='large' onClick={create}> Cadastrar </Button>
						<Button variant='contained' disabled={isDisabled} size='large' onClick={update}> Editar </Button>
						<Button variant='contained' disabled={isDisabled} size='large' onClick={deleteRow}type='submit' > Deletar </Button >
					</Stack>
				</div>
			</Paper>
		</Container>

	);
}

export default Main;
