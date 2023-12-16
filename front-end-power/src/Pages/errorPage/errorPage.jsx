import React from 'react';
// import { Button, Box } from '@mui/material';
// import Nav from '../../components/Nav.jsx';
// import img from '../../404.png';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
	const navigate = useNavigate();
	return (
    <>
      <h1>Ups! Ha ocurrido un error inesperado.</h1>
      <h4>No eres tú, somos nosotros (probablemente)...</h4>
    </>
  );
}
