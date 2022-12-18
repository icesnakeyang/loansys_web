import {
    Anchor,
    Button,
    Card,
    Carousel,
    Checkbox,
    Col,
    Divider,
    Form,
    Grid,
    Input,
    message,
    Row,
    Select,
    Table,
    Tag
} from "antd";
import {useTranslation} from "react-i18next";
import {DollarCircleFilled, InteractionFilled, WalletFilled} from "@ant-design/icons";
import {ColumnsType} from "antd/es/table";
import {useState} from "react";
import {apiApplyLoan} from "../api/Api";
import {useNavigate} from "react-router-dom";

// import fss from '../resources/KL-skyline.jpeg'

interface DATA1 {
    key: number
    total: number
    month6: number
    month12: number
    month24: number
    month36: number
    month48: number
    month60: number

}

const {useBreakpoint} = Grid

const Home = () => {
    const {t} = useTranslation()

    const screens = useBreakpoint()

    const theData: DATA1[] = [
        {
            key: 1,
            total: 1000,
            month6: 217,
            month12: 133,
            month24: 92,
            month36: 78,
            month48: 71,
            month60: 67
        },
        {
            key: 2,
            total: 2000,
            month6: 433,
            month12: 267,
            month24: 183,
            month36: 156,
            month48: 142,
            month60: 133
        },
        {
            key: 3,
            total: 3000,
            month6: 650,
            month12: 400,
            month24: 275,
            month36: 233,
            month48: 213,
            month60: 200
        },
        {
            key: 4,
            total: 4000,
            month6: 866,
            month12: 393.33,
            month24: 366,
            month36: 312,
            month48: 284,
            month60: 267
        },
        {
            key: 5,
            total: 5000,
            month6: 1083,
            month12: 667,
            month24: 458,
            month36: 389,
            month48: 354,
            month60: 333
        },
        {
            key: 6,
            total: 10000,
            month6: 2167,
            month12: 1333,
            month24: 917,
            month36: 778,
            month48: 708,
            month60: 667
        },
        {
            key: 7,
            total: 20000,
            month6: 4333,
            month12: 2667,
            month24: 1833,
            month36: 1556,
            month48: 1417,
            month60: 1333
        },
        {
            key: 8,
            total: 30000,
            month6: 6500,
            month12: 4000,
            month24: 2750,
            month36: 2334,
            month48: 2124,
            month60: 2000
        },
        {
            key: 9,
            total: 40000,
            month6: 8666,
            month12: 5333,
            month24: 3666,
            month36: 3112,
            month48: 2833,
            month60: 2666
        },
        {
            key: 10,
            total: 50000,
            month6: 10833,
            month12: 6667,
            month24: 4583,
            month36: 3890,
            month48: 3541,
            month60: 3333
        }
    ]

    const columns: ColumnsType<DATA1> = [
        {
            key: 'name',
            title: t('table1.col1'),
            dataIndex: 'total',
            align: 'center',
            className: 'my_table-header'
        },
        {
            key: 'name',
            title: t('table1.col2'),
            dataIndex: 'month6',
            align: 'center',
            className: 'my_table-header'
        },
        {
            key: 'name',
            title: t('table1.col3'),
            dataIndex: 'month12',
            align: 'center',
            className: 'my_table-header'
        },
        {
            key: 'name',
            title: t('table1.col4'),
            dataIndex: 'month24',
            align: 'center',
            className: 'my_table-header'
        },
        {
            key: 'name',
            title: t('table1.col5'),
            dataIndex: 'month36',
            align: 'center',
            className: 'my_table-header'
        },
        {
            key: 'name',
            title: t('table1.col6'),
            dataIndex: 'month48',
            align: 'center',
            className: 'my_table-header'
        },
        {
            key: 'name',
            title: t('table1.col7'),
            dataIndex: 'month60',
            align: 'center',
            className: 'my_table-header'
        }
    ]

    const [yourName, setYourName] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [email, setEmail] = useState('')
    const [loanAmount, setLoanAmount] = useState('')
    const [personalLoan, setPersonalLoan] = useState(false)
    const [businessLoan, setBusinessLoan] = useState(false)
    const [collateralizedLoan, setCollateralizedLoan] = useState(false)
    const [balanceTransfer, setBalanceTransfer] = useState(false)
    const [location, setLocation] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [employerName, setEmployerName] = useState('')
    const [monthlySalary, setMonthlySalary] = useState('')
    const [salaryMethod, setSalaryMethod] = useState('')
    const navigate = useNavigate()

    const onSubmit = () => {
        let params = {
            yourName,
            contactNumber,
            email,
            loanAmount,
            personalLoan,
            businessLoan,
            collateralizedLoan,
            balanceTransfer,
            location,
            jobTitle,
            employerName,
            monthlySalary,
            salaryMethod
        }
        console.log(params)
        apiApplyLoan(params).then((res: any) => {
            if (res.code === 0) {
                message.success(t('common.tipSubmitApplyLoanSuccess'))
                navigate('ThankYou')
            } else {
                message.error(t('syserr.' + res.code))
            }
        }).catch(() => {
            message.error(t('syserr.10001'))
        })
    }

    return (
        <div style={{padding: 0}}>
            <div style={{
                backgroundImage: `url("http://tellmeafter.com:8100/KL-skyline.jpeg")`,
                backgroundPosition: '50%',
                backgroundBlendMode: 'color',
                backgroundSize: "cover",
                // background: 'red',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(12,12,12,0.63)',
                marginTop: 0,
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                justifyContent: 'center'
                // background:'purple'
            }}>
                <Row style={{
                    position: 'relative',
                    top: 120,
                    width: '100%',
                    // paddingTop: '160px',
                    paddingBottom: '111px',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} style={{
                        display: 'flex',
                        maxWidth: 400,
                    }}>
                        <div style={{padding: 40}}>
                            <div style={{
                                color: '#fff',
                                fontSize: 30,
                                fontStyle: 'italic',
                                textAlign: 'center'
                            }}>{t('ban1.need_a')}
                            </div>
                            <div style={{
                                color: '#f6af02',
                                fontSize: 42,
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}>{t('ban1.personal_loan')}
                            </div>
                            <div style={{
                                color: '#fff',
                                fontSize: 40,
                                fontWeight: 'bold',
                                textAlign: 'center',
                                marginTop: 20
                            }}>{t('ban1.get_your_loan')}
                            </div>
                            <div style={{
                                color: '#fff',
                                fontSize: 16,
                                textAlign: 'center',
                                marginTop: 20,
                                lineHeight: 2
                            }}>{t('ban1.tip1')}
                            </div>
                            <div style={{marginTop: 50, textAlign: 'center'}}>
                                <Button style={{
                                    // borderRadius: 20,
                                    background: '#f6af0f',
                                    fontWeight: 'bold',
                                    color: '#fff',
                                    // borderColor: '#ccc',
                                    height: 40
                                }} shape='round'>{t('ban1.bt1')}</Button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} style={{padding: 20, maxWidth: 400}}>
                        <Card style={{background: '#e6e6e6', marginBottom: 40}} id='form1'>
                            <div
                                style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>{t('apply.title')}</div>
                            <Form style={{marginTop: 20}}>
                                <Form.Item>
                                    <div>{t('apply.yourName')} <span style={{color: 'red'}}>*</span></div>
                                    <Input onChange={(e) => {
                                        setYourName(e.target.value)
                                    }}></Input>
                                </Form.Item>
                                <Form.Item>
                                    <div>{t('apply.yourContactNumber')} <span style={{color: 'red'}}>*</span></div>
                                    <Input onChange={(e) => {
                                        setContactNumber(e.target.value)
                                    }}></Input>
                                </Form.Item>
                                <Form.Item>
                                    <div>{t('apply.email')} <span style={{color: 'red'}}>*</span></div>
                                    <Input onChange={e => {
                                        setEmail(e.target.value)
                                    }}></Input>
                                </Form.Item>
                                <Form.Item>
                                    <div>{t('apply.loanAmount')} <span style={{color: 'red'}}>*</span></div>
                                    <Input onChange={(e) => {
                                        setLoanAmount(e.target.value)
                                    }}></Input>
                                </Form.Item>
                                <Form.Item>
                                    <div>{t('apply.loanRequired')} <span style={{color: 'red'}}>*</span></div>
                                    <Checkbox onChange={(e) => {
                                        setPersonalLoan(e.target.checked)
                                    }}>{t('apply.personalLoan')}</Checkbox>
                                    <div style={{marginTop: 10}}>
                                        <Checkbox onChange={(e) => {
                                            setBusinessLoan(e.target.checked)
                                        }}>{t('apply.businessLoan')}</Checkbox>
                                    </div>
                                    <div style={{marginTop: 10}}>
                                        <Checkbox onChange={(e) => {
                                            setCollateralizedLoan(e.target.checked)
                                        }}>{t('apply.collateralizedLoan')}</Checkbox>
                                    </div>
                                    <div style={{marginTop: 10}}>
                                        <Checkbox onChange={(e) => {
                                            setBalanceTransfer(e.target.checked)
                                        }}>{t('apply.balanceTransfer')}</Checkbox>
                                    </div>
                                </Form.Item>
                                <Form.Item>
                                    <div>{t('apply.yourLocation')} <span style={{color: 'red'}}>*</span></div>
                                    <Select
                                        defaultValue="KL"
                                        style={{}}
                                        onChange={(e) => {
                                            console.log(e)
                                            setLocation(e)
                                        }}
                                        options={[
                                            {
                                                value: 'KL',
                                                label: t('apply.kualaLumpur'),
                                            },
                                            {
                                                value: 'SELANGOR',
                                                label: t('apply.selangor'),
                                            },
                                            {
                                                value: 'OTHERS',
                                                label: t('apply.others'),
                                            }
                                        ]}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <div>{t('apply.jobTitle')} <span style={{color: 'red'}}>*</span></div>
                                    <Input onChange={e => {
                                        setJobTitle(e.target.value)
                                    }}></Input>
                                </Form.Item>
                                <Form.Item>
                                    <div>{t('apply.employerName')} <span style={{color: 'red'}}>*</span></div>
                                    <Input onChange={e => {
                                        setEmployerName(e.target.value)
                                    }}></Input>
                                </Form.Item>
                                <Form.Item>
                                    <div>{t('apply.monthlySalary')} <span style={{color: 'red'}}>*</span></div>
                                    <Input onChange={e => {
                                        setMonthlySalary(e.target.value)
                                    }}></Input>
                                </Form.Item>
                                <Form.Item>
                                    <div>{t('apply.salaryMethod')} <span style={{color: 'red'}}>*</span></div>
                                    <Input onChange={e => {
                                        setSalaryMethod(e.target.value)
                                    }}></Input>
                                </Form.Item>
                            </Form>
                            <div>
                                <Button type='primary' style={{background: '#f6af0f'}} onClick={() => {
                                    onSubmit()
                                }}>{t('apply.btSubmit')}</Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>

            {/*3 Steps to Getting Your Loan Today*/}
            <div style={{fontSize: 20, fontWeight: 'bold', marginTop: 80, display: 'flex', justifyContent: "center"}}>
                {t('ban2.title1')}
            </div>
            <div style={{marginTop: 40, display: 'flex', justifyContent: 'center'}}>
                <Row style={{maxWidth: '1080px', display: 'flex', justifyContent: 'center'}}>
                    <Col xs={24} md={8} sm={8} lg={8} xl={8} xxl={8} style={{padding: '0 20px 20px 20px'}}>
                        <div style={{fontSize: 46, fontWeight: 'bold'}}>01</div>
                        <div style={{
                            marginTop: 20,
                            fontWeight: 'bold',
                            width: 200,
                            lineHeight: 1.5
                        }}>{t('ban2.sub1')}</div>
                        <div style={{
                            width: 100,
                            borderBottomWidth: 1,
                            background: '#f6af0f',
                            height: 2,
                            marginTop: 10
                        }}></div>
                        <div style={{marginTop: 10, fontSize: 14, lineHeight: 1.5}}>{t('ban2.content1')}</div>
                    </Col>
                    <Col xs={24} md={8} sm={8} lg={8} xl={8} xxl={8} style={{padding: '0 20px 20px 20px'}}>
                        <div style={{fontSize: 46, fontWeight: 'bold'}}>02</div>
                        <div style={{
                            marginTop: 20,
                            fontWeight: 'bold',
                            width: 200,
                            lineHeight: 1.5
                        }}>{t('ban2.sub2')}</div>
                        <div style={{
                            width: 100,
                            borderBottomWidth: 1,
                            background: '#f6af0f',
                            height: 2,
                            marginTop: 10
                        }}></div>
                        <div style={{marginTop: 10, fontSize: 14, lineHeight: 1.5}}>{t('ban2.content2')}</div>
                    </Col>
                    <Col xs={24} md={8} sm={8} lg={8} xl={8} xxl={8} style={{padding: '0 20px 20px 20px'}}>
                        <div style={{fontSize: 46, fontWeight: 'bold'}}>03</div>
                        <div style={{
                            marginTop: 20,
                            fontWeight: 'bold',
                            width: 200,
                            lineHeight: 1.5
                        }}>{t('ban2.sub3')}</div>
                        <div style={{
                            width: 100,
                            borderBottomWidth: 1,
                            background: '#f6af0f',
                            height: 2,
                            marginTop: 10
                        }}></div>
                        <div style={{marginTop: 10, fontSize: 14, lineHeight: 1.5}}>{t('ban2.content3')}</div>
                    </Col>
                </Row>
            </div>

            {/*OUR LOAN SERVICES*/}
            <div style={{fontSize: 20, fontWeight: 'bold', marginTop: 80, display: 'flex', justifyContent: "center"}}>
                <div style={{borderBottom: '2px solid #f6af0f'}}>
                    {t('ban3.title')}
                </div>
            </div>
            {/*<div style={{width:100, borderBottomWidth:1,background:'#f6af0f',height:2, marginTop:10}}></div>*/}
            <div style={{marginTop: 40, display: 'flex', justifyContent: 'center'}}>
                <Row style={{display: 'flex', justifyContent: "flex-start", alignItems: 'flex-start', maxWidth: 1080}}>
                    <Col xs={24} md={8} sm={8} lg={8} xl={8} xxl={8} style={{padding: '0 20px 20px 20px'}}>
                        <div style={{fontSize: 46, fontWeight: 'bold'}}><WalletFilled/></div>
                        <div style={{
                            marginTop: 20,
                            fontWeight: 'bold',
                            width: 200,
                            lineHeight: 1.5
                        }}>{t('ban3.sub1')}</div>
                        <div style={{marginTop: 10, fontSize: 14, lineHeight: 1.5}}>{t('ban3.content1')}</div>
                    </Col>
                    <Col xs={24} md={8} sm={8} lg={8} xl={8} xxl={8} style={{padding: '0 20px 20px 20px'}}>
                        <div style={{fontSize: 46, fontWeight: 'bold'}}><DollarCircleFilled/></div>
                        <div style={{
                            marginTop: 20,
                            fontWeight: 'bold',
                            width: 200,
                            lineHeight: 1.5
                        }}>{t('ban3.sub2')}</div>
                        <div style={{marginTop: 10, fontSize: 14, lineHeight: 1.5}}>{t('ban3.content2')}</div>
                    </Col>
                    <Col xs={24} md={8} sm={8} lg={8} xl={8} xxl={8} style={{padding: '0 20px 20px 20px'}}>
                        <div style={{fontSize: 46, fontWeight: 'bold'}}><InteractionFilled/></div>
                        <div style={{
                            marginTop: 20,
                            fontWeight: 'bold',
                            width: 200,
                            lineHeight: 1.5
                        }}>{t('ban3.sub3')}</div>
                        <div style={{marginTop: 10, fontSize: 14, lineHeight: 1.5}}>{t('ban3.content3')}</div>
                    </Col>
                </Row>
            </div>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Button shape='round'
                        style={{borderWidth: 2, borderColor: '#000', fontSize: 18, fontWeight: '500', height: 40}}
                        href='#form1'>{t('common.btApplyNow')}</Button>
            </div>

            {/*ban4*/}
            {/*Low interest rates*/}
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Row style={{
                    display: 'flex',
                    justifyContent: "flex-start",
                    alignItems: 'flex-start',
                    margin: '40px 0 40px 0',
                    background: "#dadada",
                    padding: 40,
                    maxWidth: 1080
                }}>
                    <Col xs={24} md={8} sm={24} lg={8} xl={8} xxl={8} style={{padding: '0 20px 20px 20px'}}>
                        <div style={{marginTop: 20, fontWeight: 'bold', lineHeight: 1.5}}>{t('ban4.sub1')}</div>
                        <div style={{
                            width: 100,
                            borderBottomWidth: 1,
                            background: '#f6af0f',
                            height: 2,
                            marginTop: 10
                        }}></div>
                        <div style={{
                            marginTop: 10,
                            fontSize: 14,
                            lineHeight: 2,
                            fontWeight: '200'
                        }}>{t('ban4.content1')}</div>
                        <div style={{marginTop: 10, fontSize: 14, lineHeight: 2,}}>{t('ban4.foot1')}</div>
                    </Col>
                    <Col xs={24} md={8} sm={24} lg={8} xl={8} xxl={8} style={{padding: '0 20px 20px 20px'}}>
                        <div style={{marginTop: 20, fontWeight: 'bold', lineHeight: 1.5}}>{t('ban4.sub2')}</div>
                        <div style={{
                            width: 100,
                            borderBottomWidth: 1,
                            background: '#f6af0f',
                            height: 2,
                            marginTop: 10
                        }}></div>
                        <div style={{
                            marginTop: 10,
                            fontSize: 14,
                            lineHeight: 2,
                            fontWeight: '200'
                        }}>{t('ban4.content2')}</div>
                        <div style={{marginTop: 10, fontSize: 14, lineHeight: 2}}>{t('ban4.foot2')}</div>
                        <div style={{marginTop: 10, fontSize: 14, lineHeight: 2}}>{t('ban4.foot3')}</div>
                    </Col>
                    <Col xs={24} md={8} sm={24} lg={8} xl={8} xxl={8} style={{padding: '0 20px 20px 20px'}}>
                        <div style={{
                            marginTop: 20,
                            fontWeight: 'bold',
                            width: 200,
                            lineHeight: 1.5
                        }}>{t('ban4.sub3')}</div>
                        <div style={{
                            width: 100,
                            borderBottomWidth: 1,
                            background: '#f6af0f',
                            height: 2,
                            marginTop: 10
                        }}></div>
                        <div style={{
                            marginTop: 10,
                            fontSize: 14,
                            lineHeight: 2,
                            fontWeight: '200'
                        }}>{t('ban4.content3')}</div>
                        <div style={{
                            marginTop: 10,
                            fontSize: 14,
                            lineHeight: 2,
                            fontWeight: '200'
                        }}>{t('ban4.content4')}</div>
                        <div style={{
                            marginTop: 0,
                            fontSize: 14,
                            lineHeight: 2,
                            fontWeight: '200'
                        }}>{t('ban4.content5')}</div>
                        <div style={{marginTop: 0, fontSize: 14, lineHeight: 2}}>{t('ban4.foot4')}</div>
                    </Col>
                </Row>
            </div>

            {/*ban5*/}
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: 'column',
                alignItems: 'center',
                background: '#cbd2dc',
            }}>
                <div style={{

                    maxWidth: 1080,
                    paddingBottom: 40,
                }}>
                    <Row style={{
                        paddingTop: 40,
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                            <div style={{padding: 20}}>
                                <img src='law-firm-12.jpg' style={{width: '100%'}}/>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                            <div style={{padding: 20}}>
                                <div style={{marginTop: 0, fontSize: 20, fontWeight: 'bold'}}>{t('ban5.cc1')}</div>
                                <div style={{marginTop: 40, fontSize: 38, fontWeight: "bold"}}>{t('ban5.cc2')}</div>
                                <div style={{
                                    marginTop: 40,
                                    fontSize: 16,
                                    lineHeight: 2,
                                    fontWeight: '200'
                                }}>{t('ban5.cc3')}</div>
                                <div style={{marginTop: 20, fontSize: 32, fontWeight: 'bold'}}>{t('ban5.cc4')}</div>
                                <div style={{marginTop: 20}}>
                                    <Button shape='round'
                                            style={{
                                                borderWidth: 2,
                                                borderColor: '#000',
                                                background: '#cbd2dc',
                                                width: 160,
                                                fontSize: 20,
                                                fontWeight: '500',
                                                height: 50
                                            }} href='#form1'>{t('common.btApplyNow')}</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <div
                        style={{
                            marginTop: 60,
                            fontSize: 32,
                            fontWeight: 'bold',
                            textAlign: 'center'
                        }}>{t('ban5.cc5')}</div>

                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{marginTop: 40}}>
                            {
                                Object.entries(screens)
                                    .filter((screen) => !!screen[1])
                                    .map((screen, index) => (
                                        screen[0] === 'sm' ?
                                            // <Tag color='blue' key={screen[0]}>{screen[0]}</Tag>
                                            <Table<DATA1> dataSource={theData} columns={columns} bordered
                                                          pagination={false}
                                                          size='small'
                                                          style={{}} key={index}/>
                                            :
                                            screen[0] === 'xs' ?
                                                <div style={{marginTop: 20, textAlign: 'center'}}>Please check from
                                                    pc</div>
                                                : null
                                    ))
                            }
                        </div>
                    </div>

                    <div style={{margin: 10, fontSize: 14, fontWeight: '200', lineHeight: 1.2, textAlign: 'center'}}>
                        {t('ban5.cc6')}
                    </div>
                </div>
            </div>

            {/*ban6*/}
            <div style={{display: 'flex', justifyContent: 'center', background: '#ececec', marginTop: 60,}}>
                <div style={{
                    padding: 40,
                    paddingTop: 80,
                    maxWidth: 1080,
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: 'column'
                }}>
                    <div style={{
                        padding: '0 40px 0 40px',
                        fontSize: 32,
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}>{t('ban6.title')}</div>
                    <div style={{
                        marginTop: 10,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    }}>
                        <div style={{
                            width: 100,
                            borderBottomWidth: 1,
                            background: '#f6af0f',
                            height: 2,
                            marginTop: 10,
                        }}></div>

                        <Carousel autoplay style={{marginTop: 40, paddingBottom: 40, width: 350}}
                                  dots={true} dotPosition='bottom'>
                            <div style={{}}>
                                <div
                                    style={{textAlign: "center", fontSize: 22, fontWeight: 400}}>"{t('ban6.p1.pc1')}"
                                </div>
                                <div style={{
                                    marginTop: 20,
                                    textAlign: "center",
                                    fontSize: 20,
                                    fontWeight: "bold"
                                }}>{t('ban6.p1.pc2')}
                                </div>
                                <div style={{
                                    marginTop: 20,
                                    textAlign: "center",
                                    fontSize: 20,
                                    fontWeight: "bold"
                                }}>{t('ban6.p1.pc3')}</div>
                                <div style={{
                                    marginTop: 20,
                                    textAlign: "center",
                                    fontSize: 20,
                                }}>{t('ban6.p1.pc4')}</div>
                            </div>
                            <div>
                                <div
                                    style={{textAlign: "center", fontSize: 22, fontWeight: 400}}>"{t('ban6.p2.pc1')}"
                                </div>
                                <div style={{
                                    marginTop: 20,
                                    textAlign: "center",
                                    fontSize: 20,
                                    fontWeight: "bold"
                                }}>{t('ban6.p2.pc2')}
                                </div>
                                <div style={{
                                    marginTop: 20,
                                    textAlign: "center",
                                    fontSize: 20,
                                    fontWeight: "bold"
                                }}>{t('ban6.p2.pc3')}</div>
                                <div style={{
                                    marginTop: 20,
                                    textAlign: "center",
                                    fontSize: 20,
                                }}>{t('ban6.p2.pc4')}</div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>

            <div style={{
                background: '#cdd3dd',
                marginTop: 60,
                display: 'flex',
                justifyContent: 'center',
                paddingBottom: 40,
            }}>
                <Row style={{paddingTop: 60, maxWidth: 1080}}>
                    <Col xs={24} md={8} sm={24} lg={8} xl={8} xxl={8} style={{padding: 20}}>
                        <div style={{fontSize: 20, fontWeight: 'bold'}}>{t('ban7.col1.title')}</div>
                        <div style={{
                            width: 160,
                            background: '#f6af0f',
                            height: 3,
                            marginTop: 20,
                        }}></div>
                        <div style={{
                            marginTop: 20,
                            fontSize: 16,
                            fontWeight: '200',
                            lineHeight: 2
                        }}>{t('ban7.col1.content')}</div>
                    </Col>
                    <Col xs={24} md={8} sm={24} lg={8} xl={8} xxl={8} style={{padding: 20}}>
                        <div style={{fontSize: 20, fontWeight: 'bold'}}>{t('ban7.col2.title')}</div>
                        <div style={{
                            width: 160,
                            background: '#f6af0f',
                            height: 3,
                            marginTop: 20,
                        }}></div>
                        <div style={{marginTop: 20, fontSize: 16, fontWeight: '200'}}>{t('ban7.col2.time1')}</div>
                        <div style={{marginTop: 20, fontSize: 16, fontWeight: '200'}}>{t('ban7.col2.time2')}</div>
                    </Col>
                    <Col xs={24} md={8} sm={24} lg={8} xl={8} xxl={8} style={{padding: 20}}>
                        <div style={{fontSize: 20, fontWeight: 'bold'}}>{t('ban7.col3.title')}</div>
                        <div style={{
                            width: 160,
                            background: '#f6af0f',
                            height: 3,
                            marginTop: 20,
                        }}></div>
                        <div style={{
                            marginTop: 20,
                            fontSize: 16,
                            fontWeight: '200',
                            lineHeight: 2
                        }}>{t('ban7.col3.content')}</div>
                    </Col>
                </Row>
            </div>
            <div style={{height: 40}}></div>
        </div>
    )
}
export default Home
