import React, { Fragment, useEffect, useState } from 'react'
import { Button, Card, Row, Col, CardHeader, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Input, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import DataTable from 'react-data-table-component'

import BreadCrumbs from '@components/breadcrumbs'
import { ChevronDown, Edit, Plus, MoreVertical, FileText, Archive, Trash } from 'react-feather'
import Avatar from '@components/avatar'

import { useHistory } from 'react-router-dom'
import CardTitle from 'reactstrap/lib/CardTitle'
import CardBody from 'reactstrap/lib/CardBody'
import axios from 'axios'

const UserList = () => {

    const history = useHistory()

    const [data1, setData1] = useState([])
    const [text1, setText1] = useState("")
    const [text2, setText2] = useState("")
    const [text3, setText3] = useState("")
    const [text4, setText4] = useState("")
    const [text5, setText5] = useState("")
    const [mensajeError, setMensajeError] = useState("")


    const [isLoading, setIsLoading] = useState(true)
    const [usuarios, setUsuarios] = useState(1)
    const [modal, setModal] = useState(false)

    const handleModal = () => setModal(!modal)


    const [refreshTable, setRefreshTable] = useState(false)

    useEffect(() => {

        fetch("https://jafemotos.herokuapp.com/person2", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "get"
        }).then((res) => res.json()).then(data => {
            console.log("personas")

            console.log(data)
            const datos = []
            for (let i = 0; i < data.length; i++) {
                    datos.push({ documento: data[i].document, lastName: data[i].lastName, name: data[i].name, secondaryName: data[i].secondaryName })
            }
            console.log("sadasd")
            console.log(data)
            console.log("sadasd")
            console.log(datos)
            setData1(datos)
            setIsLoading(false)

        })
            .catch((error) => {
                console.error(error)
                setData1([])
                setIsLoading(false)
            })

        // fetch(`https://reqres.in/api/users?page=${usuarios}`, {
        //     method: 'GET'
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data.data[0])
        //         setData1(data.data)
        //         setIsLoading(false)
        //     })
        //     .catch((error) => {
        //         console.error(error)
        //         setData1([])
        //         setIsLoading(false)
        //     })
    }, [refreshTable])

    const CrearUnRegistro = async () => {
        

        const body = {
            document: text4.text4,
            name: text1.text1,
            secondaryName: text2.text2,
            lastName: text3.text3
        }

        console.log(body)
        await axios.post("https://jafemotos.herokuapp.com/person2", body)
            .then((res) => {
                console.log(res)
                // setMensajeError("Placa ya en uso.")
                setRefreshTable(!refreshTable)
                setText1("")
                setText2("")
                setText3("")
                setText4("")
                setText5("")
                setMensajeError("")
        
                handleModal()
            
            }).catch((err) => {
                setMensajeError("Cédula ya tomada o input incorrecto.")
            })
    }

    const columns = [
        {
            name: 'Documento',
            selector: 'documento',
            sortable: true,
            minWidth: '250px'
        },
        {
            name: 'Nombre',
            selector: 'name',
            sortable: true,
            minWidth: '150px'
        },
        {
            name: 'Segundo Nombre',
            selector: 'secondaryName',
            sortable: true,
            minWidth: '150px'
        },
        {
            name: 'Apellido',
            selector: 'lastName',
            sortable: true,
            minWidth: '150px'
        }
    ]

    return isLoading ? (
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>) : (

        <Fragment>
            <BreadCrumbs breadCrumbTitle='Admon' breadCrumbParent='Admon' />

            <Card>
                <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                    <CardTitle tag='h4'>Personas Registradas</CardTitle>
                    
                    <div className='d-flex mt-md-0 mt-1'>

                        <Button id = "botonadmon" className='ml-2' color='primary' onClick={handleModal}>
                            <Plus size={15} />
                            <span className='align-middle ml-50'>Nueva Persona</span>
                        </Button>
                    </div>
                </CardHeader>
                <CardBody >


                    <DataTable
                        title=" asdasd"
                        noHeader
                        highlightOnHover
                        striped
                        search
                        style={{ overflow: "visible" }}
                        theme='light'
                        data={data1}
                        columns={columns}
                        className='react-dataTable'
                        sortIcon={<ChevronDown size={10} />}
                    />
                </CardBody>
            </Card>

            <Modal
                isOpen={modal}
                toggle={() => handleModal()}
                className='modal-dialog-centered'
                // modalClassName={item.modalColor}
                key="asdasd"
            >
                <ModalHeader toggle={() => handleModal()}>Crear Nuevo Registro</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for='text'>Primer Nombre:</Label>
                        <Input onChange={e => setText1({ text1: e.target.value })} type='text' id='text' placeholder='Primer Nombre' />
                    </FormGroup>
                    <FormGroup>
                        <Label for='text'>Segundo Nombre:</Label>
                        <Input onChange={e => setText2({ text2: e.target.value })} type='text' id='text1' placeholder='Segundo Nombre' />
                    </FormGroup>
                    <FormGroup>
                        <Label for='text'>Apellido:</Label>
                        <Input onChange={e => setText3({ text3: e.target.value })} type='text' id='text4' placeholder='Apellido' />
                    </FormGroup>
                    <FormGroup>
                        <Label for='text'>Cédula:</Label>
                        <Input onChange={e => setText4({ text4: e.target.value })} type='text' id='text2' placeholder='Cédula' />
                    </FormGroup>
                    {/* <FormGroup>
                        <Label for='text'>Placa:</Label>
                        <Input onChange={e => setText5({ text5: e.target.value })} type='text' id='text3' placeholder='Placa' />
                    </FormGroup> */}

                </ModalBody>
                <ModalFooter>
                    <h6 className="text-danger" id="mensajeError"> {mensajeError} </h6>
                    <Row>
                        <Col>
                            <Button color='primary' onClick={() => handleModal()}>
                                Cancelar
                            </Button></Col>
                        <Col>
                            <Button id = "pruebasss" color='primary' onClick={async () => {
                                CrearUnRegistro()
                            }}>
                                Crear
                            </Button></Col>


                    </Row>

                </ModalFooter>
            </Modal>

            <h1></h1>
        </Fragment>
    )
}
export default UserList
