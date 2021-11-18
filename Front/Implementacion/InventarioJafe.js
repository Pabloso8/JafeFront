// ** React Imports
import React, { Fragment, useState, useEffect } from 'react'

import BreadCrumbs from '@components/breadcrumbs'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import { FormattedMessage } from 'react-intl'
import DataTable from 'react-data-table-component'
import { Card, CardHeader, CardTitle, CardFooter, CardText, Input, Label, Row, Col } from 'reactstrap'

const DataTableWithButtons = () => {
    // ** State
    const [currentPage, setCurrentPage] = useState(0)
    const [searchValue, setSearchValue] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    const multiLingColumns = [
        {
            name: 'Producto',
            selector: 'Producto',
            sortable: true,
            minWidth: '250px',
            cell: row => {
                return (
                    <div key={row.Id} id={row.Id}> {row.Producto} </div>
                )


            }
        },
        {
            name: 'Precio',
            selector: 'Precio',
            sortable: true,
            minWidth: '250px'
        },
        {
            name: 'Cantidad',
            selector: 'Cantidad',
            sortable: true,
            minWidth: '250px'
        }
    ]

    useEffect(async () => {

        // const response = await axios.get('https://inventorywebservices.herokuapp.com/webService/inventarioDisp.json?user=a')
        // console.log(response)
        await fetch("https://inventorywebservices.herokuapp.com/webService/inventarioDisp.json?user=045c3b0ad714ff7167fb38fe4ff7b1fb13cba8893df962d4caeb04ebfeded7f5")
            .then(response => response.json())
            .then(data => {
                console.log(data.Products)
                setData(data.Products)
                setIsLoading(false)

            })
            .catch((error) => {
                console.log("aasdasd")

                console.error(error)
                setData([])
                setIsLoading(false)
            })

    }, [])


    // ** Function to handle pagination
    const handlePagination = page => {
        setCurrentPage(page.selected)
    }

    // ** Function to handle filter
    const handleFilter = e => {
        const value = e.target.value
        let updatedData = []
        setSearchValue(value)

        console.log("asdasd")
        console.log(data.length)
        if (value.length) {
            updatedData = data.filter(item => {
                console.log("asdasd")

                console.log(item)
                const startsWith =
                    item.Cantidad.toString().toLowerCase().startsWith(value.toLowerCase()) ||
                    item.Producto.toString().toLowerCase().startsWith(value.toLowerCase()) ||
                    item.Precio.toString().toLowerCase().startsWith(value.toLowerCase())

                const includes =
                    item.Cantidad.toString().toLowerCase().includes(value.toLowerCase()) ||
                    item.Producto.toString().toLowerCase().includes(value.toLowerCase()) ||
                    item.Precio.toString().toLowerCase().includes(value.toLowerCase())

                if (startsWith) {
                    return startsWith
                } else if (!startsWith && includes) {
                    return includes
                } else return null
            })
            setFilteredData(updatedData)
            setSearchValue(value)
        }
    }

    // ** Pagination Previous Component
    const Previous = () => {
        return (
            <Fragment>
                <span className='align-middle d-none d-md-inline-block'>
                    <FormattedMessage id='Prev' />
                </span>
            </Fragment>
        )
    }

    // ** Pagination Next Component
    const Next = () => {
        return (
            <Fragment>
                <span className='align-middle d-none d-md-inline-block'>
                    <FormattedMessage id='Next' />
                </span>
            </Fragment>
        )
    }

    // ** Custom Pagination Component
    const CustomPagination = () => (
        <ReactPaginate
            previousLabel={<Previous size={15} />}
            nextLabel={<Next size={15} />}
            forcePage={currentPage}
            onPageChange={page => handlePagination(page)}
            pageCount={searchValue.length ? filteredData.length / 7 : data.length / 7 || 1}
            breakLabel={'...'}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            activeClassName={'active'}
            pageClassName={'page-item'}
            nextLinkClassName={'page-link'}
            nextClassName={'page-item next'}
            previousClassName={'page-item prev'}
            previousLinkClassName={'page-link'}
            pageLinkClassName={'page-link'}
            breakClassName='page-item'
            breakLinkClassName='page-link'
            containerClassName={'pagination react-paginate pagination-sm justify-content-end pr-1 mt-1'}
        />
    )

    return isLoading ? (
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>) : (<div>
            <BreadCrumbs breadCrumbTitle='Admon' breadCrumbParent='Admon' />

            <Card>
                <CardHeader className='border-bottom'>
                    <CardTitle tag='h4'>Inventario Registrado</CardTitle>
                </CardHeader>
                <Row className='justify-content-end mx-0'>
                    <Col className='d-flex align-items-center justify-content-end mt-1' md='6' sm='12'>
                        <Label className='mr-1' for='search-input-1'>
                            <FormattedMessage id='Search' />
                        </Label>
                        <Input
                            className='dataTable-filter mb-50'
                            type='text'
                            bsSize='sm'
                            id='search-input-1'
                            value={searchValue}
                            onChange={handleFilter}
                        />
                    </Col>
                </Row>
                <DataTable
                    noHeader
                    pagination
                    selectableRowsNoSelectAll
                    columns={multiLingColumns}
                    className='react-dataTable'
                    paginationPerPage={7}
                    sortIcon={<ChevronDown size={10} />}
                    paginationDefaultPage={currentPage + 1}
                    paginationComponent={CustomPagination}
                    data={searchValue.length ? filteredData : data}
                />
            </Card>
        </div>
    )
}

export default DataTableWithButtons
