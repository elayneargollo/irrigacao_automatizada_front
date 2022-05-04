import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@material-ui/icons/Add';
import { useNavigate } from 'react-router-dom';
import { cadastrarSolenoide } from '../../routes/paths';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Tooltip from '@material-ui/core/Tooltip';
import HeaderSider from '../../components/HeaderSider/index';
import Footer from '../../components/Footer/index';
import './sytle.css';
import Logo from "../../assets/img/folha.png";
import Titulo from "../../components/Titulo/index";
import { getSolenoides } from '../../services/api/solenoide';
import { useDispatch } from 'react-redux';

const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "tag", headerName: "Tag", width: 250, editable: false },
    { field: "status", headerName: "Status", type: 'boolean', width: 250, editable: false },
    { field: "dtLeitura", headerName: "Data", width: 250, editable: false },
    { field: "quantidadeVia", headerName: "Vias", width: 250, editable: false },
    { field: "corpo", headerName: "Material", width: 250, editable: false },
    { field: "voltagem", headerName: "Tensão", width: 250, editable: false }
];

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: '80%',
        marginTop: 25,
        backgroundImage: 'linear-gradient(#99C2B9,#FFFEFF,#FFFEFF, #FFFEFF, #FFFEFF)'
    },
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
    fundo:
    {
        background: '#f7f6f4',
        height: '100vh',
    },
    titulo:
    {
        marginLeft: "220px",
        marginRight: "auto",
        marginTop: 100,
        display: 'flex'
    }
}));

export default function Solenoide() {
    const classes = useStyles();
    const navigate = useNavigate();
    const [solenoides, setSolenoides] = useState({});

    const handleChangeAdd = () => navigate(cadastrarSolenoide);
    const dispatch = useDispatch();

    useEffect(() => {
        async function getItems() {
            const data = await getSolenoides();
            setSolenoides(data?.data?.solenoides);
            console.log(data?.data?.solenoides)
        }
        getItems();
    }, [dispatch]);

    const montarDados = () => {
        if (solenoides.length > 0) {
            return solenoides?.map(solenoide => {
                return {
                    id: solenoide?.solenoideId,
                    tag: solenoide?.tag,
                    status: solenoide?.status === "ABERTO" ? true : false,
                    dtLeitura: solenoide?.dataLeitura,
                    quantidadeVia: solenoide?.quantidadeVias,
                    corpo: solenoide?.corpo,
                    voltagem: solenoide?.voltagem + 'V',
                }
            });
        }
    }

    return (
        <div className={classes.fundo}>
            <Titulo titulo="Solenóide" imagem={Logo} />

            <HeaderSider />
            <Card className={classes.root} variant="outlined" style={{ height: 650, width: '100%' }} >
                <CardActions>
                    <Tooltip title="Adicionar uma nova solenóide ao sistema" arrow>
                        <Button style={{ fontWeight: 'bold', fontSize: "20px" }}
                            variant="outlined"
                            onClick={handleChangeAdd}
                            startIcon={<AddIcon />}
                            color='primary'
                        >
                            Cadastrar Solenóide
                        </Button>
                    </Tooltip>
                </CardActions>

                <div style={{ height: 450, marginLeft: "10px", marginRight: "10px", paddingTop: "50px" }}>
                    <DataGrid
                        columns={columns}
                        rows={montarDados()}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                    />
                </div>
            </Card>
            <Footer />
        </div>
    );
}
