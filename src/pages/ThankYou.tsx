import {CopyrightOutlined, MenuOutlined} from "@ant-design/icons";
import {useState} from "react";
import {Breadcrumb, Menu, Modal} from "antd";
import {useTranslation} from "react-i18next";

const ThankYou = () => {
    const [collapse, setCollapse] = useState(false)
    const {t} = useTranslation()
    return (
        <div style={{height: '100vh'}}>
            <Breadcrumb style={{margin: 20}}>
                <Breadcrumb.Item><a href='/'>Home</a> </Breadcrumb.Item>
            </Breadcrumb>
            <div style={{padding: 40}}>
                <div style={{fontSize: 30, fontWeight: '350', marginTop: 80}}>{t('thankYou.thankYou')}</div>
                <div style={{marginTop: 30}}>
                    {t('thankYou.tip1')}
                </div>
                <div style={{marginTop: 30}}>
                    {t('thankYou.tip2')}
                </div>
            </div>
            <div style={{
                bottom: 0,
                background: '#181818',
                position: 'fixed',
                width: '100%',
                height: 80,
                color: '#fff',
                fontSize: 16,
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                COPYRIGHT <CopyrightOutlined/> 2022 LOANMALAYSIA.LOAN
            </div>
        </div>
    )
}
export default ThankYou
